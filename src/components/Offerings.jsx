import React, { useState, useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { client } from "../client";
import { Link } from "react-router-dom";
const Offerings = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
  
    const fetchEntries = async () => {
      try {
        const response = await client.getEntries({
          content_type: "offerings",
          "fields.type": "Home",
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
      <section className="Offerings">
        <div className="container">
          <h2>Offerings</h2>
          <div className="slide_Wrap">
            {entries.map((items, index) => {
              const { id, title, image, additionalInfo } = items.fields;
              const imageUrl = image.fields.file.url;
              const richTextContent = items.fields.info;
              return (
                <React.Fragment key={id}>
                  <div>
                    <div className="slide_bg">
                      <Link to="offerings">
                        <img src={imageUrl} alt="slideBg" />
                      </Link>
                    </div>
                    <div className="text_Wrap">
                      <h2>{title}</h2>
                      <span class="vc_sep_line"></span>
                      <p>{richTextContent}</p>
                      {documentToReactComponents(additionalInfo)}
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Offerings;
