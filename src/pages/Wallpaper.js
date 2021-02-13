import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from '../img/img-3.jpg';

const Wallpaper = () => {
  return (
    <>
      <Header />
      <Hero image={Image} title="Like a dream" description="Let's take a tour in this?" />
      Wallpaper
    </>
  );
};

export default Wallpaper;