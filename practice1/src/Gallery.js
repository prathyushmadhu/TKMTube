// import React from 'react';
// import './Gallery.css';
// import Navbar from './Navbar';


// const GalleryPage = () => {
//   return (
//     <>
//     <Navbar />
//     <div className="gallery-container">
//       <div className="responsive-container-block bigContainer">
//         <div className="responsive-container-block headerContainer">
//           <div className="row1">
//             <p className="text-blk heading">Gallery</p>
//           </div>
//           <p className="text-blk subHeading">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum pulvinar ullamcorper suspendisse ac eget. Pellentesque tempus leo in ullamcorper quis vestibulum ligula elementum ut. Congue in dignissim tincidunt ut dolor eu. Mi, eget posuere vitae sed purus nisl lorem.
//           </p>
//         </div>
//         <div className="responsive-container-block Container">
//           {/* Gallery items go here */}
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default GalleryPage;

import React from 'react';
import './Gallery.css';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './Footer';
// import { Link } from 'react-router-dom';
// import { detectOverflow } from '@popperjs/core';
import {
  // MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    
    <MDBRow>
      <Navbar />
      {/* <>
      
    <Link to="/sgal">
      <button>Slide</button>
    </Link>
      </> */}
      <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Boat on Calm Water'
        />

        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Wintry Mountain Landscape'
        />
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Mountains in the Clouds'
        />

        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Boat on Calm Water'
        />
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Waves at Sea'
        />

        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Yosemite National Park'
        />
      </MDBCol>
      <Footer />
    </MDBRow>
  );
}
