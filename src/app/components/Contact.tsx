import React from 'react'
import Links from 'next/link';
import { CiMail } from "react-icons/ci";
import { FaInstagramSquare, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";

const Contact = () => {
  return (
    <div className="container pt-24">
      <div className="grid  md:grid-cols-2 gap-10">
        <div className="space-y-8">
          <h2 className="text-5xl" data-aos="zoom-in-up">Get in touch</h2>
          <p className="text-gray-600 text-[18px] pt-2" data-aos="zoom-in-up">
            Drop me a line, give me a call, or send me a message by submitting
            the form
          </p>

          <div className="flex gap-2 items-center" data-aos="zoom-in-up">
            <CiMail size={25} /> khalidurooj397@gmail.com
          </div>

          <div className="flex gap-2 items-center" data-aos="zoom-in-up">
            <FaInstagramSquare size={25} />
            <Links href="https://www.instagram.com/code_with_urooj/">
              Instagram
            </Links>
          </div>

          <div className="flex gap-2 items-center" data-aos="zoom-in-up">
            <FaFacebookF size={25} />
            <Links href="https://web.facebook.com/people/Urooj-Khalid/pfbid02JSdgUdijLJBQzjFdPHd39KDmD1uFE1ikVGfvrzJ8hP3MNNFdpDY4Pc72UvCUyrv9l/?mibextid=ZbWKwL">
              Facebook
            </Links>
          </div>

          <div className="flex gap-2 items-center" data-aos="zoom-in-up">
            <FaLinkedin size={25} />
            <Links href="https://www.linkedin.com/in/urooj-khalid/">
              LinkedIn
            </Links>
          </div>

          
          <div className="flex gap-2 items-center" data-aos="zoom-in-up">
            <GrGithub size={25} />
            <Links href="https://github.com/Urooj-Khalid123">
              Github
            </Links>
          </div>



        </div>
        <div className="space-y-8">
          <div className="flex flex-col gap-1" data-aos="zoom-in-up">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="h-[40px] bg-transparent border border-accents"
              id="name"
            />
          </div>

          <div className="flex flex-col gap-1" data-aos="zoom-in-up">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="h-[40px] bg-transparent border border-accents"
              id="email"
            />
          </div>

          <div className="flex flex-col gap-1" data-aos="zoom-in-up">
            <label htmlFor="msg">Message</label>
            <textarea
              className="bg-transparent border border-accents"
              id="msg"
              rows={8}
            ></textarea>
          </div>

          <button className="bg-accents p-2 px-6" data-aos="zoom-in-up">Send</button>
        </div>
        
      </div>
    </div>
  );
}

export default Contact
