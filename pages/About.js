import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className=" sm:flex items-center  pt-16 border sm">
      <div className=" pb-5">
        <Image
          src="/../public/assets/pp.jpeg"
          alt="/"
          width="2000"
          height="2000"
        />
      </div>
      <div className="">
        <div className="flex text-4xl space-x-4 sm:pl-20   font-bold justify-center sm:justify-start   text-[#fe0000]  items-center">
          <h1>ARIF</h1>
          <h1 className="text-black">CHAUDHARY</h1>
        </div>
        <div className="flex text-2xl pt-3 space-x-3 sm:pl-20  justify-center sm:justify-start  font-semibold  text-gray-600 items-center">
          <h1>Creative </h1>
          <h1 className=" text-gray-600">Developer</h1>
        </div>
        <div className="flex  sm:pr-32 sm:pl-10 justify-center text-justify">
          <p className="text text-justify justify-center xsm:p-10  pt-3 text-black">
            MY name is {""}
            <strong>
              <i>Muhammad Arif Raza</i>
            </strong>
            . I am Ambitious, Creative, Confident, and Committed character,
            Seeking to pursue my career in full stack developer with a dynamic
            organisation. Looking forward to expanding my knowledge and earning
            work experience. Seeks to obtain full time employment that will
            allow to utilizing technical, communication, and problem solving
            skills in a challenging environment. While also growing as a senior
            developer as technology changes. Extensive experience working in
            html, C, C++, JavaScript, ReactNative and Reactjs Competent in
            Reactjs and Javascript technologies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
