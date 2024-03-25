/* eslint-disable react/prop-types */
const PrimaryButton = ({ href, title }) => {
  return (
    <a
      target="_blank"
      href={href}
      className="leading-[24px] min-w-[200px] w-[200px] py-[18px] uppercase bg-[#745cf9] text-white border-2 border-[#745cf9] transition duration-[0.3s] ease-in font-[700] tracking-[1px] text-[12px] px-14 text-center hover:bg-[#5d47d7] hover:text-[#fff] hover:border-[#5d47d7] text-nowrap"
    >
      {title}
    </a>
  );
};

export default PrimaryButton;
