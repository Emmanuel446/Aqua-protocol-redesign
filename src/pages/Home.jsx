import React from 'react';
import Hero from '../components/home/Hero';
import FourPillars from '../components/home/FourPillars';
import WhyAqua from '../components/home/WhyAqua';
import DeveloperCTA from '../components/home/DeveloperCTA';

const Home = () => {
  return (
    <div>
      <Hero />
      <FourPillars />
      <WhyAqua />
      <DeveloperCTA />
    </div>
  );
};

export default Home;