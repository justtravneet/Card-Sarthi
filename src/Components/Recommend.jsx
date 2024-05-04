import React from 'react'
import {CircleArrowRight} from "lucide-react"
const Recommend = () => {
  return (
    <div className='px-[16px] '>
          <div className='  flex flex-col  lg:flex-row  justify-center py-2 lg:mt-[100px]'>
               <div className='py-3 flex flex-col gap-4 lg:w-[357px] lg:h-[200px] justify-between'>
                   <p className='text-xl lg:text-3xl font-bold'>Get personalized recommendations with minimal effort. </p>
                   <div className='flex items-center py-2 bg-btn w-[190px] gap-1 justify-center'>
                        <p>Take the first step</p>
                        <CircleArrowRight />
                   </div>
               </div>

               <div className='flex flex-col gap-3 py-2 lg:w-[500px] lg:h-[198px] lg:gap-5'>
                        <div className='flex items-center gap-2'>
                             <div className='bg-btn w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] flex justify-center items-center rounded-full'>
                                <p className='text-base font-bold px-2 lg:text-xl'>1</p>
                             </div>
                             <div className=' lg:w-[300px]'>
                                <p className=' lg:text-lg font-semibold'>Share a few information with us</p>
                             </div>
                        </div>
                        <div className='flex items-center gap-2'>
                             <div className='bg-btn w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] flex justify-center items-center rounded-full'>
                                <p className='text-base font-bold px-2 lg:text-xl'>2</p>
                             </div>
                             <div  className='lg:w-[400px] leading-tight'>
                                <p className=' lg:text-lg font-semibold'>Card Sarthi intelligent algorithm <br />  handles the processing.</p>
                             </div>
                        </div>
                        <div className='flex items-center gap-2'>
                             <div className='bg-btn w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] flex justify-center items-center rounded-full'>
                                <p className='text-base font-bold px-2 lg:text-xl'>3</p>
                             </div>
                             <div className='lg:w-[400px] leading-tight'>
                                <p className=' lg:text-lg font-semibold'>Receive top-notch product <br /> recommendations</p>
                             </div>
                        </div>
                        
               </div>
          </div>

          <div className='flex justify-center items-center py-4 lg:mt-[20px]'>
            <p className='text-[12px] lg:text-[15px]'><span className='texts'>*</span>Note: Product suggestions can be obtained without providing your mobile number</p>
          </div>
    </div>
  )
}

export default Recommend