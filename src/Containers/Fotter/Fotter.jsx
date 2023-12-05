import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { AppWrap } from "../../Wrapper";
import { images } from "../../Constants";
import "./Fotter.scss";
import { useForm, SubmitHandler } from "react-hook-form";

import { gql, GraphQLClient } from "graphql-request";
import axios from "axios";

const Fotter = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const mutation = gql`
      mutation MyMutation {
        createTestimonial(data: { name: "${data.name}", email: "${data.email}", message: "${data.message}" }) {
          id
        }
      }
    `;

    const graphQLClient = new GraphQLClient(process.env.REACT_APP_API, {
      headers: {
        authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
      },
    });

    const res = await graphQLClient.request(mutation);

    reset();
    setIsFormSubmitted(true);

    setLoading(false);

    setTimeout(() => {
      setIsFormSubmitted(false);
    }, 2000);
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:nihalpadwal@gmail.com" className="p-text">
            nihalpadwal@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+911234567890" className="p-text">
            +91 1234567890
          </a>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="app__footer-form app__flex"
      >
        <div className="">
          <input
            className="p-text"
            type="text"
            placeholder="Your Name"
            {...register("name", {
              required: {
                value: true,
                message: "This Field is required!",
              },
            })}
          />

          <p className={`error ${errors?.name && "active"}`}>
            {errors?.name?.message || "text"}
          </p>
        </div>
        <div className="">
          <input
            className="p-text"
            type="email"
            placeholder="Your Email"
            {...register("email", {
              required: {
                value: true,
                message: "This Field is required!",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please input correct email",
              },
            })}
          />
          <p className={`error ${errors?.email && "active"}`}>
            {errors?.email?.message || "text"}
          </p>
        </div>
        <div>
          <textarea
            className="p-text"
            placeholder="Your Message"
            {...register("message", {
              required: {
                value: true,
                message: "This Field is required!",
              },
            })}
          />
          <p className={`error ${errors?.message && "active"}`}>
            {errors?.message?.message || "text"}
          </p>
        </div>
        <button type="submit" className="p-text" disabled={loading}>
          {!loading ? "Send Message" : "Sending..."}
        </button>
      </form>

      {isFormSubmitted && (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(Fotter, "contact");
