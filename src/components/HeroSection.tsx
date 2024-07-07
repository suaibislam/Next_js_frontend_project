import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="mt-72 flex flex-col items-center justify-center">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="">
        <h1 className=" text-7xl flex justify-center">
          Master the Earth of Music
        </h1>
        <p className=" mt-4 font-normal text-base text-neutral-300 max-w-lg mx-auto ">
           
          Aceternity is an independent web design and development studio focused
          on providing  the best web  development  experience with  blazing-fast
          websites Lorem, ipsum dolor sit amet consectetur adipisicing elit.Magni
          rem dolorem animi reprehenderit, ducimus quos nisi, magnam
        
           
        </p>

        <div className=" mt-16 flex items-center justify-center ">
          <Link href={"/course"}>
            <Button>Explore Course</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
