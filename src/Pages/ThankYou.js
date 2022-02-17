import React, { useEffect } from 'react'
import Points from './../Assets/orig-roomba.png'
import { useHistory } from 'react-router'
import Next from '../Components/NextButton/Next'
import Logo from './../Assets/color-logo-white.png'
import Telescope from './../Assets/space-cake-telescope.png'

/**
* @author
* @function ThankYou
**/

const ThankYou = (props) => {
    const history = useHistory()
    const points = localStorage.getItem('points')
    return (
      <div className='thanks_container'>
        <img className="colorLogo" src={Logo} alt="Color Cannabis Logo" />
        <div className='messaging_for_points'>
          <h2 className='msg_text'>
            Thank you for taking our Space Cake Quiz!
          </h2>
          <p>We will be reaching out to the winner of the Space Cake Telescope directly by email to collect delivery and contact details.</p>
        </div>
        <img src={Telescope} className="prize-graphic" alt="Color Cannabis Telescope" />
        <div id='next_btn_thanks'>
          <Next text='Play Again' link='/quiz' color='#E25640' />
        </div>
        <p className="legal_copy">
          All product images and labels provided for information and illustrative purposes
          only, and do not represent the actual cannabis product, product label or it’s appearance.
        </p>
      </div>
    )

}

export default ThankYou