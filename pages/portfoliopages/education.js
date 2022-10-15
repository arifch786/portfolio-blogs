import React from "react";
import Image from "next/image";

const education = () => {
  return (
    <div>
      <div className="flex justify-center pt-7">
        <Image
          className=" rounded-3xl  "
          src="/../public/portfolio/skills/edu1.jpg"
          alt="/"
          width="350"
          height="250"
        />
      </div>
      <div className=" p-10 sm:pl-36 sm:pr-36 pt-8 ">
        <h1 className=" font-extrabold text-3xl pb-4">EDUCATION</h1>
        <h5 className=" font-bold text-base">
          ICS: Hamza Army Public School and College System
        </h5>
        <p>4/2016 - 5/2018</p>
        <p className="pb-4">Majors includes the computer science</p>
        <h5 className=" font-bold text-base">
          Bachelor in Computer Science: Islamabad — Shaheed Zulfikar Ali Bhutto
          Institute of Science and Technology
        </h5>
        <p>1/2019 - 2/2023</p>
        <p className="pb-4">Majors includes the computer science</p>
      </div>
    </div>
  );
};

export default education;
