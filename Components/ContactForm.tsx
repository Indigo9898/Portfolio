import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
// import sendEmail from "../pages/api/nodemailer";

const ContactForm = () => {
  const [userEmail, setEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const sendEmailData = () =>{
    const data = {
      email: userEmail,
      message: userMessage
    };

    fetch("/api/sendgrid", {method:'post', body: JSON.stringify(data)});
  }

  return (
    <div className="h-8/10 w-8/10 bg-mainWhite rounded-3xl shadow-2xl flex flex-col justify-center items-center text-lg box-border">
      <h1 className="text-xl underline">Contact Me</h1>
      <form className="h-7/10 w-100  flex flex-col items-center">
        <input
          className=" bg-darkGrey mt-2 mb-5 rounded-2xl md:w-7/10 text-mainWhite text-center md:mt-2 md:mb-2"
          type="email"
          placeholder="Your Email"
          value={userEmail}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          className=" bg-darkGrey box-border mb-5 w-8/10 rounded-2xl md:mb-2 text-mainWhite"
          name="message"
          id="message"
          value={userMessage}
          cols={10}
          rows={10}
          placeholder="Your Message"
          onChange={(e) => setUserMessage(e.target.value)}
        ></textarea>

        <input onClick={sendEmailData} type="submit" className=" bg-darkGrey p-2  rounded-2xl" />
      </form>
    </div>
  );
};

export default ContactForm;
