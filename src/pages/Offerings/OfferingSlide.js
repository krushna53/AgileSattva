import React from 'react';
import './Offerings.css';

const OfferingSlide = (props) => {
    const { id, slideTitle, slideBg, slideDescription, subOfferings } = props;

    return (
        <React.Fragment key={id}>
            <span className='vc_sep_line'></span>
            <div className='slide_Wrap'>
                <div className='slide_bg'>
                <img src={slideBg} alt='slideBg' />
                </div>
                <div className='text_Wrap'>
                    <h2>{slideTitle}</h2>
                    <p>{slideDescription}</p>
                </div>
            </div>
            <div className="reference">
                {subOfferings && subOfferings.length > 0 ? (
                    subOfferings.map((subOffering, index) => {
                        return (
                            <div key={index} className='wrapper'>
                                <span className='vc_sep_line'></span>
                                <div className='d-flex'>
                                    <img src={subOffering.fields.image.fields.file.url} alt='' />
                                    <div>
                                        <h2>{subOffering.fields.title}</h2>
                                        <p>
                                            {subOffering.fields.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p>No sub-offerings available.</p>
                )}
            </div>
        </React.Fragment>
    );
};

export default OfferingSlide;
