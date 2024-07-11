"use client";
import { useRef, useState } from "react";
import Image from "next/image";

const AboutMe = () => {
  const emailRef = useRef();
  const textRef = useRef();
  const feedname=useRef();
  const reset = () => {
    setPreData({
      email: "",
      feedname:"",
      textfeed: ""

    });
  };

  const [preData, setPreData] = useState({
    email: "",
    feedname:"",
    textfeed: ""
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(preData)
    });

    if (response.ok) {
      alert('Message sent successfully');
      reset();
    } else {
      alert('Failed to send message');
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setPreData((preData) => ({
      ...preData,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 text-amber-950">
      <main className="p-10">
        <div className="text-2xl text-wrap leading-relaxed">
          This is my portfolio website built using Next.js 14. The details present on the webpage are the most recent updates to my skillset and education. Feel free to explore.
        </div>
        <div className="text-gray-800 pt-3 text-xl">
          For any queries, reach out to me...
        </div>
        <div className="p-4">
          <button className="bg-slate-700 hover:bg-teal-700 transition-colors duration-300 text-white font-bold py-2 px-4 rounded">
            <a
              href="https://drive.google.com/file/d/11r-hFIH6V3REcn3OBpAz0QjRds7Ncdsx/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <Image
                src="/images/resume.png"
                alt="Resume"
                width={20}
                height={20}
              />
              <span>Resume Here</span>
            </a>
          </button>
        </div>
        <span className="text-green-400 text-xl pl-4">
          Contact Me: +91 7676729896
        </span>
      </main>
      <hr className="border-gray-700"></hr>
      <div className="p-10 text-start text-lime-600">
        <form onSubmit={submitHandler} className="space-y-6">
          <h1 className="font-bold font-mono text-2xl pb-2 text-red-600">Feedback Form:</h1>
          <input
            ref={emailRef}
            type="email"
            name="email"
            placeholder="Enter Your Email Here"
            className="w-full sm:w-1/2 p-3 border-2 border-lime-300 rounded bg-gray-800 text-white"
            onChange={onChangeHandler}
            value={preData.email}
          />
          <input
            ref={feedname}
            type="text"
            name="feedname"
            placeholder="Enter Your Name Here"
            className="w-full block sm:w-1/2 p-3 border-2 border-lime-300 rounded bg-gray-800 text-white"
            onChange={onChangeHandler}
            value={preData.feedname}
          />
          <textarea
            ref={textRef}
            className="block w-full sm:w-1/2 p-3 border-2 border-gray-300 rounded bg-gray-800 text-white"
            name="textfeed"
            placeholder="Enter Your Feedback Here"
            onChange={onChangeHandler}
            value={preData.textfeed}
          ></textarea>
          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 transition-colors duration-300 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
            <button
              type="button"
              className="bg-red-600 hover:bg-red-700 transition-colors duration-300 text-white font-bold py-2 px-4 rounded"
              onClick={reset}
            >Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AboutMe;
