import { AuroraText } from '@/components/ui/aurora-text'

export default function TestimonialsBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">

          {/* Testimonials */}
          <div className="max-w-3xl mx-auto mt-16" data-aos="fade-up">
            <div className="relative">

              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-3">
                  <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-teal-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.204 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.204 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  I've tried everything from Soundtrap to BandLab, but SyncTown is the first platform that actually feels like jamming with friends, not fighting with software.
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Alex Chen</cite>
                <div className="text-gray-600 dark:text-gray-400">
                  <span>Beat Producer</span>
                </div>
              </div>

            </div>
          </div>

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-red-hat-display mb-4">
              Join the <AuroraText colors={["#FF0080", "#00D4FF", "#FFFF00", "#FF8C00"]} speed={1.2}>Creative Revolution</AuroraText>
            </h2>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none" data-aos-id-blocks>

            {/* 1st testimonial */}
            <div className="text-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-3 fill-current text-teal-500 mx-auto" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.204 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.204 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
              </svg>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400 italic mb-3">
                "Finally, a platform where I can sketch ideas instantly and still get professional results. The AI room matching introduced me to collaborators I never would have found."
              </blockquote>
              <div className="font-red-hat-display font-bold">
                <cite className="text-gray-900 dark:text-gray-200 not-italic">Sarah Martinez</cite>
                <span className="text-teal-500"> / </span>
                <span className="text-gray-600 dark:text-gray-400">Indie Artist</span>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="text-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]" data-aos-delay="100">
              <svg className="w-16 h-16 mb-3 fill-current text-purple-500 mx-auto" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.204 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.204 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
              </svg>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400 italic mb-3">
                "I've tried everything from Soundtrap to BandLab, but SyncTown is the first platform that actually feels like jamming with friends, not fighting with software."
              </blockquote>
              <div className="font-red-hat-display font-bold">
                <cite className="text-gray-900 dark:text-gray-200 not-italic">Alex Chen</cite>
                <span className="text-purple-500"> / </span>
                <span className="text-gray-600 dark:text-gray-400">Beat Producer</span>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="text-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]" data-aos-delay="200">
              <svg className="w-16 h-16 mb-3 fill-current text-pink-500 mx-auto" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.204 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.204 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
              </svg>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400 italic mb-3">
                "As a music teacher, I love how students can jump in and start creating immediately. No technical barriers, just pure creativity."
              </blockquote>
              <div className="font-red-hat-display font-bold">
                <cite className="text-gray-900 dark:text-gray-200 not-italic">Prof. Anshu Kumari</cite>
                <span className="text-pink-500"> / </span>
                <span className="text-gray-600 dark:text-gray-400">Shantiniketan Kala Bhavan University</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}