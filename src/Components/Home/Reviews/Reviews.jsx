import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";

const Reviews = ({ reviewPromise }) => {
  const reviewData = use(reviewPromise);

  return (
    <div>
      <div className="my-24 text-center">
        <h1 className="text-3xl font-bold">Review</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          sequi sint odit voluptas exercitationem ea modi fugit architecto saepe
          facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          magni earum assumenda porro optio provident voluptate, maxime cum
          sapiente quaerat!
        </p>
      </div>

      <div>
        <Swiper
          loop={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 30,
            stretch: "10%",
            depth: 200,
            scale: 1,
            modifier: 0,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {reviewData.map((review, index) => (
            <SwiperSlide key={index}>
              <ReviewCard review={review}></ReviewCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
