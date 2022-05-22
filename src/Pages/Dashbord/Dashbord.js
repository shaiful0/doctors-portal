import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashbord = () => {
  return (
    <div class="drawer drawer-mobile">
  <input id="dashbord-sidebar" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content ">
    <h2 className='text-3xl text-secondary font-bold'>Welcome to your Dashboard</h2>
    <Outlet></Outlet> 
  </div> 
  <div class="drawer-side">
    <label for="dashbord-sidebar" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='/dashbord'>My Appoinments</Link></li>
      <li><Link to='/dashbord/review'>My Reviews</Link></li>
      <li><Link to='/dashbord/users'>All Users</Link></li>
    </ul>
  
  </div>
</div>
  );
};

export default Dashbord;