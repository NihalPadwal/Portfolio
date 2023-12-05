import React, { useState, useEffect } from "react";
import "./Work.scss";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap } from "../../Wrapper";
import { images } from "../../Constants";
import { request, gql } from "graphql-request";

const Work = () => {
  const [activeFilter, setactiveFilter] = useState("All");
  const [animateCard, setanimateCard] = useState([{ y: 0, opacity: 1 }]);
  const [works, setworks] = useState();
  const [filterWork, setfilterWork] = useState();

  const [projects, setProjects] = useState();
  const [currCategory, setCurrCategory] = useState(0);

  async function getProjects() {
    const document = gql`
      {
        projectCategories {
          name
          projects {
            name
            desc {
              text
            }
            image {
              url
              width
              height
            }
            githubUrl
            liveUrl
          }
        }
      }
    `;

    const res = await request(process.env.REACT_APP_API, document);

    setProjects(res.projectCategories);
  }

  useEffect(() => {
    const query = "";

    getProjects();
  }, []);

  const handleWorkFilter = (id) => {
    setCurrCategory(id);
  };

  if (!projects) {
    return <></>;
  }

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>

      <div className="app__work-filter">
        {projects.map((item, index) => (
          <div
            key={item.name}
            onClick={() => handleWorkFilter(index)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item.name}
          </div>
        ))}
      </div>

      <motion.div
        // animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {projects[currCategory].projects.map((item, ind) => {
          return (
            <div className="app__work-item app__flex" key={item.name}>
              <div className="app__work-img app__flex">
                <img src={item.image.url} alt="work.name" />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="app__work-hover app__flex"
                >
                  <a href={item.liveUrl} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  {item.githubUrl && (
                    <a href={item.githubUrl} target="_blank" rel="noreferrer">
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className="app__flex"
                      >
                        <AiFillGithub />
                      </motion.div>
                    </a>
                  )}
                </motion.div>
              </div>

              <div className="app__work-content app__flex">
                <h4 className="bold-text">{item.name}</h4>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {item.desc?.text.slice(0, 150)}
                </p>

                <div className="app__work-tag app__flex">
                  <p className="p-text">{projects[currCategory].name}</p>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </>
  );
};

export default AppWrap(Work, "work");
