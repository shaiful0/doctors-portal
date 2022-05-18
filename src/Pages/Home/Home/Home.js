import React from 'react';
import Banner from './Banner';
import Info from './Info';
import MakeApoinment from './MakeApoinment';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
  return (
    <div className='px-12'>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <MakeApoinment></MakeApoinment>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;