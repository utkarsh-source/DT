import React from 'react'


const data = [
  {
    id: 1,
    description:
            "A good idea is something that does not solve just one single problem, but rather can solve multiple problems at once",
    avatar: Avatar1,
    name: 'Shigeru Miyamoto',
    designation: '@Game designer at Nintendo',
  },
  {
    id: 2,
    description:
      'Design thinking is a human centred approach to innovation that draws from the designer’s toolkit to integrate the needs of people, the possibilities of technology, and the requirements for business success.',
    avatar: Avatar5,
    name: 'Tim Brown',
    designation: '@ Chair of IDEO',
  },
  {
    id: 3,
    description:
      'Design thinking is a mindset, not a toolkit or a series of steps',
    avatar: Avatar3,
    name: 'Arne Van Oosterom',
    designation: '@__________________',
  },
  {
    id: 4,
    description:
      'User-centred design means understanding what your users need, how they think, and how they behave and incorporating that understanding into every aspect of your process.',
    avatar: Avatar4,
    name: 'Jesse James Garrett',
    designation: '@User experience designer,',
  },
  {
    id: 5,
    description:
      'Good design begins with honesty, asks tough questions, comes from collaboration and from trusting your intuition.',
    avatar: Avatar2,
    name: 'Freeman Thomas',
    designation: '@Automobile designer',
  },
];

function Participents() {

   const sliderRef = useRef()

  return (
      <section className="relative w-full p-1 py-10 md:p-10">
          <h2 className="text-center text-black text-xl md:text-3xl  mb-10 font-bold">What have the <span className="text-orange-600">  past participants </span> said about the course </h2>
      <ul className="w-full h-max relative">
        <Slider {...SETTINGS} ref={sliderRef}>
            {data.map((item, index) => {
              return (
                    <div key={index} className="p-4"> 
                      <li  className="min-h-[18rem] flex flex-col justify-between p-6 md:box-shadow rounded-md border border-slate-200 ">
                            <p className="pb-5 leading-relaxed text-base">{item.description}</p>
                            <div className="flex items-center">
                                <figure className="rounded-full w-20 h-20 object-contain relative overflow-hidden">
                                    <Image src={item.avatar} alt={item.name} layout="fill"/>
                                </figure>
                                <div className="ml-4">
                                    <p className="text-lg font-semibold pb-0.5">{item.name} </p>
                                    <p className="text-red-500">{item.designation}</p>
                                </div>
                            </div>
                      </li>
                  </div>
                  )
              })}
        </Slider>
                    <div className="justify-center  w-full  flex items-center space-x-2 mt-2">
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