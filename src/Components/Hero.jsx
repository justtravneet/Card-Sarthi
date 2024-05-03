import React from 'react'
import { Gift ,CircleArrowOutUpRight } from 'lucide-react'
const Hero = () => {
  return (
    <div className='px-[16px] xl:px-[200px]'>
          <div className='mt-[30px]'>
                   <div>
                         <img className=' sm:hidden rounded-xl' src="https://s3-alpha-sig.figma.com/img/af55/0cce/48cc45883ddc6ed7d8b8ff193733316b?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IQ6Xy6idKTwwczOi2s808325H5-WLONuGrVIh4EJVwixwHuu9H~ZBHHjIqGx0DxxR6e9ctl7KDHuXxegGRwg6sSrbMie00nkynEq7kzcMS-bzwxXz~X1bSZx5vJtG~RhEQ1mgAbp~oSSy7DvW9d8PxN84o3Um6ygd8RHQSy7szD3Wwvr67F1vAPmvmmaVVW4mhYm57Ro1RasEdMYYnKb8GdaZbsR26hwz~XItCm9E7k5qYn94FNvFwh2R1wlgw8mlSj87~JLwgRCIFRH7QOZBGOqea5OPiB~KULHooou01RdUL-OtHubUPVc2bauqW0EY57kvge490Oge-gsAYZJAw__" alt="" />
                   </div>

                   <div className=' sm:hidden py-8 flex gap-4 overflow-hidden'>
                          <div className=' rounded-xl    bg-light w-[220px] h-[230px]'>
                                 <div className='flex items-center gap-1  py-2 px-2'>
                                      <Gift size={36} />
                                      <p className='text-lg  '>Reward Cards</p>
                                 </div>

                                 <div>
                                      <p className=' text-xs py-1 px-2'> Optimize Your Earnings with Our Best Rewards Credit Cards: Find credit cards that maximize your rewards on every purchase.</p>
                                 </div>

                                 <div className='py-2 px-2 flex flex-col gap-2' >
                                        <button className='p-[8px] bg-btn text-black w-[200px]'> Apply for Credit Card
                                        </button>

                                        <button className='p-[8px]  text-black w-[200px] border-black border-2 rounded-lg'> Want to uncover more
                                        </button>
                                 </div>
                          </div>

                          <div className=' rounded-xl    bg-light w-[220px] h-[230px]'>
                                 <div className='flex items-center gap-1  py-2 px-2'>
                                      <Gift size={36} />
                                      <p className='text-lg  '>Reward Cards</p>
                                 </div>

                                 <div>
                                      <p className=' text-xs py-1 px-2'> Optimize Your Earnings with Our Best Rewards Credit Cards: Find credit cards that maximize your rewards on every purchase.</p>
                                 </div>

                                 <div className='py-2 px-2 flex flex-col gap-2' >
                                        <button className='p-[8px] bg-btn text-black w-[200px]'> Apply for Credit Card
                                        </button>

                                        <button className='p-[8px]  text-black w-[200px] border-black border-2 rounded-lg'> Want to uncover more
                                        </button>
                                 </div>
                          </div>

                          <div className=' rounded-xl    bg-light w-[220px] h-[230px]'>
                                 <div className='flex items-center gap-1  py-2 px-2'>
                                      <Gift size={36} />
                                      <p className='text-lg  '>Reward Cards</p>
                                 </div>

                                 <div>
                                      <p className=' text-xs py-1 px-2'> Optimize Your Earnings with Our Best Rewards Credit Cards: Find credit cards that maximize your rewards on every purchase.</p>
                                 </div>

                                 <div className='py-2 px-2 flex flex-col gap-2' >
                                        <button className='p-[8px] bg-btn text-black w-[200px]'> Apply for Credit Card
                                        </button>

                                        <button className='p-[8px]  text-black w-[200px] border-black border-2 rounded-lg'> Want to uncover more
                                        </button>
                                 </div>
                          </div>
                   </div>
            </div>


            {/* desktop side    */}
               
                  <div className='hero ml-[80px]  xl:ml-[80px] xl:gap-[80px] flex'>
                       <div className='w-[450px] py-4 flex flex-col gap-3'>
                             <p className='text-5xl leading-tight font-semibold'>Pick The Right Credit Card</p>
                             <p>Access a variety of India's best credit cards in one central hub and find the right one for you.</p>
                             <div className='flex gap-1 items-center'>
                                 <a className='text-lg font-medium' href="http://">Know Your Credit Score</a>
                                 <CircleArrowOutUpRight />
                             </div>  
                       </div>
                           <div className=''>
                                 <img className='w-[400px] xl:w-[400px]' src="https://s3-alpha-sig.figma.com/img/63db/b12e/404bb21d75204fc2805a2de9c13de45c?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SyXjgoVKzcIT0OFWs-bdg~gCiAWdY5v~8K~fJgY697F9JW3yVq7dyAkTQ5rRj5m6dscGekzAM2y8RB6q~hcWxZ7BztQri~jnWRTT5ULenMbcxX28WvRDACf5McnD~8mE1~GeEJ8Y1unBN1mtcyIiBp4h0M5~m2R59SMKmVpiHd4LN~8Go18BjljK4SlsMiTemuaOF3b4~RMB0Y0lrfCY-MAMPV4rfjzLFZlHLHPc2xag6Tyu1Ai-PTsNzz3aT4I-6nHuKS1JIkXr5jc31tc3OZyKU~jY46~0zVwXq3gizl9UwcvBODMr~843YW6GomhWwZ93HmJPEiKqDXvWQyCS4w__" alt="" />
                            </div> 
                  </div>
    </div>
  )
}

export default Hero