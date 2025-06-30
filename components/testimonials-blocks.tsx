import Image from 'next/image'
import TestimonialImage01 from '@/public/images/testimonial-01.jpg'
import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'
import TestimonialImage04 from '@/public/images/testimonial-04.jpg'

export default function TestimonialsBlocks() {  
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">

          {/* Testimonials */}
          <div className="relative max-w-3xl mx-auto text-center">

            <div className="relative">

              {/* Quotation mark */}
              <svg className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 lg:-translate-x-8 text-gray-200 dark:text-gray-700 fill-current" width="40" height="30" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.724 0c3.747 0 6.486 1.278 8.215 3.834C28.688 6.391 29.333 9.33 29.333 12.653c0 3.969-1.355 7.351-4.065 10.146-2.729 2.794-6.476 4.192-11.24 4.192h-2.992V18.1h2.992c1.81 0 3.328-.456 4.553-1.368 1.187-.931 1.78-2.116 1.78-3.555l.137-.842h-.491c-1.245 0-2.31-.364-3.194-1.092C15.149 10.52 14.707 9.441 14.707 8.08c0-1.378.573-2.533 1.718-3.467C17.57.62 18.972.001 20.83.001h-.106c.658 0 1.216.021 1.675.062.458.041.838.1 1.139.175.301.075.514.157.64.247.126.09.189.175.189.256 0 .081-.063.166-.189.256-.126.09-.339.172-.64.247-.301.075-.681.134-1.139.175-.459.041-1.017.062-1.675.062h.106zm-18.1 0c3.747 0 6.486 1.278 8.215 3.834C10.588 6.391 11.233 9.33 11.233 12.653c0 3.969-1.355 7.351-4.065 10.146-2.729 2.794-6.476 4.192-11.24 4.192H-7.064V18.1h2.992c1.81 0 3.328-.456 4.553-1.368 1.187-.931 1.78-2.116 1.78-3.555l.137-.842h-.491c-1.245 0-2.31-.364-3.194-1.092C-2.951 10.52-3.393 9.441-3.393 8.08c0-1.378.573-2.533 1.718-3.467C-1.53.62-.128.001 1.73.001h-.106c.658 0 1.216.021 1.675.062.458.041.838.1 1.139.175.301.075.514.157.64.247.126.09.189.175.189.256 0 .081-.063.166-.189.256-.126.09-.339.172-.64.247-.301.075-.681.134-1.139.175-.459.041-1.017.062-1.675.062h.106z"/>
              </svg>

              <div className="mb-20">
                <p className="text-2xl text-gray-600 dark:text-gray-400 italic">
                "SyncTown has completely revolutionized my creative process. I can now collaborate with producers from around the world in real-time, creating music together as if we're in the same studio. The AI suggestions for finding collaborators have introduced me to incredible artists I never would have discovered otherwise."
                </p>
              </div>

              <div className="flex flex-wrap justify-center items-center -m-2">
                <div className="m-2">
                  <img className="rounded-full" src="/images/user-1.jpg" width="40" height="40" alt="DJ Luna" />
                </div>
                <div className="m-2">
                  <span className="font-bold text-gray-700 dark:text-gray-300">DJ Luna</span>
                  <span className="text-gray-600 dark:text-gray-400"> / </span>
                  <a className="text-gray-600 dark:text-gray-400 hover:underline" href="#0">Electronic Music Producer</a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* 2nd testimonials */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          <div className="grid md:grid-cols-3 gap-20" data-aos-id-blocks>

            {/* 1st testimonial */}
            <div className="text-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-3 fill-current text-purple-500 mx-auto" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.204 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.204 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
              </svg>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400 italic mb-3">
                "The real-time collaboration features are incredible. I can write lyrics while my producer friend lays down beats, and we both hear everything instantly. It's like magic!"
              </blockquote>
              <div className="font-red-hat-display font-bold">
                <cite className="text-gray-900 dark:text-gray-200 not-italic">Sarah M.</cite>
                <span className="text-purple-500"> / </span>
                <span className="text-gray-600 dark:text-gray-400">Singer-Songwriter</span>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="text-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]" data-aos-delay="100">
              <svg className="w-16 h-16 mb-3 fill-current text-purple-500 mx-auto" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.204 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.204 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
              </svg>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400 italic mb-3">
                "As a studio owner, SyncTown has opened up new revenue streams. We can now offer remote collaboration services to clients worldwide. The platform's professional tools are outstanding."
              </blockquote>
              <div className="font-red-hat-display font-bold">
                <cite className="text-gray-900 dark:text-gray-200 not-italic">Marcus Rodriguez</cite>
                <span className="text-purple-500"> / </span>
                <span className="text-gray-600 dark:text-gray-400">Studio Owner & Producer</span>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="text-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]" data-aos-delay="200">
              <svg className="w-16 h-16 mb-3 fill-current text-purple-500 mx-auto" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.204 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.204 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
              </svg>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400 italic mb-3">
                "The AI-powered room suggestions are spot-on. I've found my best collaborators through the platform's recommendations. It's like having a personal A&R scout!"
              </blockquote>
              <div className="font-red-hat-display font-bold">
                <cite className="text-gray-900 dark:text-gray-200 not-italic">Alex Chen</cite>
                <span className="text-purple-500"> / </span>
                <span className="text-gray-600 dark:text-gray-400">Hip-Hop Producer</span>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  )
}