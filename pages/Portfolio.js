import React from "react";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("arif.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "arif.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <center>
        <div className=" flex-col bg-stone-300 pt-8">
          <div className=" md:grid grid-cols-3 gap-5  ml-10 mr-10">
            <div className="p-5 m-4  bg-white rounded-2xl">
              <Image
                className=" rounded-3xl  "
                src="/../public/portfolio/skills/skills2.jpg"
                alt="/"
                width="2000"
                height="2000"
              />

              <h3 className=" justify-start text-base font-sans font-bold">
                EDUCATION
              </h3>
              <ol>
                <li> ICS 2016-2018</li>
                <li>BSCS 2019-2023</li>
                <p>
                  <br />
                  <br />
                  <br />
                </p>
              </ol>

              <Link href="portfoliopages/education">
                <button className=" font-semibold font-serif mt-7 capitalize  bg-purple-500  text-white p-4 pl-5 pr-5 rounded-2xl ">
                  readmore
                </button>
              </Link>
            </div>
            <div>
              <div className=" p-5 m-4 bg-white rounded-2xl">
                <Image
                  className=" rounded-3xl   "
                  src="/../public/portfolio/projects/proj1.jpg"
                  alt="/"
                  width="2000"
                  height="2000"
                />

                <h1 className=" text-base font-sans  font-bold">PROJECTS</h1>
                <ol>
                  <li>Tactical Police Reporting System</li>
                  <li>Blog website</li>
                  <li>Library managementsystem </li>
                  <li>Notes taking website </li>
                  <p>
                    <br />
                  </p>
                </ol>

                <Link href="portfoliopages/project">
                  <button className=" bg-pink-600 font-semibold font-serif capitalize   text-white p-4 mt-7 pl-5 pr-5  rounded-2xl ">
                    readmore
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <div className=" p-5 m-4 bg-white rounded-2xl">
                <Image
                  className=" rounded-3xl  "
                  src="/../public/portfolio/projects/proj2.jpg"
                  alt="/"
                  width="2000"
                  height="2000"
                />

                <h3 className=" justify-start text-base font-sans  font-bold">
                  SKILLS
                </h3>
                <ol>
                  <li>web development</li>
                  <li>wordpress</li>
                  <li>frontend developer</li>
                  <li>group task managment</li>
                  <li>brain storming</li>
                </ol>

                <Link href="portfoliopages/skills">
                  <button className=" bg-violet-700  capitalize text-white p-4 font-semibold font-serif mt-7  pl-5 pr-5 rounded-2xl ">
                    readmore
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <button
            className=" bg-gradient-to-r from-purple-500 to-pink-600  hover:from-violet-700 hover:to-fuchsia-700 font-semibold font-serif  mt-16 mb-6  text-white p-4 rounded-2xl "
            onClick={onButtonClick}
          >
            Download Resume
          </button>
        </div>
      </center>
    </>
  );
};

export default Portfolio;
