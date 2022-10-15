import React from "react";
import Image from "next/image";

const skills = () => {
  return (
    <div>
      <div className="flex justify-center pt-7">
        <Image
          className=" rounded-3xl  "
          src="/../public/portfolio/skills/skills3.jpg"
          alt="/"
          width="200"
          height="200"
        />
      </div>
    </div>
  );
};

export default skills;
