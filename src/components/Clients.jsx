import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { ClientsData } from "../constants";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Clients = () => {
  return (
    <section className="py-96 w-full">
      <div className="flex flex-col justify-center items-center h-full text-center">
        <div className="md:max-w-6xl">
          <h3 className="mb-[64px] text-[#0e1015] text-[15px] leading-[23px] md:text-[30px] md:leading-[33px] font-[400] ">
            Our Main Clients
          </h3>

          <Swiper
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              358: {
                slidesPerView: 2,
                spaceBetween: 1,
              },
              375: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 0,
              },
            }}
            className="max-sm:max-w-[360px] mr-8 md:mr-0"
          >
            {ClientsData?.map((client, index) => (
              <SwiperSlide key={index}>
                <img
                  className="md:w-auto max-h-[60px] md:opacity-50 md:hover:opacity-100 transition duration-300 ease-in-out"
                  src={client.img}
                  alt={client.name}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Clients;
