import React, { useState, useEffect } from 'react';
import OfferingSlide from './OfferingSlide';
import { client } from '../../client';

const Offerings = () => {
  const [parentEntries, setParentEntries] = useState([]);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const parentResponse = await client.getEntries({
          content_type: 'offerings',
          "fields.type": 'Parent'
        });
        console.log(parentResponse); // Check the response in the console
        if (parentResponse.items.length) {
          setParentEntries(parentResponse.items);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchPage();
  }, []);

  return (
    <section className='offering'>
      <div className='page_title'>
        <h1>OFFERINGS</h1>
      </div>
      <div className='container'>
        {parentEntries.map((parentItem) => {
          const { id, title, description, image, subOfferings , additionalInfo} = parentItem.fields;
          const imageUrl = image.fields.file.url;

          return (
            <div key={id} className='wrapper'>
              <OfferingSlide
                slideTitle={title}
                slideBg={imageUrl}
                slideDescription={description}
                subOfferings={subOfferings}
                additionalInfo={additionalInfo}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Offerings;
