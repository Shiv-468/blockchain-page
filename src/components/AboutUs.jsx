import React from 'react'
import MenWithPhone from '../assets/images/webp/MenWithPhone.png'
import Uniswap from '../assets/images/svg/Uniswap.svg'
import Dextools_logo2 from '../assets/images/svg/dextools_logo2.svg'
import Xlogo2 from '../assets/images/svg/x_logo2.svg'
import Telegram_symbol2 from '../assets/images/svg/telegram_symbol2.svg'
import Etherscan from '../assets/images/svg/Etherscan.svg'
import AboutSectionSpex from '../assets/images/svg/AboutSectionSpex.svg'
const AboutUs = () => {
  return (
   <section className='AboutSectionBg position-relative'>
    <div className="position-absolute AboutSectionSpex z-0">
        <img src={AboutSectionSpex} alt="AboutSectionSpex" />
    </div>
    <div className=" container max_width_1140 About_section_padding_top About_section_padding_bottom">
        <div className=" row">
            <div className=" col-12 col-lg-6 d-flex justify-content-start">
                <img src={MenWithPhone} alt="MenWithPhone" className=' w-100 padding_top_40 max_width_538' />
            </div>
            <div className=" col-12 col-lg-6 d-flex flex-column align-items-lg-end align-items-center">
            <div className=" max_width_547">
                <div className=" d-flex align-items-center gap-4">
                <a href="https://www.dextools.io/app/en/pairs">
                        <img src={Dextools_logo2} alt="Dextools_logo2" />
                    </a>
                    <a href="https://uniswap.org/">
                        <img src={Uniswap} alt="Uniswap" />
                    </a>
                    <a href="https://twitter.com/">
                        <img src={Xlogo2} alt="Xlogo2" />
                    </a>
                    <a href="https://telegram.org/">
                        <img src={Telegram_symbol2} alt="Telegram_symbol2" />
                    </a>
                    <a href="https://etherscan.io/">
                        <img src={Etherscan} alt="Etherscan" />
                    </a>
                </div>
                <h2 className=' text-black font_size_5xl line_height_6xl font_weight_900 font_family_inter mt-4 margin_bottom_20'>ABOUT US</h2>
                <p className='opacity_80 mb-0 font_size_xmd line_height_md font_family_inter fw-normal'> In the ever-evolving landscape of cryptocurrency, where markets  can swing on a tweet and sentiments wield as much power as  technical analysis, one figure has recently stepped into the  spotlight: Gary Gensler, or as we affectionately call him, GG. With his  recent comments on Bitcoin, Gensler stirred the pot of fear,  uncertainty, and doubt (FUD), sending shockwaves through the  crypto community.</p>
                <p className='opacity_80 mb-0 font_size_xmd line_height_md mt-3 font_family_inter fw-normal'>But fear not, for in the midst of this whirlwind of emotions, there  emerges a beacon of levity and laughter: Let's Hug GG ($LHGG).Hug GG We're not your average token; we're a humorous response to the  serious business of crypto. Inspired by Gensler's remarks and the  ensuing FUD frenzy, $LHGG aims to inject a healthy dose of humor  into the conversation while playfully encouraging individuals to  consider selling their Bitcoins.</p>
                <p className='opacity_80 mb-0 font_size_xmd line_height_md mt-3 font_family_inter fw-normal'>ou see, we believe that in times of uncertainty, a good laugh can be  the best antidote. And what better way to address fear than with a  hug—from behind, of course! Our slogan, "If you sell your BTC, we'll  let you hug GG from behind so tightly," embodies our playful  approach to tackling the anxiety surrounding Bitcoin and the  broader crypto market.</p>
                <p className='opacity_80 mb-0 font_size_xmd line_height_md mt-3 font_family_inter fw-normal'>So, buckle up and get ready for a rollercoaster ride of giggles, hugs,  and maybe even a few profitable trades along the way. Because in  the world of $LHGG, laughter isn't just the best medicine—it's the  best investment strategy.</p>
                </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default AboutUs