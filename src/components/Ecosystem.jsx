import React from 'react'
import MenWithNewspaper from '../assets/images/webp/MenWithNewspaper.webp'
import Uniswap from '../assets/images/svg/Uniswap.svg'
import Dextools_logo2 from '../assets/images/svg/dextools_logo2.svg'
import Xlogo2 from '../assets/images/svg/x_logo2.svg'
import Telegram_symbol2 from '../assets/images/svg/telegram_symbol2.svg'
import Etherscan from '../assets/images/svg/Etherscan.svg'
import EcosystemNews from '../assets/images/webp/EcosystemNews.webp'
import AboutSectionSpex from '../assets/images/svg/AboutSectionSpex.svg'
const Ecosystem = () => {
  return (
   <section className='EcosystemBG position-relative'>
    <div className=" position-absolute EcosystemNews d-none d-md-block z-0">
        <img src={EcosystemNews} alt="EcosystemNews" />
    </div>
    <div className=" position-absolute EcosystemSpex z-0">
        <img src={AboutSectionSpex} alt="EcosystemSpex" className=' w-100 AboutSectionSpex' />
    </div>
    <div className=" container my_container Ecosystem_padding_top Ecosystem_padding_bottom">
        <div className=" row">
            <div className=" col-12 col-lg-6 d-flex justify-content-center justify-content-lg-start" data-aos="fade-right">
                <img src={MenWithNewspaper} alt="MenWithNewspaper" className=' w-100 MenWithNewspaper' />
            </div>
            <div className=" col-12 col-lg-6 d-flex pt-4 justify-content-center justify-content-lg-end" data-aos="fade-left">
          <div className=" max_width_547">
          <div className=" d-flex align-items-center justify-content-center justify-content-sm-start gap-1 gap-sm-3 gap-xl-4 flex-wrap">
                <a href="https://www.dextools.io/app/en/pairs" target='_blank'>
                        <img src={Dextools_logo2} alt="Dextools_logo2" />
                    </a>
                    <a href="https://uniswap.org/" target='_blank'>
                        <img src={Uniswap} alt="Uniswap" />
                    </a>
                    <a href="https://twitter.com/" target='_blank'>
                        <img src={Xlogo2} alt="Xlogo2" />
                    </a>
                    <a href="https://telegram.org/" target='_blank'>
                        <img src={Telegram_symbol2} alt="Telegram_symbol2" />
                    </a>
                    <a href="https://etherscan.io/" target='_blank'>
                        <img src={Etherscan} alt="Etherscan" />
                    </a>
                </div>
                <h2 className=' text-black font_size_5xl line_height_6xl font_weight_900 font_family_inter mt-4 margin_bottom_20'>ECOSYSTEM</h2>
                <p className=' opacity_80 mb-0 font_size_xmd line_height_md font_family_inter fw-normal'>The $LHGG ecosystem is built upon the principles of inclusivity,  humor, and innovation. Our community-driven approach  empowers members to actively participate in governance,  decision-making, and promotional activities. Through social  media campaigns, memes, and creative content, we seek to  amplify the message of embracing humor in the crypto space  and challenging conventional narratives. Together, we aspire to  foster a vibrant and engaging ecosystem where laughter reigns  supreme.</p>
            <button className=' common_button btn_1 margin_top_33 bg_yellow text-black font_family_inter fw-semibold font_size_xmd line_height_sm'>Buy $GrayGensler</button>

          </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Ecosystem