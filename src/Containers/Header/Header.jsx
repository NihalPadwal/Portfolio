import React, { useEffect, useState } from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../Constants";
import { AppWrap } from "../../Wrapper";
import { request, gql } from "graphql-request";

const Header = () => {
  const [skills, setSkills] = useState();
  const [user, setUser] = useState();

  async function getSkills() {
    const document = gql`
      {
        skills(orderBy: position_DESC, first: 3) {
          name
          icon {
            height
            url
            width
          }
        }
      }
    `;

    const res = await request(process.env.REACT_APP_API, document);

    setSkills(res.skills);
  }

  async function getUser() {
    const document = gql`
      {
        userInfos {
          picture {
            url
            width
            height
          }
          number
          email
        }
      }
    `;

    const res = await request(process.env.REACT_APP_API, document);

    setUser(res.userInfos[0]);
  }

  const scaleVariant = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    getSkills();
    getUser();
  }, []);

  if (!user || !skills) {
    return <></>;
  }

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello I am</p>
              <h1 className="head-text">Nihal</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={user.picture.url} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>
      <motion.div
        variant={scaleVariant}
        whileInView={scaleVariant.whileInView}
        className="app__header-circle"
      >
        {skills &&
          skills.map((circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle.icon.url} alt="circle" />
            </div>
          ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
