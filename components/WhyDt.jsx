import React from 'react'
import banner1 from '../assets/banner1.png'
import Image from 'next/image'


const checkBoxData = [
"Create innovative solutions to any given problem",
"Aspire for big goals and achieve them",
"I want to solve problems",
"I want to find the root cause of the problems",
"I want to get a higher package job",
"Discover my company/employees needs and wants",
"Create a positive aura at workplace by using effective problem solving techniques",
"I want to have my own start up/ business and deliver the right products & services",
"I want to make a career as a Design thinking professional",
"To be an impactful entrepreneur",
"Develop the business to a higher value"
]

function WhyDt() {
  return (
      <section className=" p-3 py-10 md:p-10 flex flex-col md:flex-row md:space-x-10 ">
      <article className="relative mb-8 md:mb-0 flex-1 md:flex-[0.5] md:px-4 ">
        <figure className="mb-4 w-full">
          <Image src={banner1} alt="Why design thinking"/>
        </figure>
          <p className="text-black text-justify text-base  leading-relaxed">
              In this era of how technology is evolving at a very fast pace, organisations are left with no choice but to adapt to the customer needs. In the past few decades, organisations had a choice of designing their products as per their convenience. Now, with so many options, companies have no choice than to look from the customers point of view and design their products. Ultimately the success of a product or service solely depends on how well it is solving the customers problems.
              <br />
              <br />

              Design thinking helps organisations to evolve and transform themselves from being organisation centric to the customer centric approach.
              <br />
              <br />


              Design Thinking leads to more innovative solutions, it makes organisations run faster and more efficiently.
              <br />
              <br />


              With design thinking there is a solution to every problem, success rate for innovation and customer satisfaction is enhanced
              
          </p>
          </article>
          <div className="flex-1 md:flex-[0.5] md:px-4">
              <h2 className=" text-black text-xl mb-4 font-bold ">Please check the boxes if your answer is <span className="text-orange-600"> Yes</span></h2>
                <ul className="flex flex-col  space-y-3">
                  {checkBoxData.map((item, index) => {
                      return (
                          <li key={index} className="px-6 py-3 bg-[#f4f4f4] items-baseline flex text-base rounded-md  ">
                              <input className="scale-150 mr-4" color='orange' type="checkbox" defaultChecked={index === 0} /> {item} 
                          </li>
                      )
                  })}
                </ul>
          </div>
    </section>
  )
}

export default WhyDt