import React from 'react'
import Next from '../Components/NextButton/Next'
import SpaceCakePackage from '../Assets/space-cake-package.png'
import './Pages.scss'

/**
* @author
* @function SweetSour
**/

const SweetSour = (props) => {
  return(
    <div className='strain-info-container'>

      <div className='info_container'>
        <h1>Space Cake</h1>
        <h2>3.5g FLOWER</h2>
      </div>

      <div className='columns_holder'>

        <div className='shared_width'>

          <div className='info_container'>
            <p className='margin_zero'>
              Color Space Cake is an out of this world indica-dominant hybrid strain,
              a rare cross between legendary cultivars GSC and Snow Lotus. Its buds
              have dark purple hues, and blazing orange pistils caked with trichomes.
              Expect a 20 – 26% THC with notes of musk and creamy diesel cues.
            </p>
          </div>

          <div className='info_container'>
            <p className='label'>INDICA</p>
            <p className='margin_zero thin'>THC 20-26% mg/g</p>
            <p className='margin_zero thin'>CBD 0-2% mg/g</p>
          </div>
          <div className='info_container'>
            <p className='label'>AROMA & FLAVOURS</p>
            <p className='margin_zero thin'>Gas, Musk, Garlic</p>
          </div>

          <div className='info_container'>
            <p className='label'>LICENSED PRODUCER</p>
            <p className='margin_zero thin'>WeedMD Rx Inc.</p>
          </div>

          <img id='space-cake-package' src={SpaceCakePackage} alt='' />

        </div>

        <div className="shared_width">
          <div id='next_btn'>
            <Next text="Let's Start." link='/quiz' color='#6045B9'/>
          </div>
        </div>



      </div>
      <p className="legal_copy">
        All product images and labels provided for information and illustrative purposes
        only, and do not represent the actual cannabis product, product label or it’s appearance.
      </p>
    </div>
   )

 }

export default SweetSour