gsap.registerPlugin(ScrollTrigger);

function headerGSAP() {
  let hero = gsap.timeline();
  hero.from(".navbar", { y: -100, duration: 1, opacity: 0 });
  hero.from(".hero-header h1", { y: 100, duration: 1, opacity: 0 }, "-=.5");
  hero.from(".hero-header p", { y: 70, duration: 0.8, opacity: 0 }, "-=.5");
  hero.from(".hero-header a", { y: 70, duration: 0.8, opacity: 0 }, "-=.5");
  hero.from("#HLS, #HRS", { duration: 1.5, opacity: 0 }, "-=1.5");
}

function heroscroll() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      scrub: 1,
      end: "bottom center",
    },
  });

  tl.to("#shape1", {
    rotation: 80,
    y: -50,
    ease: "expo.out",
  });

  tl.to(
    "#shape2",
    {
      rotation: -20,
      y: -70,
      ease: "expo.out",
    },
    "-=.5"
  );

  tl.to(
    "#shape3",
    {
      rotation: 20,
      ease: "expo.out",
    },
    "-=.5"
  );

  tl.to(
    "#shape4",
    {
      rotation: -50,
      ease: "expo.out",
    },
    "-=.5"
  );

  tl.to(
    "#shape5",
    {
      rotation: -50,
      y: -50,
      ease: "expo.out",
    },
    "-=.5"
  );

  tl.to(
    "#shape6",
    {
      rotation: 30,
      ease: "expo.out",
    },
    "-=.5"
  );

  tl.to(
    "#shape7",
    {
      rotation: -15,
      ease: "expo.out",
    },
    "-=.5"
  );

  // round cnt animation
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".icon-section",
      start: "top 400px",
      stagger: true,
      end: "bottom center",
    },
  });

  tl2.from(".icon-section", {
    y: 50,
    opacity: 0,
    duration: 1.5,
    ease: "expo.out",
  });

  tl2.from(
    ".icon-section h2",
    {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
    },
    "-=1"
  );

  tl2.from(
    ".icon-item",
    {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
    },
    "-=.7"
  );
}

function about() {
  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#about",
      start: "top 350px",
      end: "bottom center",
    },
  });

  tl3.from(".aboutImg", {
    scale: 0,
    opacity: 0,
    duration: 1.5,
    ease: "expo.out",
  });

  tl3.from(
    ".aboutText h1",
    {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "expo.out",
    },
    "-=1.5"
  );

  tl3.from(
    ".aboutText p",
    {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "expo.out",
    },
    "-=1"
  );

  tl3.from(
    ".aboutText a",
    {
      opacity: 0,
      duration: 1.5,
      ease: "expo.out",
    },
    "-=.5"
  );
}

function work() {
  var tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: "#work",
      start: "top 350px",
      end: "bottom center",
    },
  });

  tl4.from("#work h1", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: "expo.out",
  });
  tl4.from(
    ".projectCards>div:nth-child(1)",
    {
      y: 30,
      opacity: 0,
      duration: 1.5,
      ease: "expo.out",
    },
    "-=1"
  );
  tl4.from(
    ".projectCards>div:nth-child(2)",
    {
      y: 100,
      opacity: 0,
      duration: 2,
      ease: "expo.out",
    },
    "-=1.5"
  );
  tl4.from(
    ".projectCards>div:nth-child(3)",
    {
      y: 150,
      opacity: 0,
      duration: 2,
      ease: "expo.out",
    },
    "-=2"
  );
  tl4.from(
    ".project a",
    {
      y: 100,
      opacity: 0,
      duration: 2,
      ease: "expo.out",
    },
    "-=1.5"
  );
}

function pricing() {
  var tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: "#pricing",
      start: "top top",
      scrub: 1,
      end: "bottom center",
    },
  });

  tl5.to("#shape8", {
    rotation: 100,
    ease: "expo.out",
  });

  tl5.to(
    "#shape9",
    {
      rotation: 40,
      ease: "expo.out",
    },
    "-=.5"
  );

  tl5.to(
    "#shape10",
    {
      y: -40,
      x: -50,
      ease: "expo.out",
    },
    "-=.5"
  );

  tl5.to(
    "#shape11",
    {
      rotation: 50,
      ease: "expo.out",
    },
    "-=.5"
  );

  tl5.to(
    "#shape12",
    {
      rotation: -50,
      y: -50,
      ease: "expo.out",
    },
    "-=.5"
  );

  tl5.to(
    "#shape13",
    {
      rotation: 30,
      ease: "expo.out",
    },
    "-=.5"
  );

  // texts
  var tl6 = gsap.timeline({
    scrollTrigger: {
      trigger: ".pricingHeader",
      start: "top 400px",
      stagger: true,
      end: "bottom center",
    },
  });

  tl6.from(".pricingHeader h1", {
    y: 50,
    opacity: 0,
    duration: 1.5,
    ease: "expo.out",
  });

  tl6.from(
    ".pricingHeader p",
    {
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: "expo.out",
    },
    "-=1"
  );
  tl6.from(
    ".pricingHeader>div",
    {
      opacity: 0,
      duration: 1.5,
      ease: "expo.out",
    },
    "-=1"
  );
}

function faq() {
  var tl7 = gsap.timeline({
    scrollTrigger: {
      trigger: "#faq",
      start: "top 400px",
      stagger: true,
      end: "bottom center",
    },
  });

  tl7.from(".faq_inner h1", {
    y: 50,
    opacity: 0,
    duration: 1.5,
    ease: "expo.out",
  });

  const faq = gsap.utils.toArray(".question");
  faq.forEach((question) => {
    gsap.from(question, {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: question,
      },
    });
  });

  // icons
  var icons = gsap.timeline({
    scrollTrigger: {
      trigger: "#faq",
      start: "top top",
      scrub: 1,
      end: "bottom center",
    },
  });

  icons.to("#shape14", {
    rotation: 50,
    ease: "expo.out",
  });

  icons.to(
    "#shape15",
    {
      y: -70,
      x: 50,
      ease: "expo.out",
    },
    "-=.5"
  );
  icons.to(
    "#shape16",
    {
      rotation: 50,
      ease: "expo.out",
    },
    "-=.5"
  );
  icons.to(
    "#shape17",
    {
      rotation: -50,
      ease: "expo.out",
    },
    "-=.5"
  );
  icons.to(
    "#shape18",
    {
      rotation: 100,
      ease: "expo.out",
    },
    "-=.5"
  );
  icons.to(
    "#shape21",
    {
      rotation: 30,
      ease: "expo.out",
    },
    "-=.5"
  );
  icons.to(
    "#shape22",
    {
      rotation: -10,
      y: -70,
      ease: "expo.out",
    },
    "-=.5"
  );
}
function marquee() {
  const root = document.documentElement;
  const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
    "--marquee-elements-displayed"
  );
  const marqueeContent = document.querySelector("ul.marquee-content");

  root.style.setProperty("--marquee-elements", marqueeContent.children.length);

  for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
  }
}

headerGSAP();
heroscroll();
about();
work();
pricing();
faq();
marquee();
