import React from 'react'
import Dextools from '../assets/images/svg/dextools_logo.svg'
import Xlogo from '../assets/images/svg/x_logo.svg'
import Telegram from '../assets/images/svg/telegram_symbol.svg'
import MenWithHat from '../assets/images/webp/MenWithHat.png'

const HeroSection = () => {
  return (
<section className=' bg-black min-vh-100 d-flex flex-column position-relative'>
  <div className=" position-absolute MenWithHat z-0">
    <img src={MenWithHat} alt="MenWithHat" className=' w-100 max_width_576' />
  </div>
    <div className=" container max_width_1140">
      <nav className=' nav_paddings d-flex align-items-center justify-content-between'>
     <div className="logo">
     <h3 className=' mb-0 font_family_inter font_weight_900 font_size_3xl line_height_4xl text-white'>Gxxx Gxxxxxx</h3>
     </div>
        <div className=" d-flex gap_47 align-items-center">
          <div className=" d-flex gap_21 align-items-center">
           <a href="https://www.dextools.io/app/en/pairs" target=' _blank'>
           <img src={Dextools} alt="dextools_logo" />
           </a>
           <a href="https://twitter.com/" target=' _blank'>
           <img src={Xlogo} alt="x_logo" />
           </a>
           <a href="https://telegram.org/" target=' _blank'>
           <img src={Telegram} alt="telegram_symbol" />
           </a>
          </div>
          <button className=' font_family_inter text-white font_size_xmd line_height_sm btn_2 bg-transparent fw-semibold'>Buy On Uniswap</button>
        </div>
      </nav>
    </div>
      <div className=" d-flex flex-grow-1 align-items-center justify-content-center z-1">
        <div className=" container max_width_1140 z-1">
        <h1 className=' mb-0 text-white font_size_7xl line_height_8xl font_family_inter font_weight_900'>G<span className='color_yellow'>G</span></h1>
          <p className=' mb-0 text-white font_size_md line_height_xmd max_width_538'>Join The <span className=' color_yellow'>Worldwide Blockchain</span> Protest Against Corrupt Government Bodies</p>
          <div className=" d-flex gap_20 hero_button_padding_top">
            <button className=' common_button bg_yellow text-black font_family_inter fw-semibold font_size_xmd line_height_sm'>Buy $GrayGensler</button>
            <button className=' btn_2 bg-transparent text-white font_family_inter'>How To Buy?</button>
          </div>      
        </div>
      </div>
</section>

  )
}

export default HeroSection