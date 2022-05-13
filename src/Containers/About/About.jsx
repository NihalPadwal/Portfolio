import React, { useState, useEffect } from "react";
import "./About.scss";
import { AppWrap } from "../../Wrapper";
import { motion } from "framer-motion";
import { images } from "../../Constants";

const abouts = [
  {
    title: "Web dev",
    desc: "I am a good web dev",
    imgUrl: images.about01,
  },
  {
    title: "App dev",
    desc: "I am a good web dev",
    imgUrl: images.about02,
  },
  {
    title: "UI/UX",
    desc: "I am a good web dev",
    imgUrl: images.about03,
  },
  {
    title: "Game dev",
    desc: "I am a good web dev",
    imgUrl: images.about04,
  },
];

const About = () => {
  return (
    <>
      <h2 id="about" className="head-text">
        I Know That <span>Good Dev</span>
        <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profiles-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, "about");
