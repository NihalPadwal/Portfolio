import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap } from "../../Wrapper";
import { images } from "../../Constants";
import "./Skills.scss";
import { request, gql } from "graphql-request";

const Skills = () => {
  const [skills, setSkills] = useState();
  const [experiances, setExperiances] = useState();

  async function getSkills() {
    const document = gql`
      {
        skills(orderBy: position_DESC, first: 999) {
          name
          icon {
            height
            url
            width
          }
        }
      }
    `;

    const res = await request(
      "https://api-ap-south-1.hygraph.com/v2/clpsiitxg4xxs01tb4vofemqu/master",
      document
    );

    setSkills(res.skills);
  }

  async function getExperiance() {
    const document = gql`
      {
        experiances(orderBy: publishedAt_DESC, first: 999) {
          jobTitle
          year
          companyName
        }
      }
    `;

    const res = await request(process.env.REACT_APP_API, document);

    setExperiances(res.experiances);
  }

  useEffect(() => {
    getSkills();
    getExperiance();
  }, []);

  console.log(experiances);

  if (!skills || !experiances) {
    return <></>;
  }

  return (
    <>
      <h2 className="head-text">Skills & Experiance</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((item, ind) => {
            return (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={item.name}
              >
                <div className="app__flex" style={{ backgroundColor: "white" }}>
                  <img src={item.icon.url} alt="logo" />
                </div>
                <p className="p-text">{item.name}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div className="app__skills-exp">
          {experiances &&
            experiances.map((item, ind) => {
              return (
                <motion.div
                  className="app__skills-exp-item"
                  key={item.jobTitle}
                >
                  <div className="app__skills-exp-year">
                    <p className="bold-text">{item.year}</p>
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
                      <h4 className="bold-text">{item.jobTitle}</h4>
                      <p className="p-text">{item.companyName}</p>
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
              );
            })}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(Skills, "skills");
