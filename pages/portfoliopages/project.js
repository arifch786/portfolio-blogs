import React from "react";
import Image from "next/image";

const project = () => {
  return (
    <div>
      <div className="flex justify-center pt-7">
        <Image
          className=" rounded-3xl  "
          src="/../public/portfolio/projects/proj3.jpg"
          alt="/"
          width="350"
          height="250"
        />
      </div>

      <div className=" p-10 sm:pl-36 sm:pr-36 pt-8 ">
        <h1 className=" font-extrabold text-3xl pb-4">PROJECTS</h1>
        <h5 className=" font-bold text-base">1. final year project</h5>
        <p>3/2022 - 2/2023</p>
        <p>
          <b>description: </b>
          The goal of this project is to create and construct an Androidbased
          application for crime reporting that will be developed using Android
          platform. Developing a Geo location based mobile application for
          citizens and police officers for crime reporting, navigation and live
          tracking. This application will help citizens to report the crime and
          also helping police to reach the crime location on time and Police
          will also be able to see the location of the reported crime
        </p>
        <p className="pb-7">
          <b>tools: </b> android studio, java, firebase, Google APIs
        </p>

        <h5 className=" font-bold text-base">2. Blog website:</h5>
        <p>semester project</p>
        <p>
          <b>description: </b>
          Developed User-Interface using next js and tailwind css and create
          APIs using react js. Creating nav-bar .and add multiple pages Create
          APIs for extracting blogs from internal storage
        </p>
        <p className="pb-7">
          <b>tools: </b> html, nextjs, node, react, react hooks
        </p>

        <h5 className=" font-bold text-base">3. Library managementsystem:</h5>
        <p>semester project</p>
        <p>
          <b>description: </b>
          Library management system is semester based project. In this project
          we use simple C++ language to create this project. We create
          authentication add user delete user ,add books, delete books available
          slots. We also add two interface first for user and second for admin
        </p>
        <p className="pb-7">
          <b>tools: </b> C++, dev c++
        </p>

        <h5 className=" font-bold text-base">4. Notes taking website:</h5>
        <p>semester project</p>
        <p>
          <b>description: </b>
          Note taking website is pure JavaScript website. In this project we
          edit search, delete notes and we also filter notes.
        </p>
        <p className="pb-7">
          <b>tools: </b> C++, dev c++
        </p>
      </div>
    </div>
  );
};

export default project;
