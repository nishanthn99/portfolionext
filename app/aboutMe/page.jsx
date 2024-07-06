"use client";
import { useRef, useState } from "react";
import Image from "next/image";

const AboutMe = () => {
  const emailref = new useRef();
  const textref = new useRef();
  const reset = () => {
    emailref.value = "";
    textref.value = "";
  };
  const [preData, setpreData] = useState({
    email:"",
    textfeed:""
  })
  const sumbitHandler = async(e) => {e.preventDefault();
    const response = await fetch('/api/feedback', {
      method: 'POST',
      headers:{'Content-type':'application/json'},
      body: JSON.stringify(preData)
    });

    if (response.ok) {
      alert('Message sent successfully');
      setpreData({
        email: '',
        textfeed: ''
      });
    } else {
      alert('Failed to send message ');
    }};


  const onchangeHandler=(e)=>{
    const { name, value } = e.target;
    setpreData((preData) => ({
      ...preData,
      [name]: value
    }));
  }
  return (
    <div className="min-h-screen w-full">
      <main className="p-10">
        <div className="text-2xl text-wrap">
          This is the My portfolio WebSite built using Next JS 14 Version. The
          details present in the webpage is the recent updated skillset and
          education details of me. You can go through that{" "}
        </div>
        <div className="text-gray-50 pt-3 text-xl">
          {" "}
          For any quaries reach out me...
        </div>
        <div className="p-4">
          <button className="black_btn">
            <a
              href="https://drive.google.com/file/d/1L_EsnMWUR5BDdpgI1rV421IjrBQvD8J-/view?usp=sharing"
              target="_blank"
              className="flex"
            >
              <Image
                src="/images/resume.png"
                alt="doc Image"
                width={20}
                height={16}
                className="flex"
              />
              Resume Here
            </a>
          </button>
        </div>
        <span className="text-green-400 text-xl pl-4">
          Contact Me:+91 7676729896
        </span>
      </main>
      <hr></hr>
      <div className="p-10 text-start text-lime-600">
        <form onSubmit={sumbitHandler}>
          <h1 className="font-bold font-mono text-2xl pb-2">FeedBack Form:</h1>
          <input
            ref={emailref}
            type="email"
            name="email"
            placeholder="Enter Your Email Here"
            className="w-1/3 p-2 border-2 border-lime-300"
            onChange={onchangeHandler}
          ></input>
          <textarea
            ref={textref}
            className="p-2 border-2 border-gray-300 block mt-4 w-1/2"
            typeof="String"
            name="textfeed"
            placeholder="Enter Your Feedback Here"
            onChange={onchangeHandler}
          ></textarea>
          <div className="w-1/3 py-12 flex justify-between">
            <button className="sumbit_btn hover:bg-green-500" onClick={reset}>
              Submit
            </button>
            <button className="sumbit_btn">Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AboutMe;
