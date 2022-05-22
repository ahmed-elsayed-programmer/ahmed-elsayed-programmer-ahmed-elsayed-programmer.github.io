import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./skills.scss";

const myskills = [
  { name: "python", img: images.python, bgcolor: "#6b7688" },
  { name: "redux", img: images.redux, bgcolor: "#fff" },
  { name: "react", img: images.react, bgcolor: "#46364a" },
];

const myexp = [
  {
    name: "python",
    disc: "hello in my dicreciop",
    img: images.python,
    company: "google",
  },
  {
    name: "redux",
    disc: "hello in my dicreciop",
    img: images.redux,
    company: "amzone",
  },
  {
    name: "react",
    disc: "hello in my dicreciop",
    img: images.react,
    company: "Facebook",
  },
];

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  useEffect(() => {
    setSkills(myskills);
    setExperience(myexp);
  });
  return (
    <>
      <h2 className="head-text">Skills & Experience </h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgcolor }}
              >
                <img src={skill.img} alt="" />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="app__skills-exp">
          {experience.map((work) => (
            <>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-exp-work"
                data-tip
                data-for={work.name}
              >
                <h4 className="bold-text">{work.name}</h4>
                <p className="p-text">{work.company}</p>
              </motion.div>

              <ReactTooltip
                id={work.name}
                effect="solid"
                arrowColor="#fff"
                className="skills-tooltip"
              >
                {work.disc}
              </ReactTooltip>
            </>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
