"use client"
import { AnnouncementsCard } from "./announcementsCard";

import { SupportCard } from "./supportCard";

import { StMichalCard } from "./stmichalCard";
import DotNav from "./DotNav";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
          
         

const Homebody = () => {
  


    return ( 
      <div className="max-w-7xl mx-auto w-full relative ">

         <DotNav />
<div className="h-2/3 sm:h-80 md:h-[400px] ">
 <Carousel autoPlay={false} interval={5000} infiniteLoop={true} showThumbs={false} showStatus={false} showIndicators={true}>
      <div>
      <div
  className=" grid grid-cols-1 sm:grid-cols-2 m-0 p-0 bg-[rgb(253,248,242)]  w-full px-8 border-2 "
  style={{ gridTemplateRows: 'auto auto' }}
>
  <div className="row-span-2">
    <StMichalCard />
    </div>
  <div><AnnouncementsCard /></div>
  <div><SupportCard /></div>
</div>




 </div>

<div className="bg-ethGreen-500  flex grow">
       <h1>2</h1>
        <p className="legend">Legend 2</p>
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