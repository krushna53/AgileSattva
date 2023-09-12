import React, { useState, useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { client } from "../client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await client.getEntries({
          content_type: "testimonials",
        });
        console.log(response); // Check the response in the console
        if (response.items.length) {
          setEntries(response.items.reverse());
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchEntries();
  }, []);

  // Configure the settings for the slider
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="testimonials">
      <div className="container">
        <h2>Testimonials</h2>
        <Slider {...sliderSettings}>
          {entries.map((items, index) => {
            const name = items.fields.name;
            const richTextContent = items.fields.info;
            return (
              <div key={index}>
                <div className="d-flex">
                  <div className="rich-text-content">
                    <h3>{name}</h3>
                    {documentToReactComponents(richTextContent)}
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
