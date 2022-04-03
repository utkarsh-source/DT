import React from 'react'


const data = [
    "    Understand the general approach of design thinking and its applications",
    "Learn how to identify opportunities to develop new products",
    "To create innovative solutions",
    "To add value by collaboration and co-creation.",
"To deliver outputs in a reduced amount of time",
"To inculcate observational approach to foresee new problems",
"To apply methods that will help you turn your customer needs into human-centred solutions.",
"To create outcomes based on creative thinking and analytical decision-making.",
"To gain techniques to better understand the social, emotional, and physical needs of your customers.",
"To use ideation techniques to quickly generate, develop, and test new ideas.",
"To showcase your new skills through tangible, real-world project challenges, like insights reports or prototypes of products and services"
]

function Outcome() {
  return (
      <section className="p-1 py-10 md:p-16 bg-[#f6f6f6]">
          <h2 className="text-center underline underline-offset-4 text-black font-bold text-3xl mb-16">What are the <span className="text-orange-600"> outcomes</span>  of this course</h2>
          <ul className=' flex flex-wrap justify-center '>
              {data.map((item, index) => {
                  return <li key={index}  className=" w-full md:w-[25rem] md:max-w-[25rem] p-8  bg-white text-base text-center border border-slate-200  ">{item}</li>
              })}
          </ul>
        </section>
  )
}

export default Outcome