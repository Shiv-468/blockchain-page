import React from 'react'
import TokennomicsTopBubbles from '../assets/images/webp/TokennomicsTopBubbles.png'
import TokennomicsBottomBubbles from '../assets/images/webp/TokennomicsBottomBubbles.png'
const Tokenomics = () => {
  return (
<section className=' bg-black position-relative'>
    <div className=" position-absolute TokennomicsTopBubbles">
<img src={TokennomicsTopBubbles} alt="TokennomicsTopBubbles" className=' w-100' />
    </div>
    <div className=" position-absolute TokennomicsBottomBubbles">
<img src={TokennomicsBottomBubbles} alt="TokennomicsBottomBubbles" className=' w-100' />
    </div>
    <div className=" container max_width_1140 tokenomic_section_padding_top tokenomic_section_padding_bottom">
        <div className=" row">
            <div className=" col-12 col-lg-5 d-flex flex-column align-items-center align-items-lg-start">
       <div className=" d-flex flex-column">
       <h2 className=' text-white mb-0 font_family_inter font_weight_900 font_size_5xl line_height_6xl margin_bottom_20 '>TOKENOMICS</h2>
                <p className=' margin_bottom_20 opacity_80 text-white font_family_inter fw-normal font_size_xmd line_height_xl max_width_453'>Let's Hug GG ($LHGG) operates on a deflationary tokenomics model designed to incentivize selling Bitcoin.  With a fixed total supply and a burn mechanism in place, each transaction contributes to reducing the  circulating supply of $LHGG, thereby increasing its scarcity and value over time. Additionally, a portion of  transaction fees is allocated to liquidity pools, ensuring stability and liquidity for $LHGG holders.</p>
                <div className="token_card">
                    <div className=" d-flex gap-3 padding_bottom_12">
                        <p className='mb-0 text-white max_width_139 font_size_md line_height_xl fw-normal'>Token Name:</p>
                        <p className=' mb-0 text-white font_size_md line_height_xl fw-bold'>Let’s Hug GG</p>
                    </div>
                    <div className=" d-flex gap-3 padding_bottom_12">
                        <p className='mb-0 text-white max_width_139 font_size_md line_height_xl fw-normal'>Token Symbol:</p>
                        <p className=' mb-0 text-white font_size_md line_height_xl fw-bold'>$LHGG</p>
                    </div>
                    <div className=" d-flex gap-3 padding_bottom_12">
                        <p className='mb-0 text-white max_width_139 font_size_md line_height_xl fw-normal'>Total Supply:</p>
                        <p className=' mb-0 text-white font_size_md line_height_xl fw-bold'> 1 Billion $LHGG</p>
                    </div>
                    <div className=" d-flex gap-3">
                        <p className='mb-0 text-white max_width_139 font_size_md line_height_xl fw-normal'>Total Type:</p>
                        <p className=' mb-0 text-white font_size_md line_height_xl fw-bold'>Solana SPL Token</p>
                    </div>
                </div>
       </div>
            </div>
            <div className=" col-12 col-lg-7 d-flex justify-content-end">
                <div className="max_width_616 w-100">
                            <div className="token_box1 bg_yellow w-100 d-flex align-items-center">
                                <h4 className=' mb-0 font_family_inter'>Marketing & Partnerships</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Tokenomics