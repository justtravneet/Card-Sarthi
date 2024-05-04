import React from 'react'
import Filter from './Filter'
import {CreditCard ,Gift ,ReceiptText,Banknote,ShoppingCart ,Luggage ,IndianRupee ,Sofa ,Utensils ,Clapperboard} from "lucide-react"
const Categories = () => {
  return (
   
    <>
         <div>
             <div className='  filters  i items-center  mt-[70px]'>
                 <p className='flex items-center justify-center text-3xl pt-2 font-bold  bg-light'>Our Best Categories</p>
                  <div className=' w-full  bg-light py-2 flex   justify-center gap-2 '>
                          <div className='w-[140px] h-[140px] flex flex-col  items-center justify-center py-2 px-1'>
                                  <div className='w-[70px] h-[70px] flex justify-center items-center  bg-lightBlue rounded-full'><ShoppingCart size={26} strokeWidth={1} /></div>
                                  <div className='py-1 flex items-center'>
                                    <p className='text-sm'>Shopping</p>
                                  </div>
                          </div>
                          <div className='w-[140px] h-[140px] flex flex-col  items-center justify-center  py-2 px-1'>
                                  <div className='w-[70px] h-[70px] flex justify-center items-center  bg-lightBlue rounded-full'><IndianRupee size={26} strokeWidth={1}  /></div>
                                  <div className='py-1 flex items-center'>
                                    <p className='text-sm'>Cashback</p>
                                  </div>
                          </div>
                          <div className='w-[140px] h-[140px] flex flex-col  items-center justify-center  py-2 px-1'>
                                  <div className='w-[70px] h-[70px] flex justify-center items-center bg-lightBlue rounded-full'><Sofa size={26} strokeWidth={1} /></div>
                                  <div className='py-1 flex items-center'>
                                    <p className='text-sm'>Lounge</p>
                                  </div>
                          </div>
                          <div className='w-[140px] h-[140px] flex flex-col  items-center justify-center  py-2 px-1'>
                                  <div className='w-[70px] h-[70px] flex justify-center items-center  bg-lightBlue rounded-full'><Luggage size={26} strokeWidth={1} /></div>
                                  <div className='py-1 flex items-center'>
                                    <p className='text-sm'>Travel</p>
                                  </div>
                          </div>
                          <div className='w-[140px] h-[140px] flex flex-col  items-center justify-center  py-2 px-1'>
                                  <div className='w-[70px] h-[70px] flex justify-center items-center     bg-lightBlue rounded-full'><Utensils size={26} strokeWidth={1} /></div>
                                  <div className='py-1 flex items-center'>
                                    <p className='text-sm'>Dine In</p>
                                  </div>
                          </div>
                          <div className='w-[140px] h-[140px] flex flex-col  items-center justify-center  py-2 px-1'>
                                  <div className='w-[70px] h-[70px] flex justify-center items-center  bg-lightBlue rounded-full'><Clapperboard size={26} strokeWidth={1} /></div>
                                  <div className='py-1 flex items-center'>
                                    <p className='text-sm'>Movie</p>
                                  </div>
                          </div>
                  </div>
             </div>

             <div>
              
            
             </div>
         </div>
  </> 
          
    
  )
}

export default Categories