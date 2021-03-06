import React from 'react';
import Banner from './Banner';
import Contact from './Contacts';
import Footer from '../Shared/Footer';
import Info from './Info';
import MakeApoinment from './MakeApoinment';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <MakeApoinment></MakeApoinment>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;