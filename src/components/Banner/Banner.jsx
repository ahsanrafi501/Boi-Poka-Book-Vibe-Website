import React from "react";
import heroImg from '../../assets/books.jpg'

const Banner = () => {
  return (
    <div className="hero bg-base-200 py-14 sm:max-w-6xl m-auto ">
      <div className="hero-content flex-col sm:flex-row-reverse sm:ml-[120px] m-0 sm:mr-[86px]">
        <img
          src={heroImg}
          className="sm:max-w-sm rounded-lg shadow-2xl"
        />
        <div className="flex flex-col justify-center items-center sm:flex">
          <h1 className="text-[56px] font-bold text-center sm:text-left">Books to freshen up your bookshelf</h1>
          <button className="btn bg-[#23BE0A] text-[#ffff] font-bold text-[20px] lg:py-5 px-7 mt-8">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
