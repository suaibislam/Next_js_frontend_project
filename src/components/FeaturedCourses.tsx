"use client"
import Link from "next/link";
import React from "react";
import courseData from "../data/music_courses.json"
import { BackgroundGradient } from "./ui/background-gradient";

interface Course{      
        id: number,
        title: string,
        slug: string,
        description:string,
         price:number,
         Instructor: string,
         isFeatured:boolean
          
}

function FeaturedCourses(){
        const featuredCourses =courseData.courses.filter((course:Course) => course.isFeatured)
          return (
    <div>
      <div className="mt-10 flex justify-center">
        <p>Featured Course </p>
      </div>
      <div className=" text-3xl mt-2 flex justify-center">
        <h1>Learn With The Best</h1>
      </div>
      <div className="mt-10 grid items-center justify-center gap-5">
      
        {featuredCourses.map((course:Course)=>(
          <div key={course.id} >

              <BackgroundGradient> 
              <div className="  max-w-sm  bg-black rounded-2xl text-center">
                  <p>{course.title}</p>
                  <p>{course.description}</p>
                  <Link href={`/course/${course.slug}`}>
                  Learn More
                  </Link>
              </div>
              </BackgroundGradient>

              </div>
         
        ))}
      
      </div>

      <div className="mt-10 flex justify-center">
        <Link href={"/allcourse"}>Veiw All Course</Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;
