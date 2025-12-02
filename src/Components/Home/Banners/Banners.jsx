import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";

const Banners = () => {
  return (
    <div className="h-[600px] w-full my-10">
      <Carousel autoPlay={true} infiniteLoop={true}>
        {/* Slide 1 */}
        <div className="relative h-[600px]">
          <img src={bannerImg1} className="w-full h-full object-cover" />

          {/* CENTER BUTTONS */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4">
            <button className="px-6 py-3 bg-white/80 rounded font-semibold">
              Btn 1
            </button>
            <button className="px-6 py-3 bg-white/80 rounded font-semibold">
              Btn 2
            </button>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative h-[600px]">
          <img src={bannerImg2} className="w-full h-full object-cover" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4">
            <button className="px-6 py-3 bg-white/80 rounded font-semibold">
              Btn 1
            </button>
            <button className="px-6 py-3 bg-white/80 rounded font-semibold">
              Btn 2
            </button>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative h-[600px]">
          <img src={bannerImg3} className="w-full h-full object-cover" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4">
            <button className="px-6 py-3 bg-white/80 rounded font-semibold">
              Btn 1
            </button>
            <button className="px-6 py-3 bg-white/80 rounded font-semibold">
              Btn 2
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banners;
