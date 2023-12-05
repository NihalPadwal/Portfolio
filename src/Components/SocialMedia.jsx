import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://twitter.com/nihalpadwal"
          rel="noreffer"
          target="_blank"
        >
          <BsTwitter />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/nihal-padwal-a878721a9/"
          target="_blank"
          rel="noreffer"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/nihal-padwal-a878721a9/"
          target="_blank"
          rel="noreffer"
        >
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
