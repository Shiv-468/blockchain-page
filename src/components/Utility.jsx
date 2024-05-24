import React from 'react'
import MenWithPhoto from '../assets/images/webp/MenWithPhoto.png'
import UtilityNotepad from '../assets/images/webp/UtilityNotepad.png'
const Utility = () => {
  return (
    <section className='UtilityBG position-relative'>
      <div className=" position-absolute UtilityNotepad z-0">
        <img src={UtilityNotepad} alt="UtilityNotepad" />
      </div>
        <div className="container max_width_1140 Utility_section_padding_top">
            <div className="row pb-5">
                <div className=" col-12 col-lg-6 d-flex align-items-center justify-content-center justify-content-lg-start">
                  <div className=" d-flex flex-column align-items-start">
                  <h2 className=' margin_bottom_20 font_size_5xl line_height_6xl font_family_inter font_weight_900'>UTILITY</h2>
                    <p className=' mb-0 max_width_547 font_family_inter fw-normal font_size_xmd line_height_md opacity_80'>The utility of $LHGG extends beyond its humorous appeal.  Holders of $LHGG gain access to exclusive merchandise,  events, and community perks. Furthermore, $LHGG serves  as a medium of exchange within our ecosystem, facilitating  transactions and interactions among community members.  Through strategic partnerships and integrations, we aim to  expand the utility of $LHGG, creating additional avenues for  adoption and growth.</p>
            <button className=' common_button bg_yellow text-black font_family_inter fw-semibold font_size_xmd line_height_sm margin_top_28'>Buy $GrayGensler</button>
                  </div>
                </div>
                <div className=" col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end">
                  <img src={MenWithPhoto} alt="MenWithPhoto" className=' w-100 MenWithPhoto' />
                </div>
            </div>
        </div>
        <div className=" history_div overflow-hidden  bg_yellow d-flex align-items-center justify-content-center">
          <p className=' mb-0 text-center font_size_2xl line_height_3xl font_family_inter font_weight_900'>PLACE YOURSELF ON THE RIGHT SIDE OF HISTORY</p>
        </div>
    </section>
  )
}

export default Utility