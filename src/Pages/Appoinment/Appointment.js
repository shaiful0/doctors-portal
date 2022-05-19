import React, { useState } from 'react';
import Footer from '../Home/Shared/Footer';
import AppoinmentBanner from './AppoinmentBanner';
import AvailableAppoinments from './AvailableAppoinments';

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
      <AvailableAppoinments date={date}></AvailableAppoinments>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;