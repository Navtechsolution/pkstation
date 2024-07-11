import Typewriter from 'typewriter-effect';
import { FaCloudDownloadAlt, FaLinkedin, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa6';
import { Mail } from 'lucide-react';

export function Sidebar( ) {
  return (
    <div className="h-screen flex flex-col items-center">
     {/* image */}
    <Image src = "/assets/men.png" alt= "profile png"  width = {500} height={500} className="rounded-md"/>
      {/* name*/}
      <div className="mt-2">
  <h1 className="text-2xl font-bold tracking-tight uppercase">Ratan Lal</h1>
  <h2 className="text-md font-semibold tracking-tight text-gray-600"><Typewriter
  options={{
    strings: ['web developer', 'UI/UX','Graphic Designer', 'Web Designer'],
    autoStart: true,
    loop: true,
  }}
/></h2>
  </div>
  {/* social icons */}

  <div className="mt-3 grid grid-cols-3 gap-2">
 {/* linkedin icons */}
 <div>
 <Link href="#" target='_blank' className="text-gray-600 hover:text-[#0762c8]">
<FaLinkedin className='text-2xl'/>
</Link>
</div>
  {/* youtube icons */}
  <div>
 <Link href="#" target='_blank' className="text-gray-600 hover:text-[#FF0000]">
<FaYoutube className='text-2xl'/>
</Link>
</div>
   {/* github icons */}
   <div>
 <Link href="#" target='_blank' className="text-gray-600 hover:text-[#24292e]">
<FaGithub className='text-2xl'/>
</Link>
</div>
  </div>
{/* Download cv */}
<Link href={"/assets/resume.pdf"} className='mt-5' target='_blank'>
<Button>
<FaCloudDownloadAlt className='mr-2 h-4 w-4' /> Download CV
    </Button>

    </Link>

    </div>
  )
}