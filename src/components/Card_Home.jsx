import React from 'react';
import { Link } from 'react-router-dom'
import Proptypes from 'prop-types'

const Card_Home = ({image, description, link}) => {
  return (
    <React.Fragment>
      <section>
        
          <div data-aos="fade-up" data-aos-duration="375" data-aos-easing="ease-in-out" className="max-w-sm bg-white border border-gray-200 rounded-lg shadow m-4 pb-5">
              <img className="rounded-t-lg aspect-[3/2] object-contain" src={image} alt="" />
            <div className="pl-5 pr-5 mt-[-1rem] flex flex-col items-center text-center">
              <p className="mb-3 font-normal text-gray-700">{description}</p>
              <Link to={link} className="self-center px-6 py-4 text-xl  text-center text-white bg-[#FCC201] rounded-lg mt-2 hover:bg-[#c9c043] transition-all ease-in-out duration-300">
                SEE MORE
              </Link>
            </div>
          </div>
      </section>
    </React.Fragment>
  )
}

export default Card_Home

// Card_Home.propTypes = {
//   image: Proptypes.string,
//   description: Proptypes.string,
//   link : Proptypes.string,
// }