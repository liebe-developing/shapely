import { useSwiper } from "swiper/react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const SwiperButton = () => {
  const swiper = useSwiper();
  return (
    <div
      className="top-[50%] mt-[-15px] w-full z-20 max-sm:px-2 absolute md:none"
      // display={{ base: "absolute", md: "none" }}
    >
      <button
        onClick={() => swiper.slidePrev()}
        className="float-left p-2 cursor-pointer text-white rounded-full"
      >
        <MdArrowBackIosNew />
      </button>
      <button
        className="float-right p-2 cursor-pointer text-white rounded-full"
        onClick={() => swiper.slideNext()}
      >
        <MdArrowForwardIos />
      </button>
    </div>
  );
};

export default SwiperButton;
