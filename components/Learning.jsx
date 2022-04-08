import React from 'react'


const learn__data = [
"    What is Design Thinking, What, Why and How.",
"Where is Design Thinking used?",
"The key stages in the Design Thinking process.",
"Key methods and tools for each stage of the process.",
"How to adopt a design thinking mindset and approach in your life and work."
]


const become__data = [
"You will become skillful in identifying root cause of the problems",
"You will be able to solve the problems creatively",
"You will come up with human centric solutions",
"You will start noticing opportunities in problems",
    "You will avoid making costly mistakes",
"You will be able to understand others point of view"
]



function Learning() {
  return (
      <section className=" p-10 md:space-x-5 bg-slate-100 ">
          <div className='mb-8'>
                <h2 className="text-center text-black font-bold text-xl md:text-3xl  mb-10">What will you <span className="text-orange-600"> learn</span></h2>
                <ul className="flex justify-center items-center flex-wrap  md:space-x-5">
                    {learn__data.map((item, index) => {
                        return (
                            <li key={index} className="flex mb-5 min-h-[5rem] w-full max-w-[20rem]   rounded-2xl bg-white py-4 px-6 box-shadow text-slate-500">{item}</li>
                        )
                    })}
                </ul>

          </div>
          <div>
                <h2 className="text-center text-black font-bold text-xl w-full md:text-3xl  mb-10">What will you <span className="text-orange-600"> become</span></h2>
                <ul className="flex justify-center items-center flex-wrap md:space-x-5">
                    {become__data.map((item, index) => {
                        return (
                            <li key={index} className=" mb-5 flex min-h-[5rem] max-w-[20rem] text-base rounded-2xl bg-white py-4 px-6 box-shadow text-slate-500" >{item}</li>
                        )
                    })}
                </ul>

          </div>
    </section>
  )
}

export default Learning