//import React from "react";
import { parse } from "postcss";
import Link from "next/link";
import * as fs from "node:fs";

import React, { useState, useEffect } from "react";

const Blogs = (props) => {
  // console.log(props);
  const [blogs, setblogs] = useState(props.allBlogs);
  // useEffect(() => {
  //   fetch("http://localhost:3000/api/blogs")
  //     .then((a) => {
  //       return a.json();
  //     })
  //     .then((parse) => {
  //       console.log(parse);
  //       setblogs(parse);
  //     });
  // }, []);

  return (
    <div>
      <div className="flex text-purple-800 font-bold text-3xl justify-center items-center pt-6">
        Articals
      </div>
      <hr />
      {blogs.map((blogitem) => {
        return (
          <div key={blogitem.title} className="p-5">
            <Link href={`/Blogpost/${blogitem.slug}`}>
              <h1 className=" text-red-600 sm:pl-32 sm:pr-32 md:pl-44 md:pr-44  lg:pl-52 lg:pr-52 xl:pl-60 xl:pr-60  font-bold text-2xl pb-2 cursor-pointer ">
                {blogitem.title}
              </h1>
            </Link>
            <p className=" justify-center  text-justify sm:pl-32 sm:pr-32 md:pl-44 md:pr-44  lg:pl-52 lg:pr-52 xl:pl-60 xl:pr-60">
              {blogitem.metahead.substr(0, 160)}

              <Link href={`/Blogpost/${blogitem.slug}`}>
                <button className="flex p-2 bg-black rounded-2xl capitalize font-semibold mt-2  text-white">
                  ReadMore
                </button>
              </Link>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    //console.log(item);
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    //console.log(myfile);
    allBlogs.push(JSON.parse(myfile));
  }

  return {
    props: { allBlogs }, // will be passed to the page component as props
  };
}
export default Blogs;
