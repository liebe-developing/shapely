import SectionContainer from "./SectionContainer";
import seo from "../assets/seo.png";

const Portfolio = () => {
  return (
    <section className="py-[96px] bg-[#f5f5f5]">
      <div className="max-w-[1170px] mx-auto flex flex-col md:flex-row-reverse flex-wrap items-center gap-[100px]">
        <SectionContainer
          img={seo}
          title="Portfolio Section"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar luctus sem, eget porta orci. Maecenas molestie dui id diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae ligula et interdum."
          btnTitle="set it in action"
        />
      </div>
    </section>
  );
};

export default Portfolio;
