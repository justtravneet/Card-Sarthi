import React from 'react'
import {ShoppingCart ,Sofa,Luggage ,ReceiptIndianRupee ,Soup ,Clapperboard ,CreditCard, Gift,ReceiptText ,Banknote} from "lucide-react"
const Filter = () => {
  return (
    <div className='px-[16px]'>
          <div className='flex flex-col gap-3 sm:hidden py-3'>
                 <div className='flex  justify-around'>
            
                      <div className='w-[85px] h-[72px] bg-best'>
                            <div className='flex items-center justify-center py-2'><ShoppingCart strokeWidth={1.5} /></div>
                            <div className='flex justify-center px-1 py-1'>
                                <p>Shopping</p>
                            </div>
                      </div>
                      <div className='w-[85px] h-[72px] bg-best'>
                            <div className='flex items-center justify-center py-2'><Sofa strokeWidth={1.5} /></div>
                            <div className='flex justify-center px-1 py-1'>
                                <p>Lounge</p>
                            </div>
                      </div>
                      <div className='w-[85px] h-[72px] bg-best'>
                            <div className='flex items-center justify-center py-2'><Luggage strokeWidth={1.5} /></div>
                            <div className='flex justify-center px-1 py-1'>
                                <p>Travel</p>
                            </div>
                      </div>

                 </div>

                 <div className='flex  justify-around'>
            
            <div className='w-[85px] h-[72px] bg-best'>
                  <div className='flex items-center justify-center py-2'><ReceiptIndianRupee strokeWidth={1.5} /></div>
                  <div className='flex justify-center px-1 py-3'>
                      <p>Cashback</p>
                  </div>
            </div>
            <div className='w-[85px] h-[72px] bg-best'>
                  <div className='flex items-center justify-center py-2'><Soup strokeWidth={1.5} /></div>
                  <div className='flex justify-center px-1 py-3'>
                      <p>Dine In</p>
                  </div>
            </div>
            <div className='w-[85px] h-[72px] bg-best'>
                  <div className='flex items-center justify-center py-2'><Clapperboard strokeWidth={1.5} /></div>
                  <div className='flex justify-center px-1 py-3'>
                      <p>Movie</p>
                  </div>
            </div>

       </div>
                
          </div>


            {/* desktop side */}

            <div className=' filters  items-center mt-[70px]'>
                  <div className='   bg-light py-2 flex   justify-center gap-2 '>
                          <div className='  w-[140px] h-[140px] flex flex-col  items-center justify-center py-2 px-1'>
                                  <div className='icons   w-[70px] h-[70px] flex justify-center items-center  bg-btn rounded-full'><CreditCard size={26} strokeWidth={1} /></div>
                                  <div className='py-1 flex items-center'>
                                    <p className='inputs text-sm'>Credit Cards</p>
                                  </div>
                          </div>
                          <div className='w-[140px] h-[140px] flex flex-col  items-center justify-center  py-2 px-1'>
                                  <div className='w-[70px] h-[70px] flex justify-center items-center  bg-btn rounded-full'><Gift size={26} strokeWidth={1} /></div>
                                  <div className='py-1 flex items-center'>
                                    <p className='text-sm'>Reward Cards</p>
                                  </div>
                          </div>
                          <div className='w-[140px] h-[140px] flex flex-col  items-center justify-center  py-2 px-1'>
                                  <div className='w-[70px] h-[70px] flex justify-center items-center  bg-btn rounded-full'><ReceiptText size={26} strokeWidth={1}  /></div>
                                  <div className='py-1 flex items-center'>
                                    <p className='text-sm'>No Annual Fee Cards</p>
                                  </div>
                          </div>
                          <div className='w-[140px] h-[140px] flex flex-col  items-center justify-center  py-2 px-1'>
                                  <div className='w-[70px] h-[70px] flex justify-center items-center  bg-btn rounded-full'><Banknote size={26}  strokeWidth={1} /></div>
                                  <div className='py-1 flex items-center'>
                                    <p className='text-sm'>Cashback Cards</p>
                                  </div>
                          </div>
                          <div className='w-[140px] h-[140px] flex flex-col  items-center justify-center  py-2 px-1'>
                                  <div className='w-[70px] h-[70px] flex justify-center items-center  bg-btn rounded-full'><ShoppingCart size={26}  strokeWidth={1} /></div>
                                  <div className='py-1 flex items-center'>
                                    <p className='text-sm'> Shopping Cards</p>
                                  </div>
                          </div>
                          <div className='w-[140px] h-[140px] flex flex-col  items-center justify-center  py-2 px-1'>
                                  <div className='w-[70px] h-[70px] flex justify-center items-center  bg-btn rounded-full'><Luggage size={26} strokeWidth={1}  /></div>
                                  <div className='py-1 flex items-center'>
                                    <p className='text-sm'>Travel Cards</p>
                                  </div>
                          </div>
                  </div>
            </div>
    </div>
  )
}

export default Filter