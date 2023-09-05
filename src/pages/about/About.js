import React, { useState, useEffect } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { client } from '../../client';

const About = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'about',
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
    <>
      <section className='about'>
        <div className='container'>
          {
            entries.map((items, index) => {
              const name = items.fields.name
              const profileImg = items.fields.profileImage.fields.file.url
              const richTextContent = items.fields.profileInfo;
              return (
                <React.Fragment key={index}>
                  <div className='d-flex'>
                    <div className='profile_img'>
                      <img src={profileImg} alt={profileImg}></img>
                    </div>
                    <div className="rich-text-content">
                      <h3>{name}</h3>
                      {documentToReactComponents(richTextContent)}
                    </div>
                  </div>
                </React.Fragment>
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default About
