import SectionContainer from "./SectionContainer";
import seo from "../assets/seo.png";

const Seo = () => {
  return (
    <section className="max-w-[1170px] mx-auto py-[96px]">
      <div className="flex flex-col md:flex-row flex-wrap items-center gap-[100px]">
        <SectionContainer
          img={seo}
          title="SEO Friendly"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar luctus sem, eget porta orci. Maecenas molestie dui id diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae ligula et interdum. Maecenas faucibus mattis imperdiet. In rhoncus ac ligula id ultricies."
          btnTitle="read more"
        />
      </div>
    </section>
  );
};

export default Seo;
