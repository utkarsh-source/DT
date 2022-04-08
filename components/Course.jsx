import React from 'react'
import student from '../assets/STUDENTS.png'
import freshGraduates from '../assets/FG.png'
import midLevelProfessional from '../assets/MLP.png'
import entrepreneurs from '../assets/ENTREPRENEURS.png'
import salesExecutive from '../assets/SE.png'
import startups from '../assets/STARTUPS.png'
import homeMakers from '../assets/HM.png'
import trainers from '../assets/TRAINERS.png'
import anyone from '../assets/ANYONE.png'
import Image from 'next/image'




const data = [
    {
        img : student, title  :  "Students" , text : "To work on unique projects to create innovative approaches and achieve academic excellence"
    },
    {
        img : freshGraduates, title : "Fresh graduates", text : "To secure their dream jobs."
    },
    {
        img : midLevelProfessional, title : "Mid-level professionals" , text: "To solve business/customer problems using innovative & creative methods"
    },
    {
        img : entrepreneurs, title :  "Entrepreneurs", text : "To bring in operational excellence in their organisation, optimise the costs, solve customers problems effectively and create the culture of innovation."
    },
    {
        img : salesExecutive, title :  "Sales executives", text : "To meet their sales targets and increase the profit margins."
    },
    {
       img : startups, title :  "Startups", text : "To scale up and grow their business faster."
    },
    {
       img : homeMakers, title :  "Homemakers", text: "To make their life stress free by managing all tasks effortlessly."
    },
    {
       img : trainers, title :  "Trainers" , text: "To deliver the outcomes effectively and bring the best in their students."
    },
    {
       img : anyone, title :  "Anyone" , text: "To utilise a globally acclaimed method of problem solving in their work space and optimally use their potential."
    },

]

function Course() {
  return (
      <section className="p-1 py-10 md:p-10">
            <h2 className="text-center  text-black text-xl md:text-3xl  mb-10 font-bold">Who should take this  <span className="text-orange-600"> course </span> </h2>

            <ul className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 ">
              {data.map(({ title, text, img }, index) => {
                    
                    return (
                        <li key={index} className="p-4 md:box-shadow bg-white rounded-md border border-slate-200">
                            <figure className="rounded-full bg-gray-50 p-4 object-cover max-w-[8rem]">
                                    <Image src={img } alt={title} />
                            </figure>
                            <div className="p-4">
                                <h1 className="font-bold text-xl text-orange-500 mb-2 ">{title}</h1>
                                <p className="fontbold text-slate-500 leading-relaxed ">{text}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
    </section>
  )
}

export default Course