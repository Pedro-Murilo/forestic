import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from '../img/img-2.jpg';

const About = () => {
  return (
    <>
      <Header />
      <Hero image={Image} title="Beautiful and Unique" description="Never seen before" />
    </>
  );
};

export default About;