import React, { useState, useEffect } from 'react'
import OfferingSlide from './OfferingSlide'
import { client } from '../../client'



const Offerings = () => {

  const [entry, setEntry] = useState([]);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await client.getEntries({
          content_type: "offerings",
        });
        console.log(response); // Check the response in the console
        if (response.items.length) {
          setEntry(response.items);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchPage();
  }, []);

  return (
    <div className='Offerings'>
      
      {entry.map((item) => {
        const { id, title, description } = item.fields
        const image  = item.fields.image.fields.file.url
        console.log(image)
        return (
          <OfferingSlide key={id} slideTitle={title} slideBg={image} slideDescription={description} />
        )
      })}
    
    </div>

  )
}

export default Offerings