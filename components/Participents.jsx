import React, {useRef} from 'react'
import Sanjeev from "../assets/Sanjeev.jpeg"
import Anitha from "../assets/Anitha.png"
import Arghya from "../assets/Arghya.jpeg"
import Hyma from "../assets/Hyma.jpeg"
import Jyothirmay from "../assets/Jyothirmay.jpeg"
import Krishna from "../assets/Krishna.png"
import Manasa from "../assets/Manasa.jpeg"
import Nagraj from "../assets/Nagraj.jpeg"
import Swathi from "../assets/Swathi.jpeg"
import Swetha from "../assets/Swetha.png"
import Slider from 'react-slick'
import Image from 'next/image'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { SETTINGS } from '../helpers/CarouselSettings'




const data = [
  {
    id: 1,
    description:
            "Expect the unexpected. A course which I initially thought is for my knowledge building which it definitely was, but added on to that it was also a great stress buster. The animation, the concept, and the mind behind this course makes it a pleasure to attend. Thank you Talentio for this amazing course.",
    avatar: Sanjeev,
    name: 'KV Sanjeev',
    designation: '@Consultant, Statusneo private Ltd',
  },
  {
    id: 2,
    description:
      'I am in a profession which requires me to find the causes for the problems arised by the new drugs. I thought design thinking is not something a person in medical profession needed but my thoughts changed after taking this course, the root cause analysis techniques I learnt in the course are helping me a lot.',
    avatar: Swathi,
    name: 'Swathi P',
    designation: '@Safety science analyst, Labcorp drug development',
  },
  {
    id: 3,
    description:
      'The course interaction through Tex and Dian is fantastic, I heard the term design thinking but never knew what it is, the course videos are very informative and interactive and made me understand the concepts really well.',
    avatar: Manasa,
    name: 'Manasa',
    designation: '@Project engineer, Wipro',
  },
  {
    id: 4,
    description:
      'Recently I read that "Design thinking" is one of the top most business skills that MNCs look for in candidates. Such a big concept was explained in a fun and interactive way. And I have started applying DT in my personal and professional life and I am already witnessing the difference!',
    avatar: Nagraj,
    name: 'Nagaraj Beereddy',
    designation: '@Quality Analyst, Amazon',
  },
  {
    id: 5,
    description:
      `The course was amazing and it helped me in bringing out the innovative thoughts and I can't wait to be a design thinking engineer.`,
    avatar: Anitha,
    name: 'Anitha',
    designation: '@2nd year Btech, VNITS',
  },
  {
    id: 5,
    description:
      `The learning was amazing with the help of interactive videos, didn't know what is design thinking but this course helped me to understand what is design thinking how we can apply those techniques in real time`,
    avatar: Jyothirmay,
    name: 'Jyothirmayi',
    designation: '@3rd year Btech',
  },
  {
    id: 5,
    description:
      `The activities are very interesting and I understood how important is prototyping and testing when any product is made. This course made a difference in my way of thinking.`,
    avatar: Swetha,
    name: 'Swetha',
    designation: '@2nd year Btech, VNITS',
  },
  {
    id: 5,
    description:
      `It's a very interesting workshop and the sessions are very interesting and intriguing. Thanks to Talentio for introducing me to such an fabulous course.`,
    avatar: Krishna,
    name: 'Krishna Jaswitha',
    designation: '@VNITS',
  },
  {
    id: 5,
    description:
      `The way the concepts are conveyed is extraordinary, I learnt how to solve problems and how to build a career with perfection using Design Thinking`,
    avatar: Hyma,
    name: 'Hyma Dhatri',
    designation: '@2nd year computer science student, KIET',
  },
  {
    id: 5,
    description:
      `As an Entrepreneur I should say this course actually opened my eyes to a new world. The interactive video paved way to gain in depth knowledge of all the concepts, and I could reflect my learning through the Gamification process! The course overall is amazing and I would recommend this anyone who wants to solve problems.`,
    avatar: Arghya,
    name: 'Arghya',
    designation: '@Artist, Arghya crafts',
  },
];

function Participents() {

   const sliderRef = useRef()

  return (
      <section className="relative w-full p-1 py-10 md:p-10">
          <h2 className="text-center text-black text-xl md:text-3xl  mb-10 font-bold">What have the <span className="text-orange-600">  past participants </span> said about the course </h2>
          <ul className="relative h-max">
        <Slider {...SETTINGS} ref={sliderRef}>
            {data.map((item, index) => {
              return (
                    <div key={index} className=" relative p-3"> 
                      <li className="  min-h-[35rem] p-4 rounded-md overflow-hidden relative flex flex-col items-center  md:box-shadow border border-slate-200 ">
                            <figure className="mb-6 rounded-full h-[15rem] w-[15rem]  relative overflow-hidden">
                                    <Image src={item.avatar} alt={item.name} layout="responsive"/>
                          </figure>
                            <p className="text-lg font-semibold">{item.name} </p>
                            <p className=" text-orange-600">{item.designation}</p>
                              <p className="pt-5 text-center leading-relaxed text-slate-600  text-base">{item.description}</p>
                      <div className="absolute -z-10 opacity-90 top-0 left-0 bg-[url(../assets/pattern.svg)]  w-full h-[50%]"></div>
                      </li>

                  </div>
                  )
              })}
        </Slider>
                    <div className="mt-4 justify-center  w-full  flex items-center space-x-2 ">
                        <button onClick={()=>sliderRef.current.slickPrev()} className="active:scale-95 box-shadow rounded-full p-3 bg-white ">
                            <FaAngleLeft className="font-bold text-black text-2xl"/>
                        </button>
                        <button onClick={()=>sliderRef.current.slickNext()} className="active:scale-95 box-shadow rounded-full p-3 bg-white ">
                            <FaAngleRight className="font-bold text-black text-2xl"/>
                        </button>
                    </div>
          </ul>
    </section>
  )
}

export default Participents