import React from 'react'
import Dextools from '../assets/images/svg/dextools_logo.svg'
import Xlogo from '../assets/images/svg/x_logo.svg'
import Telegram from '../assets/images/svg/telegram_symbol.svg'
const SocialLinks = () => {
 
    return (
        <section className=' bg_yellow '>
            <div className="container my_container SocialLinks_padding">
                   <div className="row justify-content-center">
                   <div className='col-12 col-md-6 col-xl-4 d-flex align-items-center justify-content-center' data-aos="zoom-in">
                        <a href='https://twitter.com/' target='_blank' className=" d-flex align-items-center text-decoration-none gap-3 gap-xl-4">
                            <img src={Xlogo} alt="Xlogo" />
                            <span className=' mb-0 font_size_4xl line_height_5xl text-white fw-semibold font_family_inter'>twitter</span>
                        </a>
                    </div>
                    <div className=' col-12 col-md-6 col-xl-4 mt-3 mt-md-0 d-flex align-items-center justify-content-center' data-aos="zoom-in">
                        <a href='https://telegram.org/' target='_blank' className=" d-flex align-items-center text-decoration-none gap-3 gap-xl-4">
                            <img src={Telegram} alt="Telegram" />
                            <span className=' mb-0 font_size_4xl line_height_5xl text-white fw-semibold font_family_inter'>Telegram</span>
                        </a>
                    </div>
                    <div className='col-12 col-md-6 col-xl-4 mt-3 mt-lg-0 d-flex align-items-center justify-content-center justify-content-xl-end' data-aos="zoom-in">
                        <a href='https://www.dextools.io/app/en/pairs' target='_blank' className=" d-flex align-items-center text-decoration-none gap-3 gap-xl-4">
                            <img src={Dextools} alt="Dextools" />
                            <span className=' mb-0 font_size_4xl line_height_5xl text-white fw-semibold font_family_inter'>DEXTOOLS</span>
                        </a>
                    </div>
                   </div>

            </div>
        </section>
    )
}

export default SocialLinks