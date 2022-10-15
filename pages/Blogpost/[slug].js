//import React from "react";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import * as fs from "node:fs";

const Slug = (props) => {
  function createMarkup(c) {
    return { __html: c };
  }
  const [blog, setblog] = useState(props.myBlog);

  return (
    <div className=" ">
      <div className="flex justify-center font-extrabold capitalize p-6  text-justify xsm:pl-20 xsm:pr-20   sm:text-sm sm:pl-20 sm:pr-20 sm:font-bold   md:text-base md:pl-20 md:pr-20 md:font-bold  lg:text-lg lg:pl-44 lg:pr-44   xl:text-lg xl:pl-60 xl:pr-60 xl:font-bold ">
        {blog && blog.title}
      </div>
      <hr />
      <div className="flex justify-center text-4xl text-justify xsm:text-sm xsm:pl-20 xsm:pr-20 sm:text-sm sm:pl-44 sm:pr-44   md:text-base md:pl-60 md:pr-60 lg:text-lg lg:pl-80 lg:pr-80 xl:text-lg xl:pl-96 xl:pr-96">
        {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)} />}
      </div>
      <hr />
      <div className="flex justify-start pl-20 font-semibold  pr-32 text-justify p-5">
        {blog && blog.author}
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "how-to-learn-javascript" } },
      { params: { slug: "how-to-learn-nextjs" } },
      { params: { slug: "how-to-learn-reactjs" } },
      { params: { slug: "how-to-learn-nodejs" } },
      { params: { slug: "how-to-learn-C++" } },
      { params: { slug: "how-to-learn-coding" } },
      { params: { slug: "how-to-learn-CSS" } },
      { params: { slug: "how-to-learn-programing" } },
      { params: { slug: "how-to-learn-tailwind" } },
      { params: { slug: "how-to-learn-typescript" } },
      { params: { slug: "how-to-learn-englishss" } },
      { params: { slug: "how-to-learn-nodejs" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  //console.log(params);
  const { slug } = context.params;
  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");

  return {
    props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
  };
}
export default Slug;
