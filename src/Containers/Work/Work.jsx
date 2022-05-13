import React, { useState, useEffect } from "react";
import "./Work.scss";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap } from "../../Wrapper";
import { images } from "../../Constants";

const Work = () => {
  const [activeFilter, setactiveFilter] = useState("All");
  const [animateCard, setanimateCard] = useState([{ y: 0, opacity: 1 }]);
  const [works, setworks] = useState();
  const [filterWork, setfilterWork] = useState();

  useEffect(() => {
    const query = "";
  }, []);

  const handleWorkFilter = (item) => {
    setactiveFilter(item);
    setanimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setanimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setfilterWork(works);
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>

      <div className="app__work-filter">
        {["UI/UX", "Web App", "Mobile App", "React JS", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        <div className="app__work-item app__flex" key="no">
          <div className="app__work-img app__flex">
            <img src={images.about01} alt="work.name" />

            <motion.div
              whileInView={{ opacity: [0] }}
              whileHover={{ opacity: [0, 1] }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
                staggerChildren: 0.5,
              }}
              className="app__work-hover app__flex"
            >
              <a
                href="https://github.com/NihalPadwal"
                target="_blank"
                rel="noreferrer"
              >
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
                >
                  <AiFillEye />
                </motion.div>
              </a>
              <a
                href="https://github.com/NihalPadwal"
                target="_blank"
                rel="noreferrer"
              >
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
                >
                  <AiFillGithub />
                </motion.div>
              </a>
            </motion.div>
          </div>

          <div className="app__work-content app__flex">
            <h4 className="bold-text">yo</h4>
            <p className="p-text" style={{ marginTop: 10 }}>
              workd content
            </p>

            <div className="app__work-tag app__flex">
              <p className="p-text">tag yo</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AppWrap(Work, "work");
