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
      {
        entries.map((items, index) => {
          return (
            <React.Fragment>

            </React.Fragment>
          )
        })
      }
    </>
  )
}

export default About
