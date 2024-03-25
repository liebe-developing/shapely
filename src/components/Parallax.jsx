import PrimaryButton from "./PrimaryButton";

const Parallax = ({ title, description, firstBtnTitle, secondBtnTitle }) => {
  return (
    <div className="flex flex-col justify-center items-center h-full text-center">
      <div className="max-w-5xl">
        <h2 className="mb-6 text-white text-[32px] leading-[40px] md:text-[60px] md:leading-[64px] font-[400] ">
          {title}
        </h2>
        <p className="mb-8 text-white font-normal text-[12px] md:text-[14px]">
          {description}
        </p>
        <div>
          <PrimaryButton title={firstBtnTitle} href="#" />
          {secondBtnTitle && (
            <a
              href={"#"}
              className="ml-2 leading-[24px] py-[18px] uppercase bg-transparent text-white border-2 border-[#fff] transition duration-[0.3s] ease-in font-[700] tracking-[1px] text-[12px] px-8 md:px-14 text-center hover:bg-white hover:text-[#222] hover:border-white"
            >
              {secondBtnTitle}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Parallax;
