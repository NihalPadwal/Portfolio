import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap } from "../../Wrapper";
import { images } from "../../Constants";
import "./Skills.scss";

const Skills = () => {
  return (
    <>
      <h2 className="head-text">Skills & Experiance</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            key="skill name"
          >
            <div className="app__flex" style={{ backgroundColor: "white" }}>
              <img src={images.react} alt="logo" />
            </div>
            <p className="p-text">React.JS</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            key="skill name"
          >
            <div className="app__flex" style={{ backgroundColor: "white" }}>
              <img src={images.redux} alt="logo" />
            </div>
            <p className="p-text">Redux</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            key="skill name"
          >
            <div className="app__flex" style={{ backgroundColor: "white" }}>
              <img src={images.flutter} alt="logo" />
            </div>
            <p className="p-text">Flutter</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            key="skill name"
          >
            <div className="app__flex" style={{ backgroundColor: "white" }}>
              <img src={images.node} alt="logo" />
            </div>
            <p className="p-text">Node.js</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            key="skill name"
          >
            <div className="app__flex" style={{ backgroundColor: "white" }}>
              <img src={images.nextjs} alt="logo" />
            </div>
            <p className="p-text">Next.JS</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            key="skill name"
          >
            <div className="app__flex" style={{ backgroundColor: "black" }}>
              <img src={images.react} alt="logo" />
            </div>
            <p className="p-text">React Native</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            key="skill name"
          >
            <div className="app__flex" style={{ backgroundColor: "white" }}>
              <img src={images.unity} alt="logo" />
            </div>
            <p className="p-text">Unity</p>
          </motion.div>
        </motion.div>

        <motion.div className="app__skills-exp">
          <motion.div className="app__skills-exp-item" key="year">
            <div className="app__skills-exp-year">
              <p className="bold-text">2021</p>
            </div>
            <motion.div className="app__exp-works">
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-exp-work"
                data-tip
                data-for="react"
                key="work name"
              >
                <h4 className="bold-text">
                  Junior Associate-Interface Developer
                </h4>
                <p className="p-text">Ting Works</p>
              </motion.div>
              <ReactTooltip
                id="work name"
                effect="solid"
                arrowColor="#fff"
                className="skills-tooltip"
              >
                Work Desc
              </ReactTooltip>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(Skills, "skills");
