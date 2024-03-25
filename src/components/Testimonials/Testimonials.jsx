import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import TestimonialCard from "./TestimonialCard";

import "swiper/css";
import "swiper/css/navigation";

import { TestimonialData } from "../../constants";
import SwiperButton from "../SwiperButton";
const Testimonials = () => {
  return (
    <section className="md:max-h-[467px] w-full overflow-hidden py-96 bg-testimonials bg-cover bg-center bg-fixed">
      <div className="flex flex-col justify-center items-center h-full text-center">
        <div className="w-full px-6 md:max-w-4xl">
          <h3 className="mb-6 text-white text-[18px] leading-[23px] md:text-[30px] md:leading-[33px] font-[400] ">
            What Our Customers Say
          </h3>

          <Swiper
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            modules={[Navigation]}
            slidesPerView={1}
          >
            {TestimonialData?.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
            <SwiperButton />
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
