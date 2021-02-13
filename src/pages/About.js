import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from '../img/img-2.jpg';

const About = () => {
  return (
    <>
      <Header />
      <Hero image={Image} title="Magic Forest" description="Visit this is a unique experience" />
    </>
  );
};

export default About;