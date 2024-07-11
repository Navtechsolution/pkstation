 import React from 'react';
import Image from 'next/image';
import { Input } from "@/components/ui/input"
const page = () => {
 return (
  <>
  <div className="backgroundimage">
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <h1 className="sm:text-3xl md:text-5xl font-medium title-font mb-4 text-black">
      Increase Your Productivity
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-black">
      Find Free PSD files, Images, Vectors, PNG and more
      </p>
    </div>
   
</div>
</section>
 </div>
 {/* -----------  Graphic  browser section start    */}
<div className='container bg-gray-100'>
<section className="text-gray-600 body-font">
  <div className="cosntainer px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-lg tracking-widest font-medium title-font mb-1 text-yellow-400">
      Browse
      </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
      Graphic Design Assets
      </h1>
    </div>
  
    <div className="grid md:grid-cols-4 lg:grid-cols-6 xs:grid-cols-4  sm:grid-cols-2 gap-4">
  <div>
 <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col cat-back mx-auto text-center">
          <div className="items-center mb-3">
            <div className="w-20 h-20 mr-3 inline-flex items-center justify-center  text-white flex-shrink-0">
              <Image src="assets/social.png"  alt="logo"
      width={200}
      height={200}/>
              
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium items-center">
            Social media 
            </h2>
          </div>
          <div className="flex-grow">
            
            <a className="mt-3 text-indigo-500 inline-flex items-center">
              View all
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
  </div>
  <div>
  <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col cat-back mx-auto text-center">
          <div className="items-center mb-3">
            <div className="w-20 h-20 mr-3 inline-flex items-center justify-center  text-white flex-shrink-0">
              <Image src="assets/images.png"  alt="logo"
      width={200}
      height={200}/>
              
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium items-center">
            Images 
            </h2>
          </div>
          <div className="flex-grow">
            
            <a className="mt-3 text-indigo-500 inline-flex items-center">
              View all
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
  </div>
  <div> <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col cat-back mx-auto text-center">
          <div className="items-center mb-3">
            <div className="w-20 h-20 mr-3 inline-flex items-center justify-center  text-white flex-shrink-0">
              <Image src="assets/vector.png"  alt="logo"
      width={200}
      height={200}/>
              
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium items-center">
            Vector
            </h2>
          </div>
          <div className="flex-grow">
            
            <a className="mt-3 text-indigo-500 inline-flex items-center">
              View all
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div></div>
  <div> <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col cat-back mx-auto text-center">
          <div className="items-center mb-3">
            <div className="w-20 h-20 mr-3 inline-flex items-center justify-center  text-white flex-shrink-0">
              <Image src="assets/png.png"  alt="logo"
      width={200}
      height={200}/>
              
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium items-center">
            PNG
            </h2>
          </div>
          <div className="flex-grow">
            
            <a className="mt-3 text-indigo-500 inline-flex items-center">
              View all
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div></div>
  <div> <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col cat-back mx-auto text-center">
          <div className="items-center mb-3">
            <div className="w-20 h-20 mr-3 inline-flex items-center justify-center  text-white flex-shrink-0">
              <Image src="assets/templates.png"  alt="logo"
      width={200}
      height={200}/>
              
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium items-center">
            Templates
            </h2>
          </div>
          <div className="flex-grow">
            
            <a className="mt-3 text-indigo-500 inline-flex items-center">
              View all
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div></div>
  <div> 
    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col cat-back mx-auto text-center">
          <div className="items-center mb-3">
            <div className="w-20 h-20 mr-3 inline-flex items-center justify-center  text-white flex-shrink-0">
              <Image src="assets/mock.png"  alt="logo"
      width={200}
      height={200}/>
              
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium items-center">
            Mockup
            </h2>
          </div>
          <div className="flex-grow">
            
            <a className="mt-3 text-indigo-500 inline-flex items-center">
              View all
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
        
        </div>
</div>

</div>
</section>


        </div>
<div className='container'>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className=" border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="assets/women.png"
            alt="blog"
            width={500}
            height={500}
          />
          <div className="p-6">

          <p className="price">
                                        <span>₹</span>0
                                    </p>
             <p className="tracking-widest text-xs title-font font-medium text-gray-400 mb-3 pt-2">
             by pik station In Social media
            </p> 
            
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Women Leggings And Fashion
            </h1>
            {/* <p className="leading-relaxed mb-3">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p> */}
            {/* <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div> */}
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className=" border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="assets/shirt.png"
            alt="blog"
            width={500}
            height={500}
          />
          <div className="p-6">
            
          <p className="price">
                                        <span>₹</span>0
                                    </p>
            <p className="tracking-widest text-xs title-font font-medium text-gray-400 mb-3 pt-2">
            by pik station In Social media
            </p>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Shirts And Fashion Concept
            </h1>
            {/* <p className="leading-relaxed mb-3">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p> */}
            {/* <div className="flex items-center flex-wrap">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div> */}
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className=" border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="assets/saloon.png"
            alt="blog"
            width={500}
            height={500}
          />
          <div className="p-6">
            
          <p className="price">
                                        <span>₹</span>0
                                    </p>
            <p className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            by pik station In Social media
            </p>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3 pt-2">
            Modern Salon Price List Menu
            </h1>
            {/* <p className="leading-relaxed mb-3">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p> */}
            {/* <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div> */}
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className=" border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="assets/saloon.png"
            alt="blog"
            width={500}
            height={500}
          />
          <div className="p-6">
            
          <p className="price">
                                        <span>₹</span>0
                                    </p>
            <p className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            by pik station In Social media
            </p>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3 pt-2">
            Modern Salon Price List Menu
            </h1>
           
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className=" border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="assets/saloon.png"
            alt="blog"
            width={500}
            height={500}

          />
          <div className="p-6">
            
          <p className="price">
                                        <span>₹</span>0
                                    </p>
            <p className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            by pik station In Social media
            </p>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3 pt-2">
            Modern Salon Price List Menu
            </h1>
            {/* <p className="leading-relaxed mb-3">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p> */}
            {/* <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div> */}
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className=" border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="assets/saloon.png"
            alt="blog"
            width={500}
            height={500}
          />
          <div className="p-6">
            
          <p className="price">
                                        <span>₹</span>0
                                    </p>
            <p className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            by pik station In Social media
            </p>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3 pt-2">
            Modern Salon Price List Menu
            </h1>
      
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className=" border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="assets/saloon.png"
            alt="blog"
            width={500}
            height={500}
          />
          <div className="p-6">
            
          <p className="price">
                                        <span>₹</span>0
                                    </p>
            <p className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            by pik station In Social media
            </p>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3 pt-2">
            Modern Salon Price List Menu
            </h1>
           
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className=" border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="assets/saloon.png"
            alt="blog"
            width={500}
            height={500}
          />
          <div className="p-6">
            
          <p className="price">
                                        <span>₹</span>0
                                    </p>
            <p className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            by pik station In Social media
            </p>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3 pt-2">
            Modern Salon Price List Menu
            </h1>
            
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className=" border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="assets/saloon.png"
            alt="blog"
            width={500}
            height={500}
          />
          <div className="p-6">
            
          <p className="price">
                                        <span>₹</span>0
                                    </p>
            <p className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            by pik station In Social media
            </p>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3 pt-2">
            Modern Salon Price List Menu
            </h1>
            
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>

</div>    
</>   
) 

}

export default page