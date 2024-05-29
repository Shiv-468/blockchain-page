import React, { useCallback, useRef, useState } from 'react'
import Dextools from '../assets/images/svg/dextools_logo.svg'
import Xlogo from '../assets/images/svg/x_logo.svg'
import Telegram from '../assets/images/svg/telegram_symbol.svg'
import MenWithHat from '../assets/images/webp/MenWithHat.webp'
import BxFile from '../assets/images/svg/BxFile.svg'
const HeroSection = () => {
  const textCopy = useRef(null)
  const [data, setdata] = useState(false);
  const [text, settext] = useState('');
  console.log(text)
  function view() {
    setdata(!data)
    if (data === false) {
      document.body.classList.add("overflow_hidden");
    }
    else {
      document.body.classList.remove("overflow_hidden");
    }
  };
  const copytoclipboard = useCallback(() => {
    textCopy.current?.select();
    window.navigator.clipboard.writeText(textCopy.current?.value);
  }
    , [text])
  return (
    <section className=' bg-black min_vh_90 d-flex flex-column position-relative'>
      <div className=" position-absolute MenWithHat z-0">
        <img src={MenWithHat} alt="MenWithHat" className=' w-100 max_width_576 max_width_490 z_index' />
      </div>
      <div className=" container my_container w-100">
        <nav className=' nav_paddings d-flex align-items-center justify-content-between'>
          <div className="logo">
            <h3 className=' mb-0 font_family_inter font_weight_900 font_size_3xl line_height_4xl text-white'>Gxxx Gxxxxxx</h3>
          </div>
          <div className={`${data ? "navShow" : "navhide"} d-flex gap_47 align-items-center mobile_view`} >
            <ul className="gap_21 d-flex flex-column flex-lg-row align-items-center ps-0 mb-0" >
              <li>
                <a href="https://www.dextools.io/app/en/pairs" target=' _blank'>
                  <img src={Dextools} alt="dextools_logo" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" target=' _blank'>
                  <img src={Xlogo} alt="x_logo" />
                </a>
              </li>
              <li>
                <a href="https://telegram.org/" target=' _blank'>
                  <img src={Telegram} alt="telegram_symbol" />
                </a>
              </li>
            </ul>
            <button className=' font_family_inter text-white font_size_xmd line_height_sm btn_2 bg-transparent fw-semibold'>Buy On Uniswap</button>
          </div>
          <div onClick={view} className={`${data ? "cross" : "menu"}  d-flex flex-column gap-2 d-lg-none`}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </div>
      <div className=" d-flex flex-grow-1 align-items-center justify-content-center">
        <div className=" container my_container w-100 z_index_1" data-aos="fade-down-right">
          <h1 className=' mb-0 text-white font_size_7xl line_height_8xl font_family_inter font_weight_900'>G<span className='color_yellow'>G</span></h1>
          <p className=' mb-0 text-white fw-semibold font_size_md line_height_xmd max_width_538'>Join The <span className=' color_yellow'>Worldwide Blockchain</span> Protest Against Corrupt Government Bodies</p>
          <div className=" d-flex gap_20 hero_button_padding_top">
            <button className=' common_button btn_1 bg_yellow text-black font_family_inter fw-semibold font_size_xmd line_height_sm'>Buy $GrayGensler</button>
            <button className=' btn_2 bg-transparent text-white font_family_inter fw-semibold font_size_xmd line_height_sm'>How To Buy?</button>
          </div>
          <div className="copytext_div d-flex margin_top_36">
            <input value='dwqjddj324dnewdne3dewrrets' className=' bg-transparent fw-normal font_size_md line_height_xl font_family_inter w-100 text-white copy_text_input' ref={textCopy} />
            <button onClick={copytoclipboard} className=' border-0 bg-transparent'><img src={BxFile} alt="BxFile" /></button>
          </div>
        </div>
      </div>
    </section>

  )
}

export default HeroSection