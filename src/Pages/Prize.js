import React from 'react'
import Telescope from './../Assets/space-cake-telescope.png'
import Packaging from './../Assets/space-cake-package.png'
import Logo from './../Assets/color-logo-white.png'
import Next from '../Components/NextButton/Next'


const Prize = (props) => {
  return(
    <div className='prize_page'>
        <img className="colorLogo" src={Logo} alt="Color Cannabis Logo" />
        <h2>Complete this quick quiz for a chance to win a Color Space Cake Custom Telescope.</h2>

        <div className="prize-container">
          <img src={Telescope} className="prize-graphic" alt="Color Cannabis Telescope" />
          <img src={Packaging} className="packaging" alt="Color Cannabis Space Cake Packaging" />
        </div>
        {/* </div> */}
        <div id='next_btn_prize'>
          <Next text="Let's Go!" link='/educational-video' color='#6045B9'/>
        </div>

        <p className="legal_copy">
          All product images and labels provided for information and illustrative purposes
          only, and do not represent the actual cannabis product, product label or it’s appearance.
        </p>
    </div>
   )

 }

export default Prize