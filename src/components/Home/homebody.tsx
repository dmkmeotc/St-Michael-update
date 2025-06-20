"use client"
import { AnnouncementsCard } from "./announcementsCard";

import { SupportCard } from "./supportCard";

import { StMichalCard } from "./stmichalCard";
import DotNav from "./DotNav";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Loading from "@/app/loading";
import { Suspense } from "react";

import QRCodeCard from "../QRCodeCard";
          
         

const Homebody = () => {
  


    return ( 
      <div className=" mx-auto w-full relative ">

         <DotNav />
<div className="h-2/3 sm:h-80 md:h-[400px] ">
 <Carousel autoPlay={false} interval={5000} infiniteLoop={true} showThumbs={false} showStatus={false} showIndicators={true}>
      <div>
      <div
  className=" grid grid-cols-1 place-items-center md:grid-cols-2 m-0 p-0 bg-[rgb(253,248,242)]  w-full px-8 border-2  "
  style={{ gridTemplateRows: 'auto auto' }}
>
  <div className="row-span-2">
        <Suspense fallback={<Loading/>}>
    <StMichalCard />
    </Suspense>
    </div>
  
  <div>
      <Suspense fallback={<Loading/>}>
    <AnnouncementsCard />
    </Suspense>
    </div>
 
  <div>
      <Suspense fallback={<Loading/>}>
    <SupportCard />
    </Suspense>
    </div>
</div>




 </div>

<div className="w-full h-full bg-ethGray-100">
       <div className="flex justify-between items-center gap-6 w-full  h-full p-16 ">
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Become a Church Member</h1>
         
            <QRCodeCard value="https://docs.google.com/forms/d/e/1FAIpQLSdVlOcEkZVK9dOmoLSH5pNjjjYcgfewWNgqSSRabTAAeWzjyg/viewform?vc=0&c=0&w=1&flr=0&gxids=7628"  text={''} size={300}/>
        </div>
   <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Join Sunday School</h1>
         
            <QRCodeCard value="https://your-website.com"  text={''} size={300}/>
        </div>
       </div>
    
      </div>
      <div  className="bg-ethRed-500">
      <h1>3</h1>
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
   
</div>

</div>

    );
}
 
export default Homebody;