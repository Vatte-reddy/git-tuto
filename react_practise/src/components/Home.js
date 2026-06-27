import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

  return (
    <div className="h-screen relative overflow-hidden">
      
      <div className=" h-20 header relative bg-black/70 text-white flex justify-end py-2">
          <Link to="/about" className="p-4 hover:bg-blue-700 "> About
         </Link>
         
         <Link to="/reservation" className="p-4 hover:bg-blue-700 "> ReservationForm
         </Link>


          <Link to="/service" className="p-4 hover:bg-blue-700 "> Service
         </Link>

          <Link to="/gallery" className="p-4 hover:bg-blue-700 "> Gallery
         </Link>

          <Link to="/reviews" className="p-4 hover:bg-blue-700 "> CustomerReviews</Link>




      </div>
       
     <div >    
     
        <img className='w-full h-100% object-cover opacity-80 ' src='https://i.pinimg.com/originals/5a/11/91/5a119160a5d6b7dd9decf4bfecccddc3.jpg' alt='Hero Image' />
         
     </div>  
    <div className="absolute top-10 left-10">
  <img
    src="https://s.yimg.com/fz/api/res/1.2/TeYZw9H2RRyNhRTx3WlJMQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD00MTI7cHhvZmY9NTA7cHlvZmY9MTAwO3E9ODA7c3M9MTt3PTM4OA--/https://i.pinimg.com/736x/5a/f0/2f/5af02f060a3d4a1f6723cd597919d591.jpg"
    alt="Logo"
    className="w-24 h-24 rounded-full object-cover shadow-lg"
  />

     <div className="text-white w-80 pt-{32%} absolute py-24 bg-gradient-to-r from-black via-black/50 to-transparent">
     
        <h1 className="text-3xl font-bold">
            Celebrate Every Special Moment With Us
        </h1>
        <p>
            Welcome to Royal Celestia Function Hall, where unforgettable celebrations come to life.
        </p>

        <button className="btn bg-yellow-600 p-3 text-white rounded-lg mt-4 hover:bg-yellow-700" onClick={()=>navigate('/reservation')}>
           🤘🏼 Book Now    
        </button>

        <Link
  to="/about"
  className="bg-violet-600 p-3 text-white rounded-lg mt-4 hover:bg-violet-700 ml-4 inline-block"
>
  ▶️ View More
</Link>
     </div>
</div>
       
    </div>
  )
}

export default Home
