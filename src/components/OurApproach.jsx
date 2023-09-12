import React, { useState, useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { client } from "../client";

const OurApproach = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await client.getEntries({
          content_type: "ourApproach",
        });
        console.log(response); // Check the response in the console
        if (response.items.length) {
          setEntries(response.items);
          setEntries(response.items.reverse());
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchEntries();
  }, []);
  return (
    <>
      <section className="OurApproach">
        <div className="container">
          {entries.map((items, index) => {
            const title = items.fields.title;
            const image = items.fields.image.fields.file.url;
            const richTextContent = items.fields.info;
            return (
              <React.Fragment key={index}>
                <h2>{title}</h2>
                <div className="d-flex">
                  <div className="approach_image">
                    <img src={image} alt={image}></img>
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
    </>
  );
};

export default OurApproach;
