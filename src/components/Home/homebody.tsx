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
     
         
// ... (previous imports and code)

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons'; // For the YouTube icon

const Homebody = () => {
    return (
      <div className="mx-auto w-full relative">

        <DotNav />
        <div className="h-2/3 sm:h-80 md:h-[400px]">
          {/* UPDATED CAROUSEL PROPS HERE */}
          <Carousel autoPlay={true} interval={100000} infiniteLoop={true} showThumbs={false} showStatus={false} showIndicators={true}>
            {/* ... (First Carousel Item) ... */}
            <div>
              <div
                className="grid grid-cols-1 place-items-center md:grid-cols-2 m-0 p-0 bg-[rgb(253,248,242)] w-full px-8 border-2"
                style={{ gridTemplateRows: 'auto auto' }}
              >
                <div className="row-span-2">
                  <Suspense fallback={<Loading />}>
                    <StMichalCard />
                  </Suspense>
                </div>

                <div>
                  <Suspense fallback={<Loading />}>
                    <AnnouncementsCard />
                  </Suspense>
                </div>

                <div>
                  <Suspense fallback={<Loading />}>
                    <SupportCard />
                  </Suspense>
                </div>
              </div>
            </div>

            {/* ... (Second Carousel Item - QR Codes for Membership & Sunday School) ... */}
            <div className="w-full h-full bg-ethGray-100 p-8">
                <div className="flex flex-col sm:flex-row justify-around items-start gap-8 w-full h-full">
                    <div className="flex flex-col gap-4 items-center text-center">
                        <h1 className="text-2xl font-bold">Become a Church Member</h1>
                        <QRCodeCard value="https://docs.google.com/forms/d/e/1FAIpQLSdVlOcEkZVK9dOmoLSH5pNjjjYcgfewWNgqSSRabTAAeWzjyg/viewform?vc=0&c=0&w=1&flr=0&gxids=7628" text={''} size={300} />
                    </div>
                    <div className="flex flex-col gap-4 items-center text-center">
                        <h1 className="text-2xl font-bold">Join Sunday School</h1>
                        <QRCodeCard value="https://your-website.com" text={''} size={300} />
                    </div>
                </div>
            </div>

            {/* THIRD CAROUSEL ITEM (Live Broadcast Link with YouTube Branding + QR Code) */}
            <div className="bg-ethRed-500 flex flex-col sm:flex-row items-center justify-center p-8 gap-8">
              {/* Live Broadcast Link */}
              <a
                href="https://www.youtube.com/channel/UCwXktlT_OFkw_87oMUnTwhQ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
              >
                <img
                  decoding="async"
                  width="524"
                  height="316"
                  src="http://kidusmichaeldc.org/wp-content/uploads/2020/09/youtube_play.png"
                  alt="YouTube Live Stream"
                  className="wp-image-344 mb-2"
                  srcSet="https://kidusmichaeldc.org/wp-content/uploads/2020/09/youtube_play.png 524w, https://kidusmichaeldc.org/wp-content/uploads/2020/09/youtube_play-300x181.png 300w"
                  sizes="(max-width: 524px) 100vw, 524px"
                />
                {/* YouTube Icon */}
                <FontAwesomeIcon icon={faYoutube} className="text-red-600 text-4xl mb-2" /> {/* Red YouTube icon */}
                <span>Watch Our Live Service</span>
                <span className="text-base text-gray-600 mt-1">on YouTube</span> {/* Plain "on YouTube" text */}
              </a>

              {/* QR Code for Mobile Access */}
              <div className="bg-white flex flex-col sm:flex-column items-center justify-center p-8 gap-8">
    <h2 className="text-xl font-semibold text-gray-800">Access on Mobile</h2>
    <p className="text-sm text-gray-600 mb-2">Scan for direct link</p>
    <QRCodeCard
        value="https://www.youtube.com/@DebreMehretStMichael/streams" // IMPORTANT: Make sure this is your correct YouTube Live Stream URL
        text={''}
        size={200} // Increased size for better visibility
    />
</div>

            </div>
          </Carousel>
        </div>
        <div className="flex justify-center items-center gap-4 w-full h-20 bg-ethGray-200">

        </div>
      </div>
    );
}

export default Homebody;