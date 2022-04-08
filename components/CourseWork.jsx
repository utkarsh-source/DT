import React from 'react'
import implement from '../assets/IMPLEMENT.png'
import join from '../assets/JOIN.png'
import watch from '../assets/WATCH.png'
import learn from '../assets/LEARN.png'
import seeTheChange from '../assets/STC.png'
import Image from 'next/image'


const data = [
    {
        img : join, title  :  "JOIN" , text : "Enrol and join the WhatsApp community to meet your classmates and share your learnings."
    },
    {
        img :watch , title : "WATCH", text : "Watch the interactive videos to get an understanding of Design Thinking."
    },
    {
        img : learn, title : "LEARN" , text: "Learn the different techniques of Design thinking by finishing the Challenges given in the course"
    },
    {
        img : implement, title :  "IMPLEMENT", text : "Start implementing all you have learnt in your real life"
    },
    {
        img : seeTheChange, title :  "SEE THE CHANGE", text : "Once you start implementing the techniques you can see what you aspire to be"
    },
   

]

function CourseWork() {
  return (
    <section className= "rounded-4xl bg-[#430f58] p-1 py-10 md:p-10">
            <h2 className="text-center text-white text-xl md:text-3xl mb-10 font-bold">How does this course <span className="text-orange-600"> work </span> </h2>

            <ul className="p-1 flex flex-wrap justify-center md:space-x-5 ">
                {data.map(({ title, text, img}, index) => {
                    return (
                        <li key={index} className=" mb-5 w-full  md:max-w-[20rem] rounded-xl overflow-hidden border border-slate-100">
                                <h1 className="font-bold text-slate-600 leading-relaxed p-4 py-2 bg-[#facf5a] ">{title}</h1>
                            <div className="relative flex space-x-3 items-center w-full p-2">
                                    <figure className="max-w-[5rem] object-contain">
                                        <Image src={img} alt={title}/>
                                    </figure>
                                <p className="fontbold text-white  p-1 leading-relaxed ">{text}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
    </section>
  )
}

export default CourseWork