import { AuroraText } from '@/components/ui/aurora-text'

export default function FeaturesBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-red-hat-display">
              Put <AuroraText colors={["#3ABAB4", "#667EEA", "#F093FB", "#F5576C"]} speed={1.2}>collaboration</AuroraText> at the heart of music creation
            </h2>
          </div>

          {/* Items */}
          <div className="max-w-xs mx-auto sm:max-w-none md:max-w-xl lg:max-w-none grid sm:grid-cols-2 gap-4 lg:gap-6 lg:grid-cols-4" data-aos-id-featbl>

            {/* 1st item */}
            <a className="flex flex-col p-5 group text-white bg-linear-to-tr from-teal-500 to-teal-400 dark:to-teal-500 shadow-2xl" href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-featbl]">
              <svg className="w-8 h-8 mb-3" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-current" d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zM9 12h6v2H9v-2zm0 4h6v2H9v-2zm8-8h6v2h-6V8zm0 4h6v2h-6v-2zm0 4h6v2h-6v-2zm0 4h6v2h-6v-2z" fillRule="nonzero" />
              </svg>
              <div className="font-red-hat-display text-xl font-black tracking-tighter mb-1">Real-time Collaboration</div>
              <div className="grow opacity-80 mb-4">Create music together with friends in synchronized rooms with live audio streaming.</div>
              <svg className="w-6 h-6 self-end transform -translate-x-2 group-hover:translate-x-0 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-current" d="M13 11V5.057L22.72 12 13 18.943V13H2v-2h11zm2 4.057L19.28 12 15 8.943v6.114z" />
              </svg>
            </a>

            {/* 2nd item */}
            <a className="flex flex-col p-5 group text-white bg-linear-to-tr from-purple-500 to-purple-400 dark:to-purple-500 shadow-2xl" href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-featbl]" data-aos-delay="100">
              <svg className="w-8 h-8 mb-3" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-current" d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 30C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14zm-1-21h2v6h-2V9zm0 8h2v2h-2v-2z" fillRule="nonzero" />
              </svg>
              <div className="font-red-hat-display text-xl font-black tracking-tighter mb-1">AI-Powered Matching</div>
              <div className="grow opacity-80 mb-4">Smart algorithm suggests the perfect collaboration rooms based on your style and preferences.</div>
              <svg className="w-6 h-6 self-end transform -translate-x-2 group-hover:translate-x-0 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-current" d="M13 11V5.057L22.72 12 13 18.943V13H2v-2h11zm2 4.057L19.28 12 15 8.943v6.114z" />
              </svg>
            </a>

            {/* 3rd item */}
            <a className="flex flex-col p-5 group text-white bg-linear-to-tr from-indigo-500 to-indigo-400 dark:to-indigo-500 shadow-2xl" href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-featbl]" data-aos-delay="200">
              <svg className="w-8 h-8 mb-3" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-current" d="M16 20a4 4 0 110-8 4 4 0 010 8zm0-6a2 2 0 100 4 2 2 0 000-4zM6 16a10 10 0 1120 0 10 10 0 01-20 0zm18 0a8 8 0 10-16 0 8 8 0 0016 0z" fillRule="nonzero" />
              </svg>
              <div className="font-red-hat-display text-xl font-black tracking-tighter mb-1">Professional DAW</div>
              <div className="grow opacity-80 mb-4">Full-featured digital audio workstation with industry-standard tools and effects.</div>
              <svg className="w-6 h-6 self-end transform -translate-x-2 group-hover:translate-x-0 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-current" d="M13 11V5.057L22.72 12 13 18.943V13H2v-2h11zm2 4.057L19.28 12 15 8.943v6.114z" />
              </svg>
            </a>

            {/* 4th item */}
            <a className="flex flex-col p-5 group text-white bg-linear-to-tr from-pink-500 to-pink-400 dark:to-pink-500 shadow-2xl" href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-featbl]" data-aos-delay="300">
              <svg className="w-8 h-8 mb-3" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-current" d="M26 28H6a2 2 0 01-2-2V6a2 2 0 012-2h20a2 2 0 012 2v20a2 2 0 01-2 2zM6 6v20h20V6H6zm4 8h8v2h-8v-2zm0 4h8v2h-8v-2zm0-8h8v2h-8v-2z" fillRule="nonzero" />
              </svg>
              <div className="font-red-hat-display text-xl font-black tracking-tighter mb-1">Social Discovery</div>
              <div className="grow opacity-80 mb-4">Connect with musicians worldwide and build your creative network through shared projects.</div>
              <svg className="w-6 h-6 self-end transform -translate-x-2 group-hover:translate-x-0 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-current" d="M13 11V5.057L22.72 12 13 18.943V13H2v-2h11zm2 4.057L19.28 12 15 8.943v6.114z" />
              </svg>
            </a>

          </div>

        </div>
      </div>
    </section>
  )
}