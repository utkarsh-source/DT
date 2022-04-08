import React from 'react'
import iv from '../assets/IV.png'
import pl from '../assets/PL.png'
import live from '../assets/LIVE.png'
import dc from '../assets/DC.png'
import dp from '../assets/DP.png'
import access from '../assets/ACCESS.png'
import gc from '../assets/GC.png'
import Image from 'next/image'


const data = [
    {img : iv, text : " 30+ Interactive videos"},
    {img : pl, text : " Peer learning and Feedback"},
    {img : live, text : " Live doubt clarification webinars with the facilitator"},
    {img : dc, text : " Daily challenges"},
    {img : dp, text : " Dedicated program support"},
    {img :  access , text : " Access to real time case studies"},
    {img : gc, text : " Gamified challenge"},
]

function CourseHighlights() {
  return (
      <section className=" p-1 py-10 md:p-10">
          
          <h2 className="text-center underline underline-offset-4 text-orange-600 text-xl md:text-3xl  mb-12 font-bold">Course Highlights </h2>
          <ul className="flex justify-center flex-wrap space-x-2 md:space-x-5">
              {data.map(({img, text}, index) => {
                  return <li className=' flex flex-col items-center justify-center max-w-[12rem] min-w-[12rem] min-h-[12rem] mb-2 md:mb-5 w-full md:w-max bg-white text-center border border-slate-200 text-lg  leading-relaxed p-2 rounded-xl text-slate-500' key={index}>
                     <figure className="max-w-[5rem] object-contain ">
                        <Image src={img} alt="Highlights"/>
                      </figure>
                      <span>
                        {text}
                      </span>
                  </li>
              })}
          </ul>
    </section>
  )
}

export default CourseHighlights