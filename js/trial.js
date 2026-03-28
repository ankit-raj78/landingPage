/**
 * trial.js — AI Detection trial widget
 *
 * Flow:
 *   1. User drops / picks an image
 *   2. On "Scan Image" Turnstile fires (invisible), returns token
 *   3. POST multipart/form-data to /api/public/trial/detect with:
 *        image, turnstileToken, fingerprintId
 *   4. Render verdict bars + scansRemaining
 */
(function () {
  'use strict';

  const API_URL = 'https://dev-landing-page.scam.ai/api/public/trial/detect';

  // ── DOM refs ───────────────────────────────────────────────────────────────
  const dropZone       = document.getElementById('trialDropZone');
  const fileInput      = document.getElementById('trialFileInput');
  const browseBtn      = document.getElementById('trialBrowseBtn');
  const previewWrap    = document.getElementById('trialPreview');
  const previewImg     = document.getElementById('trialPreviewImg');
  const removeBtn      = document.getElementById('trialRemoveBtn');
  const scanBtn        = document.getElementById('trialScanBtn');
  const scansInfo      = document.getElementById('trialScansInfo');
  const results        = document.getElementById('trialResults');
  const loading        = document.getElementById('trialLoading');
  const errorBox       = document.getElementById('trialError');
  const turnstileEl    = document.getElementById('trial-turnstile');

  // Result DOM
  const faceswapBar        = document.getElementById('trialFaceswapBar');
  const faceswapVerdict    = document.getElementById('trialFaceswapVerdict');
  const faceswapConfidence = document.getElementById('trialFaceswapConfidence');
  const aiBar              = document.getElementById('trialAiBar');
  const aiVerdict          = document.getElementById('trialAiVerdict');
  const aiConfidence       = document.getElementById('trialAiConfidence');
  const scansRemaining     = document.getElementById('trialScansRemaining');

  if (!dropZone) return; // section not on page

  let selectedFile = null;
  let turnstileToken = null;
  let turnstileWidgetId = null;

  // ── Turnstile ──────────────────────────────────────────────────────────────
  window.onTurnstileReady = function (token) {
    turnstileToken = token;
    submitDetection();
  };

  function initTurnstile() {
    if (typeof window.turnstile === 'undefined') return;
    if (turnstileWidgetId !== null) {
      window.turnstile.reset(turnstileWidgetId);
      return;
    }
    turnstileWidgetId = window.turnstile.render('#trial-turnstile', {
      sitekey: turnstileEl.dataset.sitekey,
      callback: window.onTurnstileReady,
      size: 'invisible',
    });
  }

  // ── File selection ─────────────────────────────────────────────────────────
  browseBtn.addEventListener('click', () => fileInput.click());

  fileInput.addEventListener('change', () => {
    if (fileInput.files && fileInput.files[0]) setFile(fileInput.files[0]);
  });

  // Drag & drop
  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('drag-over');
  });
  dropZone.addEventListener('dragleave', () => dropZone.classList.remove('drag-over'));
  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('drag-over');
    const file = e.dataTransfer.files && e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) setFile(file);
  });

  removeBtn.addEventListener('click', clearFile);

  function setFile(file) {
    if (file.size > 10 * 1024 * 1024) {
      showError('File too large. Maximum size is 10 MB.');
      return;
    }
    selectedFile = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      previewImg.src = e.target.result;
      dropZone.style.display = 'none';
      previewWrap.style.display = 'block';
    };
    reader.readAsDataURL(file);
    scanBtn.disabled = false;
    hideError();
    hideResults();
  }

  function clearFile() {
    selectedFile = null;
    fileInput.value = '';
    previewImg.src = '';
    previewWrap.style.display = 'none';
    dropZone.style.display = '';
    scanBtn.disabled = true;
    hideResults();
    hideError();
  }

  // ── Scan button ────────────────────────────────────────────────────────────
  scanBtn.addEventListener('click', () => {
    if (!selectedFile) return;
    hideError();
    hideResults();
    // Trigger Turnstile — callback fires submitDetection
    initTurnstile();
    // If Turnstile script not loaded yet, submit directly (dev/fallback)
    if (typeof window.turnstile === 'undefined') {
      turnstileToken = '';
      submitDetection();
    }
  });

  // ── Submit ─────────────────────────────────────────────────────────────────
  async function submitDetection() {
    if (!selectedFile) return;
    showLoading();

    const formData = new FormData();
    formData.append('image', selectedFile, selectedFile.name);
    formData.append('turnstileToken', turnstileToken || '');
    formData.append('fingerprintId', (window._fpVisitorId || 'unknown'));

    try {
      const resp = await fetch(API_URL, {
        method: 'POST',
        body: formData,
      });

      const data = await resp.json();
      hideLoading();

      if (!resp.ok) {
        if (resp.status === 429) {
          showError(data.message || 'Trial limit reached. Sign up for unlimited access at app.scam.ai');
          scansInfo.textContent = '0 free scans remaining today';
        } else if (resp.status === 403) {
          showError('Bot verification failed. Please refresh and try again.');
        } else {
          showError(data.error || 'Something went wrong. Please try again.');
        }
        return;
      }

      renderResults(data);
    } catch (err) {
      hideLoading();
      showError('Network error. Please check your connection and try again.');
    }
  }

  // ── Render results ─────────────────────────────────────────────────────────
  function renderResults(data) {
    const fs = data.faceswap || {};
    const ai = data.aiGenerated || {};

    // Faceswap bar
    const fsConf = Math.round((fs.confidence || 0) * 100);
    const fsClass = (fs.verdict || '').includes('fake') ? '' : 'verdict-real';
    faceswapBar.style.width = fsConf + '%';
    faceswapBar.className = 'trial-result-bar ' + fsClass;
    faceswapVerdict.textContent = formatVerdict(fs.verdict, 'faceswap');
    faceswapConfidence.textContent = fsConf + '% confidence';

    // AI image bar
    const aiConf = Math.round((ai.confidence || 0) * 100);
    const aiClass = (ai.verdict || '').includes('real') ? 'verdict-likely_real' : '';
    aiBar.style.width = aiConf + '%';
    aiBar.className = 'trial-result-bar ' + aiClass;
    aiVerdict.textContent = formatVerdict(ai.verdict, 'ai');
    aiConfidence.textContent = aiConf + '% confidence';

    // Scans remaining
    const rem = data.scansRemaining != null ? data.scansRemaining : '?';
    scansRemaining.textContent = rem + ' free scan' + (rem === 1 ? '' : 's') + ' remaining today';
    scansInfo.textContent = rem + ' free scan' + (rem === 1 ? '' : 's') + ' remaining today';

    results.style.display = 'block';
  }

  function formatVerdict(verdict, type) {
    const map = {
      fake: '🚨 Face Swap Detected',
      real: '✅ No Face Swap',
      likely_ai: '🤖 AI-Generated',
      likely_real: '✅ Likely Real',
      unavailable: '—',
    };
    return map[verdict] || (verdict || '—');
  }

  // ── UI helpers ─────────────────────────────────────────────────────────────
  function showLoading() {
    loading.style.display = 'block';
    scanBtn.disabled = true;
    scanBtn.textContent = 'Analyzing…';
  }

  function hideLoading() {
    loading.style.display = 'none';
    scanBtn.disabled = false;
    scanBtn.textContent = 'Scan Image';
  }

  function showError(msg) {
    errorBox.textContent = msg;
    errorBox.style.display = 'block';
  }

  function hideError() {
    errorBox.style.display = 'none';
    errorBox.textContent = '';
  }

  function hideResults() {
    results.style.display = 'none';
  }
})();
