import React, { useState, useEffect } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { client } from '../../client';

const WhatsNew = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'whatsNew',
        });
        console.log(response); // Check the response in the console
        if (response.items.length) {
          setEntries(response.items);
          setEntries(response.items.reverse())
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchEntries();
  }, []);

  return (
    <section className='whats_new'>
    <div className='page_title'>
    <h1>Whats New? </h1></div>
      <div className='container'>
        {entries.map((item, index) => {
          const imageUrl = item.fields.image.fields.file.url;
          const imageTitle = item.fields.imageTitle
          const richTextContent = item.fields.link; // Assuming richText is the field name in Contentful
          return (
            <React.Fragment key={index}>
              <span className="vc_sep_line"></span>
            <div className='d-flex'>
              <div className='whats_new_slide_bg'>
                <a href='/'>
                  <img src={imageUrl} alt='img' />
                </a>
                <h3>{imageTitle}</h3>
              </div>
              <div className="rich-text-content">
                {documentToReactComponents(richTextContent)}
              </div>
            </div>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default WhatsNew;
