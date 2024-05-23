import React from 'react'
import Dextools from '../assets/images/svg/dextools_logo.svg'
import Xlogo from '../assets/images/svg/x_logo.svg'
import Telegram from '../assets/images/svg/telegram_symbol.svg'
const Footer = () => {
  return (
 <footer className=' bg-black'>
    <div className=" container max_width_1140 footer_padding_top footer_padding_bottom">
        <div className=" row justify-content-between">
            <div className=" col-5 d-flex justify-content-between">
         <div className=" d-flex flex-column">
         <h2 className=' mb-0 font_size_6xl line_height_7xl text-white font_family_inter font_weight_900 mb-4'>G<span className=' color_yellow'>G</span></h2>
                <p className=' mb-0 text-white fw-normal font_size_xmd line_height_xlg'>@copyright2024</p>
         </div>
                <div className=" d-flex gap_67">
                    <div className="verticle_line h-100 "></div>
                    <div className=" d-flex flex-column">
                        <h4 className=' margin_bottom_30 text-white font_size_xmd line_height_xlg font_family_inter fw-bold'>QUICK LINKS</h4>
                        <ul className=' ps-0 mb-0 d-flex flex-column gap-3'>
                            <li><a href="#" className=' text-white font_size_xmd line_height_xlg font_family_inter fw-normal'>Twitter</a></li>
                            <li><a href="#" className=' text-white font_size_xmd line_height_xlg font_family_inter fw-normal'>Telegram</a></li>
                            <li><a href="#" className=' text-white font_size_xmd line_height_xlg font_family_inter fw-normal'>DexTools</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className=" col-4 d-flex justify-content-end align-items-start">
            <div className=" d-flex gap_21 align-items-center">
           <a href="https://www.dextools.io/app/en/pairs" target=' _blank'>
           <img src={Dextools} alt="dextools_logo" className=' w-100' />
           </a>
           <a href="https://twitter.com/" target=' _blank'>
           <img src={Xlogo} alt="x_logo" className=' w-100' />
           </a>
           <a href="https://telegram.org/" target=' _blank'>
           <img src={Telegram} alt="telegram_symbol" className=' w-100' />
           </a>
          </div>
            </div>
        </div>
    </div>
 </footer>
  )
}

export default Footer