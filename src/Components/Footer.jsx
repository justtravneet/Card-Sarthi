import React from 'react'
import {Instagram ,Facebook ,Twitter,Home ,CreditCard ,Dock , Landmark} from 'lucide-react'
const Footer = () => {
  return (
    <div className=''>
           <div className='flex flex-col py-2 mt-2 bg-light'>
                 <div className='flex flex-col gap-3 px-[16px]'>
                  <p className='text-xl'>Still Having Problem to Choose!</p>
                  <div className='flex justify-end'>                  
                  <button type="button" className=' w-[130px] py-2 px-3 bg-btn rounded-md' >
                    Let’s Connect
                  </button>
                  
                  </div>

                 </div>
           </div>

            <div className=' bg-grade mt-2'>
                   <div className=' flex flex-col gap-2'>
                         <div className='px-[16px] text-white py-2 justify-center border-b-2 border-white'>
                          <a href="">Address</a>
                         </div>

                         <div className= 'px-[16px] text-white py-2 border-b-2 border-white'>
                          <a href="">Products</a>
                         </div>

                         <div className='px-[16px] text-white py-2 border-b-2 border-white'>
                          <a href="">Company</a>
                         </div>

                         <div className=' px-[16px] text-white py-2 border-b-2 border-white'>
                          <a href="">Resources</a>
                         </div>

                         <div className='px-[16px] text-white py-2 border-b-2 border-white'>
                          <a href="">Tools</a>
                         </div>
                         
                   </div>

                   <div>
                           <div className='flex gap-2 justify-center py-1 mt-4'>
                           <Facebook size={28} color="#e5e0e0" />
                           <Twitter size={28} color="#e5e0e0" />
                           <Instagram size={28} color="#e5e0e0" />
                           </div>

                           <div className='text-white text-xs justify-center flex  py-2'>
                               <a href="http://"> Privacy Policy  | </a>
                               <a href="http://">  Terms of Use  | </a>
                               <a href="http://">  Sales Policy  | </a>
                               <a href="http://">  Legal | </a>
                               <a href="http://">  Site Map | </a>

                           </div>

                           <div className='text-xs text-white justify-center flex py-1'>
                             <p>Copyright © 2024 Card Sarthi Inc. All rights reserved.</p>
                           </div>

                   </div>

            </div>


            <div className='px-[16px]'>
                 <div className='flex  justify-between'>
                      <div className='w-[70px] h-[60px] py-2'>
                             <div className='flex justify-center'>
                             <Home size={28} color="#000000" strokeWidth={1} />
                             </div>
                             <div className='flex justify-center'>
                             <a className='text-xs' href="http://">Home</a>
                             </div>
                      </div>

                      <div className='w-[70px] h-[60px] py-2'>
                             <div className='flex justify-center'>
                             <CreditCard size={28} color="#000000" strokeWidth={1} />
                             </div>
                             <div className='flex justify-center'>
                                <a className='text-xs' href="http://">Credit Score</a>
                             </div>
                      </div>

                      <div className='w-[70px] h-[60px] py-2'>
                             <div className='flex justify-center'>
                             <Dock size={28} color="#000000" strokeWidth={1} />
                             </div>
                             <div className='flex justify-center'>
                             <a className='text-xs' href="http://">Categorized</a>
                             </div>
                      </div>

                      <div className='w-[70px] h-[60px] py-2'>
                             <div className='flex justify-center'>
                             <Landmark size={28} color="#000000" strokeWidth={1} />
                             </div>
                             <div className='flex justify-center'>
                             <a className='text-xs' href="http://">Our Issuer</a>
                             </div>
                      </div>
                      

                 </div>
            </div>

    </div>
  )
}

export default Footer