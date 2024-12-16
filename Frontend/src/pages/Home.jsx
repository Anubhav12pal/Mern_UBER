import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[url(../public/loginbg.jpg)] bg-cover bg-center justify-center items-between h-screen w-full">
      <div className="flex flex-col justify-center items-center h-screen w-ful space-y-14">
        <img
          src="../public/logo.webp"
          alt="Empty"
          className="border-black border-solid border-4 rounded-full w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64"
        />
        <div className=" text-4xl font-bold text-white">Welcome to Rides!</div>
        <Link
          to="/login"
          className="bg-purple-600 cursor-pointer hover:bg-purple-700 transition-colors duration-300 inline-block mt-8 px-6 py-3 rounded-lg text-white text-lg font-semibold shadow-lg"
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
