import {
  Clients,
  ContactMe,
  Footer,
  Header,
  LimitlessOption,
  Parallax,
  Portfolio,
  Projects,
  Seo,
  Testimonials,
} from "./components";

function App() {
  return (
    <div>
      <Header />
      <section className="h-screen w-full bg-parallax1 bg-cover bg-center bg-fixed">
        <Parallax
          title="We Change Everything WordPress"
          description="This is the only WordPress theme you will ever want to use."
          firstBtnTitle="read more"
          secondBtnTitle="download now"
        />
      </section>
      <Seo />
      <Portfolio />
      <section className="max-h-[437px] w-full overflow-hidden py-96 bg-parallax2 bg-cover bg-center bg-fixed">
        <Parallax
          title="Small Parallax Section"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet rhoncus porta. Ut quis sem quis purus lobortis dictum. Aliquam nec dignissim nisl. Vivamus cursus feugiat sapien, eget tincidunt leo ornare quis."
          firstBtnTitle="more info"
        />
      </section>
      <LimitlessOption />
      <Projects />
      <Testimonials />
      <Clients />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
