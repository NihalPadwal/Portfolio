import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { AppWrap } from "../../Wrapper";
import { images } from "../../Constants";
import "./Testimonial.scss";

const Testimonial = () => {
  return (
    <>
      <div className="app__testimonial">
        <div className="app__testimonial-item app__flex">
          <img src={images.redux} alt="redux" />
          <div className="app__testimonial-content">
            <p className="p-text">feedback</p>
            <div>
              <h4 className="bold-text">name</h4>
              <h5 className="p-text">company name</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="app__testimonial-btns app__flex">
        <div className="app__flex">
          <HiChevronLeft />
        </div>

        <div className="app__flex">
          <HiChevronRight />
        </div>
      </div>
    </>
  );
};

export default AppWrap(Testimonial, "testimonials");
