import React from "react";
import { Link } from "react-scroll";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {[
        "home",
        "about",
        "work",
        "skills",
        "testimonials",
        "contact",
      ].map((item, index) => (
        <Link
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
          to={`${item}`}
          smooth={true}
          duration={500}
          spy={true}
        ></Link>
      ))}
    </div>
  );
};

export default NavigationDots;
