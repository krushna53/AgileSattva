import React, { useState, useEffect, useCallback } from "react";
import HomeSlide from "../pages/home/HomeSlide";
import { client } from "../client";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
const Banner = () => {
  const [isHomeloading, setIsHomeLoading] = useState(false);
  const [HomeSlides, setHomeSlides] = useState([]);

  const cleanUpHomeSlides = useCallback((rawData) => {
    const cleanSlides = rawData.map((slide) => {
      const { sys, fields } = slide;
      const { id } = sys;
      const slideTitle = fields.title;
      const slideBg = fields.image1.fields.file.url;
      const updatedSlide = { id, slideTitle, slideBg };
      return updatedSlide;
    });

    setHomeSlides(cleanSlides);
  }, []);

  const getHomeSlides = useCallback(async () => {
    setIsHomeLoading(true);
    try {
      const respone = await client.getEntries({ content_type: "agileSattva" });
      const responeData = respone.items;
      if (responeData) {
        cleanUpHomeSlides(responeData);
      } else {
        setHomeSlides([]);
      }
      setIsHomeLoading(false);
    } catch (error) {
      console.log(error);
      setIsHomeLoading(false);
    }
  }, [cleanUpHomeSlides]);
  useEffect(() => {
    getHomeSlides();
  }, [getHomeSlides]);

  console.log(HomeSlides);

  return (
    <>
      <div className="home">
      
          {HomeSlides.length > 0 ? (
            <Slide>
              {HomeSlides.map((item) => {
                const { id, slideTitle, slideBg } = item;
                return (
                  <HomeSlide
                    key={id}
                    slideTitle={slideTitle}
                    slideBg={slideBg}
                  />
                );
              })}
            </Slide>
          ) : (
            <p>Loading...</p> // You can replace this with a loading indicator or message
          )}
        
      </div>
    </>
  );
};

export default Banner;
