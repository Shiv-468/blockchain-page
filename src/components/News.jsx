import React from 'react'
import NewSectionBG from '../assets/images/webp/NewSectionBG.webp'
import JoeBidenn from '../assets/images/svg/JoeBidenn.svg'
import BlueTick from '../assets/images/svg/BlueTick.svg'
import CommentIcon from '../assets/images/svg/CommentIcon.svg'
import Retweeticon from '../assets/images/svg/Retweeticon.svg'
import Hearticon from '../assets/images/svg/Hearticon.svg'
import Shareicon from '../assets/images/svg/Shareicon.svg'
import NewLaptop from '../assets/images/webp/NewLaptop.webp'
import NewMobile from '../assets/images/webp/NewMobile.webp'
const News = () => {
  return (
    <section className=' position-relative News_section_padding_top'>
        <div className=" position-absolute NewSectionBG z-0">
            <img src={NewSectionBG} alt="NewSectionBG" className=' w-100 z-0' />
        </div>
        <div className=" position-absolute NewLaptop d-none d-lg-block z-0">
            <img src={NewLaptop} alt="NewLaptop" className=' w-100' />
        </div>
        <div className=" position-absolute NewMobile d-none d-lg-block z-0">
            <img src={NewMobile} alt="NewMobile" className=' w-100 z-0' />
        </div>
        <div className="container my_container z-1">
        <h2 className=' mb-0 text-black text-center font_weight_900 font_family_inter font_size_5xl line_height_6xl z-1'>LATEST NEWS</h2>
            <div className=" row z-1 mx_10 News_Card_Row_padding_top News_Card_Row_padding_bottom">
                <div className="col-12 col-sm-6 col-lg-4 z-1 px_10" data-aos="fade-up"
     data-aos-duration="1000">
                    <div className="News_Card">
                        <div className=" d-flex gap_15 align-items-center margin_bottom_20">
                            <img src={JoeBidenn} alt="JoeBidenn" className='JoeBidenn' />
                            <div className=" d-flex flex-column">
                            <div className=" d-flex gap-1 align-items-center">
                                <h5 className=' mb-0 text-black font_family_inter font_weight_900 font_size_xmd line_height_sm'>Joe Bidenn</h5>
                                <img src={BlueTick} alt="BlueTick" />
                            </div>
                            <p className=' mb-0 font_family_inter fw-normal font_size_xsm line_height_md opacity_80'>I am giving back in the community.</p>
                            </div>
                        </div>
                        <p className=' mb-0 font_family_inter font_size_xmd line_height_md fw-normal'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                        <div className=" d-flex align-items-center padding_right_12 opacity_70 justify-content-between margin_top_28">
                            <div className=" d-flex align-items-center gap-1">
                                <img src={CommentIcon} alt="CommentIcon" />
                                <p className=' mb-0 font_size_sm line_height_xsm fw-normal font_family_SfProText'>28</p>
                            </div>
                            <div className=" d-flex align-items-center gap-1">
                                <img src={Retweeticon} alt="Retweeticon" />
                                <p className=' mb-0 font_size_sm line_height_xsm fw-normal font_family_SfProText'>5</p>
                            </div>
                            <div className=" d-flex align-items-center gap-1">
                                <img src={Hearticon} alt="Hearticon" />
                                <p className=' mb-0 font_size_sm line_height_xsm fw-normal font_family_SfProText'>21</p>
                            </div>
                            <img src={Shareicon} alt="Shareicon" />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mt-4 mt-sm-0 z-1 px_10" data-aos="fade-up"
     data-aos-duration="1000">
                    <div className="News_Card">
                        <div className=" d-flex gap_15 align-items-center margin_bottom_20">
                            <img src={JoeBidenn} alt="JoeBidenn" className='JoeBidenn' />
                            <div className=" d-flex flex-column">
                            <div className=" d-flex gap-1 align-items-center">
                                <h5 className=' mb-0 text-black font_family_inter font_weight_900 font_size_xmd line_height_sm'>Joe Bidenn</h5>
                                <img src={BlueTick} alt="BlueTick" />
                            </div>
                            <p className=' mb-0 font_family_inter fw-normal font_size_xsm line_height_md opacity_80'>I am giving back in the community.</p>
                            </div>
                        </div>
                        <p className=' mb-0 font_family_inter font_size_xmd line_height_md fw-normal'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                        <div className=" d-flex align-items-center padding_right_12 opacity_70 justify-content-between margin_top_28">
                            <div className=" d-flex align-items-center gap-1">
                                <img src={CommentIcon} alt="CommentIcon" />
                                <p className=' mb-0 font_size_sm line_height_xsm fw-normal font_family_SfProText'>28</p>
                            </div>
                            <div className=" d-flex align-items-center gap-1">
                                <img src={Retweeticon} alt="Retweeticon" />
                                <p className=' mb-0 font_size_sm line_height_xsm fw-normal font_family_SfProText'>5</p>
                            </div>
                            <div className=" d-flex align-items-center gap-1">
                                <img src={Hearticon} alt="Hearticon" />
                                <p className=' mb-0 font_size_sm line_height_xsm fw-normal font_family_SfProText'>21</p>
                            </div>
                            <img src={Shareicon} alt="Shareicon" />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mt-4 mt-lg-0 z-1 px_10" data-aos="fade-up"
     data-aos-duration="1000">
                    <div className="News_Card">
                        <div className=" d-flex gap_15 align-items-center margin_bottom_20">
                            <img src={JoeBidenn} alt="JoeBidenn" className='JoeBidenn' />
                            <div className=" d-flex flex-column">
                            <div className=" d-flex gap-1 align-items-center">
                                <h5 className=' mb-0 text-black font_family_inter font_weight_900 font_size_xmd line_height_sm'>Joe Bidenn</h5>
                                <img src={BlueTick} alt="BlueTick" />
                            </div>
                            <p className=' mb-0 font_family_inter fw-normal font_size_xsm line_height_md opacity_80'>I am giving back in the community.</p>
                            </div>
                        </div>
                        <p className=' mb-0 font_family_inter font_size_xmd line_height_md fw-normal'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                        <div className=" d-flex align-items-center padding_right_12 opacity_70 justify-content-between margin_top_28">
                            <div className=" d-flex align-items-center gap-1">
                                <img src={CommentIcon} alt="CommentIcon" />
                                <p className=' mb-0 font_size_sm line_height_xsm fw-normal font_family_SfProText'>28</p>
                            </div>
                            <div className=" d-flex align-items-center gap-1">
                                <img src={Retweeticon} alt="Retweeticon" />
                                <p className=' mb-0 font_size_sm line_height_xsm fw-normal font_family_SfProText'>5</p>
                            </div>
                            <div className=" d-flex align-items-center gap-1">
                                <img src={Hearticon} alt="Hearticon" />
                                <p className=' mb-0 font_size_sm line_height_xsm fw-normal font_family_SfProText'>21</p>
                            </div>
                            <img src={Shareicon} alt="Shareicon" />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 z-1 px_10 mt-4" data-aos="fade-up"
     data-aos-duration="1000">
                    <div className="News_Card">
                        <div className=" d-flex gap_15 align-items-center margin_bottom_20">
                            <img src={JoeBidenn} alt="JoeBidenn" className='JoeBidenn' />
                            <div className=" d-flex flex-column">
                            <div className=" d-flex gap-1 align-items-center">
                                <h5 className=' mb-0 text-black font_family_inter font_weight_900 font_size_xmd line_height_sm'>Joe Bidenn</h5>
                                <img src={BlueTick} alt="BlueTick" />
                            </div>
                            <p className=' mb-0 font_family_inter fw-normal font_size_xsm line_height_md opacity_80'>I am giving back in the community.</p>
                            </div>
                        </div>
                        <p className=' mb-0 font_family_inter font_size_xmd line_height_md fw-normal'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                        <div className=" d-flex align-items-center padding_right_12 opacity_70 justify-content-between margin_top_28">
                            <div className=" d-flex align-items-center gap-1">
                                <img src={CommentIcon} alt="CommentIcon" />
                                <p className=' mb-0 font_size_sm line_height_xsm fw-normal font_family_SfProText'>28</p>
                            </div>
                            <div className=" d-flex align-items-center gap-1">
                                <img src={Retweeticon} alt="Retweeticon" />
                                <p className=' mb-0 font_size_sm line_height_xsm fw-normal font_family_SfProText'>5</p>
                            </div>
                            <div className=" d-flex align-items-center gap-1">
                                <img src={Hearticon} alt="Hearticon" />
                                <p className=' mb-0 font_size_sm line_height_xsm fw-normal font_family_SfProText'>21</p>
                            </div>
                            <img src={Shareicon} alt="Shareicon" />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 z-1 px_10 mt-4" data-aos="fade-up"
     data-aos-duration="1000">
                    <div className="News_Card">
                        <div className=" d-flex gap_15 align-items-center margin_bottom_20">
                            <img src={JoeBidenn} alt="JoeBidenn" className='JoeBidenn' />
                            <div className=" d-flex flex-column">
                            <div className=" d-flex gap-1 align-items-center">
                                <h5 className=' mb-0 text-black font_family_inter font_weight_900 font_size_xmd line_height_sm'>Joe Bidenn</h5>
                                <img src={BlueTick} alt="BlueTick" />
                            </div>
                            <p className=' mb-0 font_family_inter fw-normal font_size_xsm line_height_md opacity_80'>I am giving back in the community.</p>
                            </div>
                        </div>
                        <p className=' mb-0 font_family_inter font_size_xmd line_height_md fw-normal'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                        <div className=" d-flex align-items-center padding_right_12 opacity_70 justify-content-between margin_top_28">
                            <div className=" d-flex align-items-center gap-1">
                                <img src={CommentIcon} alt="CommentIcon" />
                                <p className=' mb-0 font_size_sm line_height_xsm fw-normal font_family_SfProText'>28</p>
                            </div>
                            <div className=" d-flex align-items-center gap-1">
                                <img src={Retweeticon} alt="Retweeticon" />
                                <p className=' mb-0 font_size_sm line_height_xsm fw-normal font_family_SfProText'>5</p>
                            </div>
                            <div className=" d-flex align-items-center gap-1">
                                <img src={Hearticon} alt="Hearticon" />
                                <p className=' mb-0 font_size_sm line_height_xsm fw-normal font_family_SfProText'>21</p>
                            </div>
                            <img src={Shareicon} alt="Shareicon" />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 z-1 px_10 mt-4" data-aos="fade-up"
     data-aos-duration="1000">
                    <div className="News_Card">
                        <div className=" d-flex gap_15 align-items-center margin_bottom_20">
                            <img src={JoeBidenn} alt="JoeBidenn" className='JoeBidenn' />
                            <div className=" d-flex flex-column">
                            <div className=" d-flex gap-1 align-items-center">
                                <h5 className=' mb-0 text-black font_family_inter font_weight_900 font_size_xmd line_height_sm'>Joe Bidenn</h5>
                                <img src={BlueTick} alt="BlueTick" />
                            </div>
                            <p className=' mb-0 font_family_inter fw-normal font_size_xsm line_height_md opacity_80'>I am giving back in the community.</p>
                            </div>
                        </div>
                        <p className=' mb-0 font_family_inter font_size_xmd line_height_md fw-normal'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                        <div className=" d-flex align-items-center padding_right_12 opacity_70 justify-content-between margin_top_28">
                            <div className=" d-flex align-items-center gap-1">
                                <img src={CommentIcon} alt="CommentIcon" />
                                <p className=' mb-0 font_size_sm line_height_xsm fw-normal font_family_SfProText'>28</p>
                            </div>
                            <div className=" d-flex align-items-center gap-1">
                                <img src={Retweeticon} alt="Retweeticon" />
                                <p className=' mb-0 font_size_sm line_height_xsm fw-normal font_family_SfProText'>5</p>
                            </div>
                            <div className=" d-flex align-items-center gap-1">
                                <img src={Hearticon} alt="Hearticon" />
                                <p className=' mb-0 font_size_sm line_height_xsm fw-normal font_family_SfProText'>21</p>
                            </div>
                            <img src={Shareicon} alt="Shareicon" />
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </section>
  )
}

export default News