import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dextools from '../assets/images/svg/dextools_logo.svg'
import Xlogo from '../assets/images/svg/x_logo.svg'
import Telegram from '../assets/images/svg/telegram_symbol.svg'
const SocialLinks = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 7000,
        pauseOnHover: true,
        cssEase: 'linear'
    };
    return (
        <section className=' bg_yellow '>
            <div className="container max_width_1140 SocialLinks_padding">
                <Slider {...settings}>
                    <div className=' marginX_72' data-aos="zoom-in">
                        <a href='https://twitter.com/' target='_blank' className=" d-flex align-items-center text-decoration-none gap-4">
                            <img src={Xlogo} alt="Xlogo" />
                            <span className=' mb-0 font_size_4xl line_height_5xl text-white fw-semibold font_family_inter'>twitter</span>
                        </a>
                    </div>
                    <div className=' marginX_72' data-aos="zoom-in">
                        <a href='https://telegram.org/' target='_blank' className=" d-flex align-items-center text-decoration-none gap-4">
                            <img src={Telegram} alt="Telegram" />
                            <span className=' mb-0 font_size_4xl line_height_5xl text-white fw-semibold font_family_inter'>Telegram</span>
                        </a>
                    </div>
                    <div className=' marginX_72' data-aos="zoom-in">
                        <a href='https://www.dextools.io/app/en/pairs' target='_blank' className=" d-flex align-items-center text-decoration-none gap-4">
                            <img src={Dextools} alt="Dextools" />
                            <span className=' mb-0 font_size_4xl line_height_5xl text-white fw-semibold font_family_inter'>DEXTOOLS</span>
                        </a>
                    </div>

                </Slider>
            </div>
        </section>
    )
}

export default SocialLinks