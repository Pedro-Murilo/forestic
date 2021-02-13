import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from '../img/img-1.jpg';

const Home = () => {
  return (
    <>
      <Header />
      <Hero image={Image} title="Magic Forest" description="Visit this is a unique experience" />
    </>
  );
};

export default Home;
