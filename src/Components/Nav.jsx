import React from 'react'
import {Search ,Bell,AlignJustify} from "lucide-react"
const Nav = () => {
  return (
    <div className='px-[12px]  xl:px-[200px]'>
         <div className='flex  items-center  justify-between '>
                  <div>
                        <img className='w-[130px] lg:w-[190px]' src="https://s3-alpha-sig.figma.com/img/1e6d/0820/bfcbb356a7781aa2a7878e563a10c5c2?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F35WvoMJsE6N~GP0WZQ5MImbeM~DGRBgyVxuW1TyNGQ1KpztTlhcSPnwBhez~uhEsfb9kjOweYhrUzRZpYMxcwwSVRVoPcCcdmuxi27aHOrMzDM435d1O2sp02gLnFnAcEpW03vYRgjOtiRIoOiFqDxnsW0RkcbP1C~jQgSfGvzw2LtkobQ1T5fMdbhHry7ohKoT7gGdDPGITjMGBCBhmqYLlwY0YcL8nzX9Ppkb6g7EVybQhlYvJH1bm7mtCm6Wy3vAmy0Ntil-X~~9dMCBMVVj1cy96Eqqo-1ANhRrcl1g-SGrumAPCLD7eMVvH4aULvFA90dbIBKVnTKVQqyOGg__" alt="" />
                  </div>
                  <div className='menu-items flex gap-10 px-4 '>
                       <div class="dropdown">
                           <button class=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                             Card by Category
                            </button>
                                          <ul class="dropdown-menu">
                                           <li><a class="dropdown-item" href="#">Action</a></li>
                                           <li><a class="dropdown-item" href="#">Another action</a></li>
                                           <li><a class="dropdown-item" href="#">Something else here</a></li>
                                           </ul>
                          </div>
                          <div class="dropdown">
                           <button class=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                             Card by Credit Score
                            </button>
                                          <ul class="dropdown-menu">
                                           <li><a class="dropdown-item" href="#">Action</a></li>
                                           <li><a class="dropdown-item" href="#">Another action</a></li>
                                           <li><a class="dropdown-item" href="#">Something else here</a></li>
                                           </ul>
                          </div>

                          <div class="dropdown">
                           <button class=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                             Credit Card by Credit User
                            </button>
                                          <ul class="dropdown-menu">
                                           <li><a class="dropdown-item" href="#">Action</a></li>
                                           <li><a class="dropdown-item" href="#">Another action</a></li>
                                           <li><a class="dropdown-item" href="#">Something else here</a></li>
                                           </ul>
                          </div>


                  </div>

                  <div className=' md:hidden icons flex gap-4 '>
                         <Search size={28} />
                         <Bell size={28} />
                         <AlignJustify size={28} />

                  </div>
         </div>
    </div>
  )
}

export default Nav