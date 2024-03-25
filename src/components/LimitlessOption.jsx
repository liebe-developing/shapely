import PrimaryButton from "./PrimaryButton";
import limitOption from "../assets/limit-options.jpg";

const LimitlessOption = () => {
  return (
    <section className="w-full bg-[#f5f5f5] pt-[96px] overflow-hidden">
      <div className="flex flex-col justify-center items-center h-full text-center">
        <div className="max-w-4xl">
          <h3 className="text-[#0e1015] mb-6 text-[15px] leading-[33px] md:text-[30px] md:leading-[64px] font-[400] ">
            Limitless Options
          </h3>
          <p className="text-[#8c979e] mb-10 font-normal text-[12px] md:text-[14px]">
            Phasellus sed nisi ac dui interdum semper. Etiam consequat fermentum
            sollicitudin. Fusce vulputate porta faucibus. Vivamus nulla tellus,
            accumsan non efficitur id, pretium quis ante
          </p>
          <PrimaryButton title="download now" href="#" />
        </div>
        <div className="mt-10">
          <img src={limitOption} alt="" />
        </div>
      </div>
    </section>
  );
};

export default LimitlessOption;
