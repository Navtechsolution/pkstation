import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Testimonial from '@/components/Testimonial'
import Bannertitle from '@/components/Bannertitle'
import React from 'react'


const about = () => {
  return (
    <>
    <Bannertitle/>
    <Hero/>
  <div>
  <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      
      <h1 className="sm:text-3xl text-5xl font-medium title-font mb-4 text-yellow-400">
      The Origins of Pikstation
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
      Project Pikstation was and idea by a small group 2019, but budget constraints delayed its lauch. In 2023, with a more flexibe budget we were inspired to establish a platform catering to designeres in search of free and affordably priced graphic resources.
      </p>
    </div>
  
  </div>
</section>

  </div>
    </>
  )
}

export default about