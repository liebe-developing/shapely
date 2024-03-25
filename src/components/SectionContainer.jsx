import PrimaryButton from "./PrimaryButton";

const SectionContainer = ({ img, title, description, btnTitle }) => {
  return (
    <>
      <div className="flex-[1.5]">
        <img
          src={img}
          className="w-full h-full object-cover"
          alt="Seo mackbook preview"
        />
      </div>
      <div className="flex flex-col flex-1 gap-8 items-start px-[15px]">
        <h3 className="text-[30px] leading-[33px] text-[#0e1015]">{title}</h3>
        <p className="text-[14px] leading-[24px] text-[#8c979e]">
          {description}
        </p>
        <PrimaryButton title={btnTitle} href="#" />
      </div>
    </>
  );
};

export default SectionContainer;
