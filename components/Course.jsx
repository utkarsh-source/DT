import React from 'react'


const data = [
    {
        title  :  "Students" , text : "To work on unique projects to create innovative approaches and achieve academic excellence"
    },
    {
        title : "Fresh graduates", text : "To secure their dream jobs."
    },
    {
        title : "Mid-level professionals" , text: "To solve business/customer problems using innovative & creative methods"
    },
    {
        title :  "Entrepreneurs", text : "To bring in operational excellence in their organisation, optimise the costs, solve customers problems effectively and create the culture of innovation."
    },
    {
        title :  "Sales executives", text : "To meet their sales targets and increase the profit margins."
    },
    {
       title :  "Startups", text : "To scale up and grow their business faster."
    },
    {
       title :  "Homemakers", text: "To make their life stress free by managing all tasks effortlessly."
    },
    {
       title :  "Trainers" , text: "To deliver the outcomes effectively and bring the best in their students."
    },
    {
       title :  "Anyone" , text: "To utilise a globally acclaimed method of problem solving in their work space and optimally use their potential."
    },

]

function Course() {
  return (
      <section className="p-1 py-10 md:p-10">
            <h2 className="text-center underline underline-offset-4 text-black text-3xl mb-10 font-bold">Who should take this  <span className="text-orange-600"> course </span> </h2>

            <ul className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8 ">
                {data.map(({ title, text }, index) => {
                    return (
                        <li key={index}  className="box-shadow bg-white rounded-md border border-slate-200">
                            <h1 className="font-bold text-slate-500 leading-relaxed p-4 py-2 bg-[#f6f6f6]">{title}</h1>
                            <p className="p-4 py-6 fontbold">{text}</p>
                        </li>
                    )
                })}
            </ul>
    </section>
  )
}

export default Course