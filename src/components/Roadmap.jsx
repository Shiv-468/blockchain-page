import React from 'react'
import TokennomicsTopBubbles from '../assets/images/webp/TokennomicsTopBubbles.png'
import TokennomicsBottomBubbles from '../assets/images/webp/TokennomicsBottomBubbles.png'
import Img1 from '../assets/images/webp/img1.png'
import Img2 from '../assets/images/webp/img2.png'
import Img3 from '../assets/images/webp/img3.png'
import Img4 from '../assets/images/webp/img4.png'
import Img5 from '../assets/images/webp/img5.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Roadmap = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <section className=' bg-black position-relative roadmap_padding_bottom'>
            <div className=" position-absolute TokennomicsTopBubbles">
                <img src={TokennomicsTopBubbles} alt="TokennomicsTopBubbles" className=' w-100' />
            </div>
            <div className=" position-absolute TokennomicsBottomBubbles">
                <img src={TokennomicsBottomBubbles} alt="TokennomicsBottomBubbles" className=' w-100' />
            </div>
            <div className=" container roadmap_padding_top ">
                <div className=" d-flex flex-column align-items-center justify-content-center">
                    <h2 className=' margin_bottom_20 text-white font_weight_900 font_family_inter font_size_5xl line_height_6xl'>ROADMAP</h2>
                    <p className=' mb-0 roadmap_para_width opacity_70 text-white fw-normal font_size_xmd line_height_xl font_family_inter text-center'>Our roadmap isn't just a journey; it's a comedic adventure  through the cryptoverse, filled with twists, turns, and plenty of  laughs along the way. Here's a glimpse into what the future holds  for Let's Hug GG ($LHGG)</p>
                </div>
            </div>
            <Slider {...settings} className=' d-flex justify-content-center slider_padding_top slider_padding_bottom'>
                <div className="roadmap_first_box">
                    <div className=" d-flex align-items-end gap_18">
                        <img src={Img1} alt="Img1" />
                        <div className=" d-flex flex-column pb-4 ">
                            <h4 className=' mb-2 text-white max_width_185 font_weight_900 font_family_inter font_size_xlg line_height_lg'>Token Launch <span>&#40;</span>Q1 2024<span>&#41;</span></h4>
                            <p className='max_width_185 mb-0 text-white fw-normal font_size_xmd line_height_xl font_family_inter opacity_70'>Launch $LHGG token, establish initial  liquidity.</p>
                        </div>
                    </div>
                </div>
                <div className="roadmap_second_box">
                    <div className="d-flex align-items-center gap_18">
                        <img src={Img2} alt="Img2" />
                        <div className=" d-flex flex-column pb-4 ">
                            <h4 className=' mb-2 text-white max_width_237 font_weight_900 font_family_inter font_size_xlg line_height_lg'>Community Building <span>&#40;</span>Q2 2024<span>&#41;</span></h4>
                            <p className='max_width_237 mb-0 text-white fw-normal font_size_xmd line_height_xl font_family_inter opacity_70'>Grow vibrant community  through humor and engagement.</p>
                        </div>
                    </div>
                </div>
                <div className="roadmap_third_box">
                    <div className=" d-flex  gap_18">
                        <img src={Img3} alt="Img3" />
                        <div className=" d-flex flex-column pb-4 pt_14">
                            <h4 className=' mb-2 text-white max_width_237 font_weight_900 font_family_inter font_size_xlg line_height_lg'>Governance Implementation <span>&#40;</span>Q3 2024<span>&#41;</span></h4>
                            <p className='max_width_237 mb-0 text-white fw-normal font_size_xmd line_height_xl font_family_inter opacity_70'>Introduce community  governance mechanisms.</p>
                        </div>
                    </div>
                </div>
                <div className="roadmap_fourth_box">
                    <div className=" d-flex align-items-end gap_18">
                        <img src={Img4} alt="Im4" className=' pb_32' />
                        <div className=" d-flex flex-column">
                            <h4 className=' mb-2 text-white max_width_237 font_weight_900 font_family_inter font_size_xlg line_height_lg'> Partnerships and Influencer Collaborations <span>&#40;</span>Q4 2024<span>&#41;</span></h4>
                            <p className='max_width_237 mb-0 text-white fw-normal font_size_xmd line_height_xl font_family_inter opacity_70'> Forge  strategic partnerships and collaborations.</p>
                        </div>
                    </div>
                </div>
                <div className="roadmap_fifth_box">
                    <div className=" d-flex align-items-center gap_18">
                        <img src={Img5} alt="Im5" />
                        <div className=" d-flex flex-column">
                            <h4 className=' mb-2 text-white max_width_237 font_weight_900 font_family_inter font_size_xlg line_height_lg'>  Utility Expansion <span>&#40;</span>Q1 2025<span>&#41;</span></h4>
                            <p className='max_width_237 mb-0 text-white fw-normal font_size_xmd line_height_xl font_family_inter opacity_70'>Explore new use cases and  integrations for $LHGG.</p>
                        </div>
                    </div>
                </div>
            </Slider>
        </section>
    )
}

export default Roadmap