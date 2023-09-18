import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import './Offerings.css';
import SubOfferingChild from './SubOfferingChild';

const OfferingSlide = (props) => {
    const { id, slideTitle, slideBg, slideDescription, subOfferings, additionalInfo } = props;

    // Define options for rendering the rich text content
    const options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const { title, description, file } = node.data.target.fields;
                const imageUrl = file.url;
                const altText = description || title || 'Image';
                console.log('Image URL:', imageUrl);
                return (
                    <div className="custom-rich-text-image">
                        <img src={imageUrl} alt={altText} />
                    </div>
                );
            },
        },
    };

    // Function to render the custom HTML structure
    const renderCustomStructure = (index) => (
        <div key={index} className="wrapper">
            <span className="vc_sep_line"></span>
            <div className="custom-html-structure d-flex">
                <img
                    src={subOfferings[index].fields.image.fields.file.url}
                    alt={subOfferings[index].fields.title}
                />
                <div>
                    <h2>{subOfferings[index].fields.title}</h2>
                    <p>{subOfferings[index].fields.description}</p>
                </div>
            </div>
        </div>
    );

    return (
        <React.Fragment key={id}>
            <span className="vc_sep_line"></span>
            <div className="slide_Wrap">
                <div className="slide_bg">
                    <img src={slideBg} alt="slideBg" />
                </div>
                <div className="text_Wrap">
                    <h2>{slideTitle}</h2>
                    <p>{slideDescription}</p>
                    {documentToReactComponents(additionalInfo, options)}
                </div>
            </div>
            <div className="reference">
                {subOfferings && subOfferings.length > 0 ? (
                    subOfferings.map((subOffering, index) => {
                        return (
                            <div key={index} className="wrapper">
                                <span className="vc_sep_line"></span>
                                <div className="d-flex">
                                    <img
                                        src={subOffering.fields.image.fields.file.url}
                                        alt={subOffering.fields.title}
                                    />
                                    <div>
                                        <h2>{subOffering.fields.title}</h2>
                                        <p>{subOffering.fields.description}</p>
                                        {index === 0 && slideTitle === "BUILDING ORGANIZATION EFFECTIVENESS" ? (
                                           <SubOfferingChild/>
                                        ) : null}
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
