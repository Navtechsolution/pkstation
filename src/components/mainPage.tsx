 "use client";

// for animate on scroll library
import { useEffect } from "react";
import  AOS from "aos";
import "aos/dist/aos.css";
// my components
import {Detail} from "./detail";
import {Sidebar} from "./sidebar";
const MainPage = () => {

    //useEffect for AOS
    useEffect(() => {
        AOS.init ({
          once : false,
        });
        }, []);


  return (

    <div className="flex overflow-hidden h-screen">
   <div className="w-1/5">
      <Sidebar />
    </div>
 <div className="w-full">
    <Detail />
    </div>
    </div>
  );
};

export default MainPage;