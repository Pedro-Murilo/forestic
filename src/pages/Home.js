import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from '../img/img-1.jpg';
import { motion } from 'framer-motion';
import { animationOne, transition } from "../animations";

const Home = () => {
  return (
    <motion.div
      initial="out" 
      animate="in" 
      exit="out" 
      variants={animationOne} 
      transition={transition}
    >
      <Header />
      <Hero image={Image} title="Magic Forest" description="Visit this is a unique experience" />
    </motion.div>
  );
};

export default Home;
