import React, { useState, useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { client } from "../../client";

const SubOfferingChild = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await client.getEntries({
          content_type: "offerings",
          "fields.type": "AGILE TRANSFORMATION",
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
      <div className="SubOfferingChild">
        <span class="vc_sep_line"></span>
        <div className="reference">
          {entries.map((items, index) => {
            const { id, title, image } = items.fields;
            const imageUrl = image.fields.file.url;
            const richTextContent = items.fields.description;
            return (
              <React.Fragment key={id}>
                <div>
                  <img src={imageUrl} alt={title} />
                  <div>
                    <h2>{title}</h2>
                    <p> {richTextContent}</p>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SubOfferingChild;
