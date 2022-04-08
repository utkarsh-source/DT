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
          <div className="text-center flex flex-col space-y-3">
                <h2 className='text-3xl  text-purple-500'>Talentio</h2>
                <p className='font-bold text-white text-2xl '>Become a problem solver in 5 days with Design thinking!</p>
              <p className='text-white'>(The most sought after skill in the world right now)</p>
            </div>
          <div className="flex md:space-x-10 ">
                <figure className="md:block hidden flex-[0.5] object-cover">
                    <Image src={banner} alt="Design Thinking" />
                </figure>         
                <div className="flex items-center md:flex-[0.5]">
                        <p className="px-5 h-max  text-white text-center  text-base md:text-xl" >Design Thinking is a creative solution-based approach to solving problems. It is an iterative process in which we seek to understand the user, challenge assumptions, redefine problems, and identify alternative strategies.

                        </p>
                </div>
          </div>
           <div className="relative w-full">
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