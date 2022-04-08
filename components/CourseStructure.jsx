import React from 'react'
import Day0 from '../assets/Day0.jpg'
import Day1 from '../assets/Day1.jpg'
import Day2 from '../assets/Day2.jpg'
import Day3 from '../assets/Day3.jpg'
import Day4 from '../assets/Day4.jpg'
import Day5 from '../assets/Day5.jpg'
import Day6 from '../assets/Day7.jpg'
import Image from  'next/image'



const data = [
    {
        img : Day0, day : "Day 1", title  :  "Live session with the facilitator" , text : "Learn how to take this course and why is it important"
    },
    {
        img : Day2, day : "Day 2", title  :  "Fundamentals of DT" , text : "Learn how Design Thinking played a big role in human evolution and how to optimally use human potential \n Design challenge"
    },
    {
        img : Day2, day : "Day 3", title  :  "Empathy" , text : "Learn what empathy is and its overall impact. \n Case study - How American express bank saved the retail business owners in America during the 2010 recession\nEmpathy challenge"
    },
    {
        img : Day3, day : "Day 4", title  :  "Problem statement & Ideation" , text : "Learn how to find the root cause and define the problem statements that gives directions to solve the problem \n Case study - How Mobisol was able to bring a revolutionary change in one of the world’s poorest countries by defining the right problem statement \nIdeation techniques\nCase study - How Google makes immense fortune by coming up with brand new ideas\nProblem statement challenge"
    },
    {
        img : Day4, day : "Day 5", title  :  "Prototyping & Testing" , text : "Importance of prototyping and testing and how it will help in minimising the mistakes\nCase study - How Uber managed to get massive user base since the time it was launched to till date by prototyping and testing their ideas\nDigitization\nTest your idea challenge"
    },
    {
        img : Day5, day : "Day 6", title  :  "Bonus" , text : "See how Design Thinking works in action through Red bus success story\nGaming challenge\nFinal project"
    },
    {
        img : Day6, day : "Day 7", title  :  "Graduation Day" , text : ""
    },
   

]

function CourseStructure() {
  return (
      <section className="p-1  md:p-10 ">
         <h2 className="text-center  text-black text-xl md:text-3xl    mb-10 font-bold">Course Structure</h2>

          <ul className="flex flex-wrap justify-center space-x-4">
              {data.map(({ day, title, text, img}, index) => {
                  return (
                      <li key={index} className="mb-4 relative w-[20rem] flex flex-col md:box-shadow overflow-hidden rounded-lg border  border-slate-200">
                          <figure className="w-full object-contain">
                              <Image src={img} alt={title}/>
                          </figure>
                                <span className='rounded-full py-1 inline-block bg-[#430f58] text-white text-sm font-bold m-2 my-3 w-max px-4'>{day}</span>
                          <div className=" relative w-full ">
                                <h1 className="w-max text-lg text-black rounded-full font-bold  px-4">{title}</h1>
                                {text && <p className=" md:max-h-[10rem] overflow-y-auto bg-gray-100 md:bg-white text-base whitespace-pre-line text-slate-500 leading-relaxed p-4">{text}</p>}
                          </div>
                      </li>
                  )
              })}
        </ul>
    </section>
  )
}

export default CourseStructure