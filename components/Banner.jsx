import Slider from 'react-slick'
import { useRef} from 'react'
import { SETTINGS } from '../helpers/CarouselSettings';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import banner from '../assets/banner.png';
import Image from 'next/image'

function Banner() {


    const sliderRef = useRef();


  return (
      <section className="bg-black relative w-full  p-4 md:p-8 h-max md:min-h-screen ">
          <div className="flex md:space-x-10 ">
                <div className="flex-1 md:flex-[0.5] flex-col justify-center ">
                                <h2 className="text-center md:text-left text-yellow-500 text-3xl md:text-5xl font-semibold  mb-5 md:mb-10">What is Design Thinking ?</h2>
                                <p className="text-white text-justify  text-base md:text-2xl" >Design Thinking is a creative solution-based approach to solving problems. It is an iterative process in which we seek to understand the user, challenge assumptions, redefine problems, and identify alternative strategies.
                        </p>
                </div>
                <figure className="md:block hidden flex-[0.5] object-cover">
                    <Image src={banner} alt="Design Thinking" />
                </figure>         
          </div>
           <div className="mt-5 relative w-full">
              <Slider {...SETTINGS} ref={sliderRef}>
                        <div className="p-2 ">
                            <p className="border-2 border-white rounded-lg text-xl text-center p-4 min-h-[10rem]  text-white  ">
                                20 years ago if someone asked you to <strong className="text-yellow-500 px-1">GOOGLE</strong>  something, you would have thought that person was crazy because you would have never heard of that funny word.
                            </p>
                        </div>
                        <div className="p-2">
                                    <p className="border-2 border-white text-xl text-center p-4 min-h-[10rem]  text-white rounded-lg ">
                                        15 years back if anyone told you the term <strong className="text-yellow-500 px-1">WIRELESS FIDELITY</strong> or <strong className="text-yellow-500 px-1">WiFi</strong>, you would have asked, <strong className="text-yellow-500 px-1">what is that?</strong>
                            </p>
                        </div>
                        <div className="p-2">
                                    <p className="border-2 border-white  text-xl text-center p-4 min-h-[10rem]  text-white rounded-lg ">
                                        10 years back if someone mentioned MEME, we bet you even pronounced it wrong.
                            </p>
                        </div>
                        <div className="p-2 ">
                                    <p className="border-2 border-white  text-xl text-center p-4 min-h-[10rem]  text-white rounded-lg ">
                                        The very same way, the next term which soon will be used by everyone and will for sure cause a revolution is <strong className="text-yellow-500 px-1">DESIGN THINKING</strong>.
                            </p>
                  </div>
                    </Slider>
                    <div className="justify-center  w-full  flex items-center space-x-2 md:mt-2">
                        <button onClick={()=>sliderRef.current.slickPrev()} className="active:scale-95 box-shadow rounded-full p-3 bg-white ">
                            <FaAngleLeft className="font-bold text-black text-2xl"/>
                        </button>
                        <button onClick={()=>sliderRef.current.slickNext()} className="active:scale-95 box-shadow rounded-full p-3 bg-white ">
                            <FaAngleRight className="font-bold text-black text-2xl"/>
                        </button>
                    </div>
                </div>
</section>
  )
}

export default Banner