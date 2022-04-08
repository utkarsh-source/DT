// import React from 'react'


// const data = [
//   {
//     id: 1,
//     description:
//             "Expect the unexpected. A course which I initially thought is for my knowledge building which it definitely was, but added on to that it was also a great stress buster. The animation, the concept, and the mind behind this course makes it a pleasure to attend. Thank you Talentio for this amazing course.",
//     avatar: Avatar1,
//     name: 'KV Sanjeev',
//     designation: '@ Consultant, Statusneo private Ltd.0',
//   },
//   {
//     id: 2,
//     description:
//       'I am in a profession which requires me to find the causes for the problems arised by the new drugs. I thought design thinking is not something a person in medical profession needed but my thoughts changed after taking this course, the root cause analysis techniques I learnt in the course are helping me a lot.',
//     avatar: Avatar5,
//     name: 'Swathi P',
//     designation: '@Safety science analyst, Labcorp drug development',
//   },
//   {
//     id: 3,
//     description:
//       'The course interaction through Tex and Dian is fantastic, I heard the term design thinking but never knew what it is, the course videos are very informative and interactive and made me understand the concepts really well.',
//     avatar: Avatar3,
//     name: 'Manasa',
//     designation: '@Project engineer, Wipro',
//   },
//   {
//     id: 4,
//     description:
//       'Recently I read that "Design thinking" is one of the top most business skills that MNCs look for in candidates. Such a big concept was explained in a fun and interactive way. And I have started applying DT in my personal and professional life and I am already witnessing the difference!',
//     avatar: Avatar4,
//     name: 'Nagaraj Beereddy',
//     designation: '@Quality Analyst, Amazon',
//   },
//   {
//     id: 5,
//     description:
//       `The course was amazing and it helped me in bringing out the innovative thoughts and I can't wait to be a design thinking engineer.`,
//     avatar: Avatar2,
//     name: 'Anitha',
//     designation: '@2nd year Btech, VNITS',
//   },
//   {
//     id: 5,
//     description:
//       `The learning was amazing with the help of interactive videos, didn't know what is design thinking but this course helped me to understand what is design thinking how we can apply those techniques in real time`,
//     avatar: Avatar2,
//     name: 'Jyothirmayi',
//     designation: '@3rd year Btech',
//   },
//   {
//     id: 5,
//     description:
//       `The activities are very interesting and I understood how important is prototyping and testing when any product is made. This course made a difference in my way of thinking.`,
//     avatar: Avatar2,
//     name: 'Swetha',
//     designation: '@2nd year Btech, VNITS',
//   },
//   {
//     id: 5,
//     description:
//       `It's a very interesting workshop and the sessions are very interesting and intriguing. Thanks to Talentio for introducing me to such an fabulous course.`,
//     avatar: Avatar2,
//     name: 'Krishna Jaswitha',
//     designation: '@VNITS',
//   },
//   {
//     id: 5,
//     description:
//       `The way the concepts are conveyed is extraordinary, I learnt how to solve problems and how to build a career with perfection using Design Thinking`,
//     avatar: Avatar2,
//     name: 'Hyma Dhatri',
//     designation: '@2nd year computer science student, KIET',
//   },
//   {
//     id: 5,
//     description:
//       `As an Entrepreneur I should say this course actually opened my eyes to a new world. The interactive video paved way to gain in depth knowledge of all the concepts, and I could reflect my learning through the Gamification process! The course overall is amazing and I would recommend this anyone who wants to solve problems.`,
//     avatar: Avatar2,
//     name: 'Arghya',
//     designation: '@Artist, Arghya crafts',
//   },
// ];

// function Participents() {

//    const sliderRef = useRef()

//   return (
//       <section className="relative w-full p-1 py-10 md:p-10">
//           <h2 className="text-center text-black text-xl md:text-3xl  mb-10 font-bold">What have the <span className="text-orange-600">  past participants </span> said about the course </h2>
//       <ul className="w-full h-max relative">
//         <Slider {...SETTINGS} ref={sliderRef}>
//             {data.map((item, index) => {
//               return (
//                     <div key={index} className="p-4"> 
//                       <li  className="min-h-[18rem] flex flex-col justify-between p-6 md:box-shadow rounded-md border border-slate-200 ">
//                             <p className="pb-5 leading-relaxed text-base">{item.description}</p>
//                             <div className="flex items-center">
//                                 <figure className="rounded-full w-20 h-20 object-contain relative overflow-hidden">
//                                     <Image src={item.avatar} alt={item.name} layout="fill"/>
//                                 </figure>
//                                 <div className="ml-4">
//                                     <p className="text-lg font-semibold pb-0.5">{item.name} </p>
//                                     <p className="text-red-500">{item.designation}</p>
//                                 </div>
//                             </div>
//                       </li>
//                   </div>
//                   )
//               })}
//         </Slider>
//                     <div className="justify-center  w-full  flex items-center space-x-2 mt-2">
//                         <button onClick={()=>sliderRef.current.slickPrev()} className="active:scale-95 box-shadow rounded-full p-3 bg-white ">
//                             <FaAngleLeft className="font-bold text-black text-2xl"/>
//                         </button>
//                         <button onClick={()=>sliderRef.current.slickNext()} className="active:scale-95 box-shadow rounded-full p-3 bg-white ">
//                             <FaAngleRight className="font-bold text-black text-2xl"/>
//                         </button>
//                     </div>
//           </ul>
//     </section>
//   )
// }

// export default Participents