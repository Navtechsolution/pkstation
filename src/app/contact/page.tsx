import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import Bannertitle from '@/components/Bannertitle'


const page = () => {
  return (
<div>
    <Bannertitle/>
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10">
        <h1 className="text-black text-3xl">Contact Information</h1>
        <p className='mt-3'>Fill the form below or write us .We will try our best to help you as soon as possible.</p>
        <div className="grid grid-cols-2 mt-8 gap-4">
        <div className="px-6 info-phone">
          <div className='flex justify-center items-center'>
        <FaPhoneAlt  className="text-3xl"/>
        </div>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest  mt-3 text-xl">
          Phone
          </h2>
          <p className="mt-1">
          +91 92 81 44 81 81
          </p>
        </div>
        <div className="px-6 info-phone">
          <div className='flex justify-center items-center'>
          <MdEmail className="text-3xl"/>
          </div>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xl mt-3">
          Email
          </h2>
          <p className="mt-1">
          pikstation18@gmail.com
          </p>
        </div>
       </div>
       <div className="grid-cols-12">
       <div className="px-6 info-phone">
          <div className='flex justify-center items-center'>
        <FaMapMarkerAlt className="text-3xl"/>
        </div>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest  mt-3 text-xl">
          Address
          </h2>
          <p className="mt-1">
          Visakhapatnam, Andhra Pradesh, Visakhapatnam
          </p>
        </div>
       </div>
        </div>
       
      {/* <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1">
            Photo booth tattooed prism, portland taiyaki hoodie neutra
            typewriter
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            EMAIL
          </h2>
          <a className="text-indigo-500 leading-relaxed">example@email.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed">123-456-7890</p>
        </div>
      </div>
    </div> */}
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font question">
        Have any Question
      </h2>
      {/* <p className="leading-relaxed mb-5 text-gray-600">
        Post-ironic portland shabby chic echo park, banjo fashion axe
      </p> */}
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Phone
        </label>
        <input
          type="phone"
          id="phone"
          name="phone"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Subject
        </label>
        <input
          type="subject"
          id="subject"
          name="subject"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Send Messages
      </button>
      
    </div>
  </div>
</section>
</div>
  )
}


export default page