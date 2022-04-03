
function Banner() {
  return (
    <section className="p-1 py-5 relative h-max md:min-h-screen bg-blue-900">
            <div className="w-full relative md:px-10" >
                    <div className="mb-8 md:mb-16">
                            <h2 className="text-center underline underline-offset-4 text-white text-lg md:text-3xl lg:text-5xl lg:leading-normal mb-8 font-bold font-heading animated">What is  <span className="text-orange-600"> Design</span> Thinking</h2>
                             <p className="text-white text-center text-base md:text-3xl  leading-relaxed" ><strong className="text-orange-500">Design</strong> Thinking is a creative solution-based approach to solving problems. It is an iterative process in which we seek to understand the user, challenge assumptions, redefine problems, and identify alternative strategies.
                            </p>
              </div>
              <div>

                <p className=" grid gap-2  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:p-4"> 
                        <span className=" bg-white text-base text-center  text-black rounded-sm shadow border border-slate-200 p-4">
                            20 years ago if someone asked you to <span className="text-orange-500">GOOGLE</span>  something, you would have thought that person was crazy because you would have never heard of that funny word.
                        </span>
                        <span className="bg-white text-base text-center  text-black rounded-sm shadow border border-slate-200 p-4">
                            15 years back if anyone told you the term <span className="text-orange-500">WIRELESS FIDELITY</span> or <span className="text-orange-500">WiFi</span>, you would have asked, <span className="text-orange-500">what is that?</span>
                        </span>
                        <span className="bg-white text-base text-center  text-black rounded-sm shadow border border-slate-200 p-4">
                            10 years back if someone mentioned MEME, we bet you even pronounced it wrong.
                        </span>
                        <span className="bg-white text-base text-center  text-black rounded-sm shadow border border-slate-200 p-4">
                            The very same way, the next term which soon will be used by everyone and will for sure cause a revolution is <span className="text-orange-500">DESIGN THINKING</span>.
                        </span>
                    </p>
              </div>
                    </div>
            </section>
  )
}

export default Banner