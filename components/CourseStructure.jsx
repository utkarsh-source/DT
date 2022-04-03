import React from 'react'



const data = [
    {
        day : "Day 1", title  :  "Live session with the facilitator" , text : "Learn how to take this course and why is it important"
    },
    {
        day : "Day 2", title  :  "Fundamentals of DT" , text : "Learn how Design Thinking played a big role in human evolution and how to optimally use human potential \n Design challenge"
    },
    {
        day : "Day 3", title  :  "Empathy" , text : "Learn what empathy is and its overall impact. \n Case study - How American express bank saved the retail business owners in America during the 2010 recession\nEmpathy challenge"
    },
    {
        day : "Day 4", title  :  "Problem statement & Ideation" , text : "Learn how to find the root cause and define the problem statements that gives directions to solve the problem \n Case study - How Mobisol was able to bring a revolutionary change in one of the world’s poorest countries by defining the right problem statement \nIdeation techniques\nCase study - How Google makes immense fortune by coming up with brand new ideas\nProblem statement challenge"
    },
    {
        day : "Day 5", title  :  "Prototyping & Testing" , text : "Importance of prototyping and testing and how it will help in minimising the mistakes\nCase study - How Uber managed to get massive user base since the time it was launched to till date by prototyping and testing their ideas\nDigitization\nTest your idea challenge"
    },
    {
        day : "Day 6", title  :  "Bonus" , text : "See how Design Thinking works in action through Red bus success story\nGaming challenge\nFinal project"
    },
    {
        day : "Day 7", title  :  "Graduation Day" , text : ""
    },
   

]

function CourseStructure() {
  return (
      <section className="p-1 py-10 md:p-10 ">
         <h2 className="text-center underline underline-offset-4 text-black text-3xl   mb-16 font-bold">Course Structure</h2>

          <ul className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
              {data.map(({ day, title, text }, index) => {
                  return (
                      <li key={index}  className="box-shadow relative overflow-hidden rounded-lg border border-slate-200">
                          <h1 className="bg-blue-900 text-white font-bold p-4 py-2">{day}- {title}</h1>
                          {text && <p className="bg-[#fdfdfd] text-base h-full whitespace-pre-line leading-relaxed p-4">{text}</p>}
                      </li>
                  )
              })}
        </ul>
    </section>
  )
}

export default CourseStructure