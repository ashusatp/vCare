import React from 'react'
import './Gallery.css'
// import images from '../../assets/LabImg'
const Gallery = ({images}) => {
    return (
        <div className="image-gallery">
          {images.map((image, index) => (
            <div className="image-container" key={index}>
              <img src={image} alt={image.alt} />
            </div>
          ))}
        </div>
      );
}

export default Gallery
