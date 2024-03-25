import PrimaryButton from "./PrimaryButton";

const ContactMe = () => {
  return (
    <section className="py-96 bg-[#f5f5f5]">
      <div className="flex justify-center items-center h-full text-center">
        <div className="flex flex-wrap gap-6 items-center w-full justify-evenly max-w-5xl">
          <h3 className="text-[#0e1015] text-[15px] leading-[23px] md:text-[30px] md:leading-[33px] font-[400] ">
            Do you like this awesome theme?
          </h3>
          <PrimaryButton
            title={"contact me"}
            href="https://github.com/liebe-developing"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
