import React from 'react'
import Proptypes from 'prop-types'
import '../pages/css/gallary.css'

const Gallary = ({images}) => {
  return (
    <React.Fragment>
      <section className="ag-photo-gallery-block mt-10">
        <div className="ag-format-container">
          <div className="ag-photo-gallery_list-hu">

            {images.length > 8 ? (
          <>
            <div data-aos="zoom-in" data-aos-duration="375" data-aos-easing="ease-in-out" className="ag-photo-gallery_item ag-photo-gallery_item__wide">
              <figure  className="ag-photo-gallery_figure">
                <a href={images[8]} data-fancybox="gallery">
                  <img src={images[8]} className="ag-photo-gallery_img" alt="" />
                </a>
              </figure>
            </div>
      
            <div data-aos="zoom-in" data-aos-duration="375" data-aos-easing="ease-in-out" className="ag-photo-gallery_item">
              <figure className="ag-photo-gallery_figure">
                <a href={images[9]} data-fancybox="gallery">
                  <img src={images[9]} className="ag-photo-gallery_img" alt="" />
                </a>
              </figure>
            </div>
          </>
              ) : null
            }
            <div data-aos="zoom-in" data-aos-duration="375" data-aos-easing="ease-in-out" className="ag-photo-gallery_item ag-photo-gallery_item__narrow">
              <figure className="ag-photo-gallery_figure">
                <a href={images[0]} data-fancybox="gallery">
                  <img src={images[0]} className="ag-photo-gallery_img" alt="" />
                </a>
              </figure>
            </div>

            <div data-aos="zoom-in" data-aos-duration="375" data-aos-easing="ease-in-out" className="ag-photo-gallery_item ag-photo-gallery_item__middle">
              <figure className="ag-photo-gallery_figure">
                <a href={images[1]} data-fancybox="gallery">
                  <img src={images[1]} className="ag-photo-gallery_img" alt="" />
                </a>
              </figure>
            </div>

            <div data-aos="zoom-in" data-aos-duration="375" data-aos-easing="ease-in-out" className="ag-photo-gallery_item ag-photo-gallery_item__narrow">
              <figure className="ag-photo-gallery_figure">
                <a href={images[2]} data-fancybox="gallery">
                  <img src={images[2]} className="ag-photo-gallery_img" alt="" />
                </a>
              </figure>
            </div>

            <div data-aos="zoom-in" data-aos-duration="375" data-aos-easing="ease-in-out" className="ag-photo-gallery_item ag-photo-gallery_item__wide">
              <figure className="ag-photo-gallery_figure">
                <a href={images[3]} data-fancybox="gallery">
                  <img src={images[3]} className="ag-photo-gallery_img" alt="" />
                </a>
              </figure>
            </div>

            <div data-aos="zoom-in" data-aos-duration="375" data-aos-easing="ease-in-out" className="ag-photo-gallery_item">
              <figure className="ag-photo-gallery_figure">
                <a href={images[4]} data-fancybox="gallery">
                  <img src={images[4]} className="ag-photo-gallery_img" alt="" />
                </a>
              </figure>
            </div>

            <div data-aos="zoom-in" data-aos-duration="375" data-aos-easing="ease-in-out" className="ag-photo-gallery_item ag-photo-gallery_item__narrow">
              <figure className="ag-photo-gallery_figure">
                <a href={images[5]} data-fancybox="gallery">
                  <img src={images[5]} className="ag-photo-gallery_img" alt="" />
                </a>
              </figure>
            </div>

            <div data-aos="zoom-in" data-aos-duration="375" data-aos-easing="ease-in-out" className="ag-photo-gallery_item ag-photo-gallery_item__middle">
              <figure className="ag-photo-gallery_figure">
                <a href={images[6]} data-fancybox="gallery">
                  <img src={images[6]} className="ag-photo-gallery_img" alt="" />
                </a>
              </figure>
            </div>

            <div data-aos="zoom-in" data-aos-duration="375" data-aos-easing="ease-in-out" className="ag-photo-gallery_item ag-photo-gallery_item__narrow">
              <figure className="ag-photo-gallery_figure">
                <a href={images[7]} data-fancybox="gallery">
                  <img src={images[7]} className="ag-photo-gallery_img" alt="" />
                </a>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Gallary

// Gallary.propTypes = {
//   images: Proptypes.arrayOf(Proptypes.string),
// }