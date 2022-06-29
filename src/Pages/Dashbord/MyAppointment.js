import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointment = () => {


  const [appoinments, setAppoinments] = useState([]);
  console.log(appoinments);
  const [user] = useAuthState(auth)
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`https://damp-brook-54993.herokuapp.com/booking?patient=${user.email}`, {
        method: "GET",
        headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
        .then(res => {
          // console.log('res', res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken')
            navigate('/')
          }
          return res.json()
        })
        .then(data => {
          // console.log(data);
          setAppoinments(data)
        });
    }
  }, [user])


  return (
    <div>
      <h2>My Appointment:{appoinments.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {
              appoinments.map((a, index) => <tr key={a._id}>
                <td>{index + 1}</td>
                <td>{a.patientName}</td>
                <td>{a.date}</td>
                <td>{a.slot}</td>
                <td>{a.treatment}</td>
                <td>
                  {(a.price && !a.paid) && <Link to={`/dashbord/payment/${a._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                  {(a.price && a.paid) && <div>
                    <p><span className='text-success'>paid</span></p>
                    {/* <p>Transaction id: <span className='text-success'>{a.transationId}</span></p> */}
                  </div>}
                </td>
              </tr>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;