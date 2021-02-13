import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from '../img/img-3.jpg';
import { motion } from 'framer-motion';
import { animationThree } from '../animations';

const Wallpaper = () => {
  return (
    <motion.div
      initial="out" 
      animate="end"
      exit="out"
      variants={animationThree}
    >
      <Header />
      <Hero image={Image} title="Like a dream" description="Let's take a tour in this?" />
    </motion.div>
  );
};

export default Wallpaper;