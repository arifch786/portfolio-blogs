import React, { useState } from "react";

const contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [location, setlocation] = useState("");
  const [desc, setdesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, phone, email, location, desc);
    const data = { name, phone, email, location, desc };

    fetch("http://localhost:3000/api/postcontact", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Success:", data);
        alert("thanks for contacting us");
        setphone("");
        setdesc("");
        setemail("");
        setlocation("");
        setname("");
      })
      .catch((error) => {
        console.log("error");
      });
  };
  const handleChange = (e) => {
    if (e.target.name == "phone") {
      setphone(e.target.value);
    } else if (e.target.name == "email") {
      setemail(e.target.value);
    } else if (e.target.name == "location") {
      setlocation(e.target.value);
    } else if (e.target.name == "desc") {
      setdesc(e.target.value);
    } else if (e.target.name == "name") {
      setname(e.target.value);
    }
  };

  return (
    <div className=" xsm:pl-10 xsm:pr-10  ">
      <div className="flex justify-center  text-[#fe0000] hover:text-black text-5xl xsm:text-3xl  pt-6  font-bold">
        CONTACT US !
      </div>
      <div className="flex justify-center pt-10">
        <form className="   flex-col " onSubmit={handleSubmit}>
          <div className="flex font-medium space-x-5 p-2  ">
            <label>Name :</label>
            <input
              className="border-2 border-black rounded-md p-0.5  "
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              id="name"
            />
          </div>
          <div className="flex font-medium space-x-5 p-2 ">
            <label>Email :</label>
            <input
              className="border-2 border-black rounded-md p-0.5  "
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              id="email"
            />
          </div>
          <div className="flex font-medium space-x-5 p-2 ">
            <label>Phone :</label>
            <input
              className="border-2 border-black rounded-md p-0.5  "
              type="tel"
              name="phone"
              value={phone}
              onChange={handleChange}
              id="phone"
            />
          </div>

          <div className="flex font-medium space-x-5 p-2 ">
            <label>Location :</label>
            <input
              className="border-2 border-black rounded-md p-0.5 "
              type="text"
              value={location}
              name="location"
              onChange={handleChange}
              id="phone"
            />
          </div>

          <div className="flex font-medium space-x-5  p-2">
            <label>Comments</label>
            <textarea
              className="border-2 border-black rounded-md p-0.5  "
              //value={desc}
              name="desc"
              value={desc}
              onChange={handleChange}
              placeholder="Leave a comment here"
              id="desc"
            ></textarea>
          </div>

          <div className="flex font-medium space-x-5  p-2">
            <input type="checkbox" />
            <label>Check me out</label>
          </div>
          <button
            className=" text-white p-2 border rounded-xl hover:bg-blue-800 bg-blue-700 font-medium"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default contact;
