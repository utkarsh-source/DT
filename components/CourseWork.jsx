import React from 'react'


const data = [
    {
        title  :  "JOIN" , text : "Enrol and join the WhatsApp community to meet your classmates and share your learnings."
    },
    {
        title : "WATCH", text : "Watch the interactive videos to get an understanding of Design Thinking."
    },
    {
        title : "LEARN" , text: "Learn the different techniques of Design thinking by finishing the Challenges given in the course"
    },
    {
        title :  "IMPLEMENT", text : "Start implementing all you have learnt in your real life"
    },
    {
        title :  "SEE THE CHANGE", text : "Once you start implementing the techniques you can see what you aspire to be"
    },
   

]

function CourseWork() {
  return (
    <section className= "p-1 py-10 md:p-10">
            <h2 className="text-center underline underline-offset-4 text-black text-3xl mb-16 font-bold">How does this course <span className="text-orange-600"> work </span> </h2>

            <ul className="flex flex-wrap justify-center md:space-x-5 ">
                {data.map(({ title, text }, index) => {
                    return (
                        <li key={index} className="box-shadow mb-5 max-w-[20rem] bg-white rounded-md border border-slate-200">
                            <h1 className="font-bold text-slate-500 leading-relaxed p-4 py-2 bg-[#f6f6f6]">{title}</h1>
                            <p className="p-4 py-6 fontbold">{text}</p>
                        </li>
                    )
                })}
            </ul>
    </section>
  )
}

export default CourseWork