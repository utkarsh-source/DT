import React from 'react'


const data = [
    " 30+ Interactive videos",
" Peer learning and Feedback",
" Live doubt clarification webinars with the facilitator",
" Daily challenges",
" Dedicated program support",
" Access to real time case studies",
" Collaborative learning",
" Gamified challenge"

]

function CourseHighlights() {
  return (
      <section className="p-1 py-10 md:p-10">
          <h2 className="text-center underline underline-offset-4 text-black text-3xl mb-16 font-bold">Course Highlights </h2>
          <ul className="flex justify-center flex-wrap md:space-x-5">
              {data.map((item, index) => {
                  return <li className='mb-5 w-full bg-orange-800 text-lg font-bold leading-relaxed p-5 rounded-md text-white' key={index}>{item}</li>
              })}
          </ul>
    </section>
  )
}

export default CourseHighlights