import React from "react";
import { Header, About, Skills, Testimonial, Work, Fotter } from "./Containers";
import { Nav } from "./Components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      {/* <Nav /> */}
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Fotter />
    </div>
  );
};

export default App;
