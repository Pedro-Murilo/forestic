import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from '../img/img-2.jpg';
import { motion } from 'framer-motion';
import { animationTwo } from '../animations';

const About = () => {
  return (
    <motion.div
      initial="out" 
      animate="in"
      exit="out"
      variants={animationTwo}
    >
      <Header />
      <Hero image={Image} title="Beautiful and Unique" description="Never seen before" />
    </motion.div>
  );
};

export default About;