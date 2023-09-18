import React, { useEffect } from 'react'
import Aos from 'aos';
import './Home.css'

const HomeSlide = (props) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
    const {  slideTitle, slideBg } = props
    return (
        <div className='slideWrap' style={{ backgroundImage: `url(${slideBg})` }}>
            <div className='textWrap'>
                <h2 data-aos="fade-up">{slideTitle}</h2>
            </div>
        </div>

    )
}

export default HomeSlide