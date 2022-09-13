import type { NextPage } from "next";
import React from "react";
import Nav from "./../Components/Nav";
import ContactForm from "./../Components/ContactForm";
 
let Contact: NextPage = () => {
  return (
    
    <div className="min-h-full h-full w-100 bg-mainGradientMobile md:bg-mainGradient text-mainWhite">
      <div className="h-1/10 w-100">
        <Nav />
      </div>
      <div className='flex flex-col items-center h-9/10 w-100 justify-center'>
            <ContactForm/> 
      </div>
    </div>
  );
};

export default Contact;
