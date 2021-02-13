import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from '../img/img-3.jpg';

const Wallpaper = () => {
  return (
    <>
      <Header />
      <Hero image={Image} title="Magic Forest" description="Visit this is a unique experience" />
      Wallpaper
    </>
  );
};

export default Wallpaper;