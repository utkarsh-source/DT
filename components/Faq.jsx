import React from 'react'
import { useState } from 'react'
import { FaAngleUp, FaAngleDown} from 'react-icons/fa'



const data = [
    {
       q :  "When will I get the access to my course?",
       a :  "Yes, as soon as you register and attend the orientation, you'll get access to the course on Talentio dashboard."
    },
    {
       q :  "Do I get any certificates?",
       a :  "Yes, the certificate is given after the completion of the course"
    },
    {
       q :  "Is there a specific device requirement?",
       a :  "You need a laptop/PC/mobile to go through the content and a good internet connection."
    },
    {
       q :  "I made the payment but didn’t receive any update.",
       a :  "Please Email us at contact@talentio.in & our awesome support team will get back to you ASAP."
    },
    {
       q :  "Are there any prerequisites to attend this workshop?",
       a :  "There is no prerequisite to attend the workshop. All of you can attend this workshop!"
    },
    {
       q :  "Is design thinking only for designers?",
       a :  "Design thinking is for everyone who intends to solve the problems they face."
    },
    {
       q :  "To what kind of problems can I apply design thinking?",
       a :  "Design thinking can be applied everywhere."
    },
    {
       q :  "Timings of the workshop?",
       a :  "Self learning videos are available on the platform, which you can watch anytime. Recorded videos of live sessions will also be uploaded on the platform after the sessions."
    },
]



function Faq() {


    const [faq, setFaq] = useState({})

    const handleFaq = (index) => {
        setFaq(prev => ({ ...prev, [index]: !prev[index] }))
    }

  return (
      <section className=" p-1 py-10 md:p-16">
          <h2 className="text-center underline underline-offset-4 text-black text-3xl mb-16 font-bold"> <span className="text-orange-600"> FAQs </span> </h2>
          <ul className="flex flex-col ">
              {data.map(({ q, a }, index) => {
                  return (
                      <div className='mb-5' key={index}>
                        <li onClick={() => handleFaq(index)} className={`${faq[index] ? "rounded-t-md" : "rounded-md" } relative flex items-center text-white justify-between font-bold bg-black p-4`}>{q} <span className='inline-block  font-bold'>{faq[index] ?<FaAngleUp  className="text-white"/> : <FaAngleDown className="text-white"/>}</span>
                          </li>
                          {faq[index] && <p className="rounded-b-md w-full blo p-4 border border-black text-slate-700 text-lg leading-relaxed">{a}</p>}
                      </div> 
                  )
              })}
          </ul>
    </section>
  )
}

export default Faq