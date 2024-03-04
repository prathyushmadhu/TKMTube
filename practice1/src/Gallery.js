import React from 'react';
import './Gallery.css';
import Navbar from './Navbar';


const GalleryPage = () => {
  return (
    <>
    <Navbar />
    <div className="gallery-container">
      <div className="responsive-container-block bigContainer">
        <div className="responsive-container-block headerContainer">
          <div className="row1">
            <p className="text-blk heading">Gallery</p>
          </div>
          <p className="text-blk subHeading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum pulvinar ullamcorper suspendisse ac eget. Pellentesque tempus leo in ullamcorper quis vestibulum ligula elementum ut. Congue in dignissim tincidunt ut dolor eu. Mi, eget posuere vitae sed purus nisl lorem.
          </p>
        </div>
        <div className="responsive-container-block Container">
          {/* Gallery items go here */}
        </div>
      </div>
    </div>
    </>
  );
};

export default GalleryPage;
