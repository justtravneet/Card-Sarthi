import React from 'react'
import {Facebook, Instagram, Twitter,Dot} from "lucide-react"
const Footertwo = () => {
  return (
    <div className='footertwo mt-4 bg-grade'>
         <div>
               <div className='flex 2xl:justify-center 2xl:gap-[580px] xl:justify-center xl:gap-[580px] lg:justify-center lg:gap-[580px]  md:justify-center md:gap-[400px] sm:justify-between sm:px-[16px]'>
                     <div>
                        <img className='w-[100px] 2xl-[150px] xl:w-[200px] lg:w-[200px] bg-grade 2xl:w-[150px]' src="https://s3-alpha-sig.figma.com/img/4e3e/0c2c/a3a47af5267c137b595102e2bf245df2?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mrbfOa-w3DAvuhcCauWu913451~xL~4QLfnWtYGkGdhMqNumIGMfH6nkrjTQF0yaDWWY4Epmomn27i8-Uh9YjSvCUvLE3~fDXD6JPVa4HfExgxJlJMH4EhEubGh383~bzLi7BnFxD9xrI7XNvKwBtAg6G1G8xX7T5gTRzdoAcRQfUFXzUPlcoMBp6b5nqA4Hv6L0UCiABJizgDuy6p8jzQ2GVNqhCePe9xzBPqNhJAeixkqwU-Otq4cLQ93~1HzP5w3O86-40kKAz2WJ94~sDp3XP8gbh-Ls7q~hx0I-hssXCyI3F2eoAuBde6wZfX3oGrGMSEAAe8Jvu69VQzjfRA__" alt="" />
                     </div>
                     <div className='flex items-center gap-1'>
                        <p className='2xl:text-xl font-bold text-white'>Follow Us On</p>
                        <Instagram size={34} color="#c9bbbb" strokeWidth={1.15} />
                        <Twitter size={34} color="#c9bbbb" strokeWidth={1.25} />
                        <Facebook size={34} color="#c9bbbb" strokeWidth={1.25} />
                     </div>
               </div>

            <div className='flex justify-center '>

               <div className='py-2 gap-2 flex-col border-b-2 border-white 2xl:w-[950px] 2xl:h-[150px] xl:w-[950px] xl:h-[150px] lg:w-[950px] lg:h-[150px]  md:w-[680px] md:h-[150px]  sm:w-[600px] sm:h-[150px]  flex justify-center'>
                        <p className='text-white text-xl'>Disclaimer:</p>
                        <p className='text-white text-sm'>The information you see here comes from trusted sources like official websites and news outlets. While we do our best to make sure everything is accurate, we can't promise it's always perfect. It's really important for you to carefully read all the terms and conditions for any products or services mentioned here or suggested by our advisors. If anything doesn't seem right, it's best to double-check. We're not responsible for any problems or losses that might happen if you rely only on what you see here.</p>
               </div>
            </div>

            <div className='flex justify-center mt-4 '>
                  <div className='py-2 gap-2 flex-col border-b-2 border-white 2xl:w-[950px] 2xl:h-[200px] xl:w-[950px] xl:h-[200px] lg:w-[950px] lg:h-[200px]  md:w-[680px] md:h-[200px]  sm:w-[600px] sm:h-[200px]  flex justify-center'>
                       
                       <div className='flex justify-between'>
                            <div className='text-white flex flex-col gap-1'>
                                  <div>
                                    <p>Address:</p>
                                  </div>
                                  <div>
                                     <p className=' text-wrap text-xs font-light'>House No. 20, 17a, Sector 17C, <br /> Block C, Sukhrali, Sector 17,<br /> Gurugram, Haryana 122001</p>
                                  </div>
                                  <div>
                                       <div className='flex gap-1 items-center'>
                                        <p>Phone :</p>
                                        <p className='text-sm font-light'>+91 93198 78777</p>
                                       </div>
                                  </div>

                                  <div>
                                  <div className='flex gap-1 items-center'>
                                        <p>E-mail:</p>
                                        <p className='text-sm font-light'>
                                         info@cardsarthi.com
                                        </p>
                                       </div>
                                  </div>
                            </div>

                            <div className='text-white flex flex-col gap-1'>
                                  <div>
                                    <p>Products</p>
                                  </div>
                                 
                                 <div>
                                    <ul>
                                        <li className='flex items-center'>
                                            <div><Dot size={28} color="#ffffff" strokeWidth={1.25} /></div>
                                            <div><p className='text-xs'>Credit Cards</p></div>
                                        </li>
                                        <li className='flex items-center'>
                                            <div><Dot size={28} color="#ffffff" strokeWidth={1.25} /></div>
                                            <div><p className='text-xs'>Cashback Cards</p></div>
                                        </li>
                                        <li className='flex items-center'>
                                            <div><Dot size={28} color="#ffffff" strokeWidth={1.25} /></div>
                                            <div><p className='text-xs'>Reward Cards</p></div>
                                        </li>
                                        <li className='flex items-center'>
                                            <div><Dot size={28} color="#ffffff" strokeWidth={1.25} /></div>
                                            <div><p className='text-xs'>No annual fee Cards</p></div>
                                        </li>
                                        <li className='flex items-center'>
                                            <div><Dot size={28} color="#ffffff" strokeWidth={1.25} /></div>
                                            <div><p className='text-xs'>Travel Cards</p></div>
                                        </li>
                                        <li className='flex items-center'>
                                            <div><Dot size={28} color="#ffffff" strokeWidth={1.25} /></div>
                                            <div><p className='text-xs'>Shopping Cards</p></div>
                                        </li>
                                    </ul>
                                 </div>
                            </div>

                            <div className='text-white flex flex-col gap-1'>
                                  <div>
                                    <p>Company</p>
                                  </div>
                                 
                                 <div>
                                    <ul>
                                        <li className='flex items-center'>
                                            <div><Dot size={28} color="#ffffff" strokeWidth={1.25} /></div>
                                            <div><p className='text-xs'>About Card Sarthi</p></div>
                                        </li>
                                        <li className='flex items-center'>
                                            <div><Dot size={28} color="#ffffff" strokeWidth={1.25} /></div>
                                            <div><p className='text-xs'>Contact Us</p></div>
                                        </li>
                                        <li className='flex items-center'>
                                            <div><Dot size={28} color="#ffffff" strokeWidth={1.25} /></div>
                                            <div><p className='text-xs'>Privacy & Policy</p></div>
                                        </li>
                                        <li className='flex items-center'>
                                            <div><Dot size={28} color="#ffffff" strokeWidth={1.25} /></div>
                                            <div><p className='text-xs'>Terms & Use</p></div>
                                        </li>
                                        <li className='flex items-center'>
                                            <div><Dot size={28} color="#ffffff" strokeWidth={1.25} /></div>
                                            <div><p className='text-xs'>Partners</p></div>
                                        </li>
                                        
                                    </ul>
                                 </div>
                            </div>

                            <div className='text-white flex flex-col gap-1'>
                                  <div>
                                    <p>Resources</p>
                                  </div>
                                 
                                 <div>
                                    <ul>
                                        <li className='flex items-center'>
                                            <div><Dot size={28} color="#ffffff" strokeWidth={1.25} /></div>
                                            <div><p className='text-xs'>Check eligibility</p></div>
                                        </li>
                                        <li className='flex items-center'>
                                            <div><Dot size={28} color="#ffffff" strokeWidth={1.25} /></div>
                                            <div><p className='text-xs'>Blogs</p></div>
                                        </li>
                                        <li className='flex items-center'>
                                            <div><Dot size={28} color="#ffffff" strokeWidth={1.25} /></div>
                                            <div><p className='text-xs'>Videos</p></div>
                                        </li>
                                        <li className='flex items-center'>
                                            <div><Dot size={28} color="#ffffff" strokeWidth={1.25} /></div>
                                            <div><p className='text-xs'>Credit Cards News</p></div>
                                        </li>
                                    </ul>
                                 </div>
                            </div>


                            <div className='text-white flex flex-col gap-1'>
                                  <div>
                                    <p>Tools</p>
                                  </div>
                                 
                                 <div>
                                    <ul>
                                        <li className='flex items-center'>
                                            <div><Dot size={28} color="#ffffff" strokeWidth={1.25} /></div>
                                            <div><p className='text-xs'>EMI Calculator</p></div>
                                        </li>
                                        <li className='flex items-center'>
                                            <div><Dot size={28} color="#ffffff" strokeWidth={1.25} /></div>
                                            <div><p className='text-xs'>Credit Score</p></div>
                                        </li>
                                       
                                    </ul>
                                 </div>
                            </div>

                            


                            
                               
                         
                       </div>
                         
                  </div>
            </div>

             
            <div className='flex justify-center mt-4 '>
                 <div className='py-2 gap-2 flex-col border-b-2 border-white 2xl:w-[950px] 2xl:h-[50px] xl:w-[950px] xl:h-[50px] lg:w-[950px] lg:h-[50px]  md:w-[680px] md:h-[50px]  sm:w-[600px] sm:h-[50px]  flex justify-center'>

                 
                     <div className='text-white flex gap-[120px]'>
                       <p className='text-xs'>Copyright © 2024 Card Sarthi Inc. All rights reserved.</p>
                       <p className='text-xs'>  <a href="http://"> Privacy Policy  | </a> <a href="http://"> Terms of Use  |</a> <a href="http://">Sales Policy  |</a>  <a href="http://">Legal  |</a>  <a href="http://">Site Map</a>  </p>
                    </div>

                </div>
        </div> 

         </div>
    </div>
  )
}

export default Footertwo