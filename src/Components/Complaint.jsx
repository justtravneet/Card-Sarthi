import React from 'react'

const Complaint = () => {
  return (
    <div className='complaint mt-5'>
         <div className='flex items-center justify-center 2xl:gap-[230px] xl:gap-[230px] lg:gap-[230px] md:gap-[120px] sm:gap-[20px]'>
              <div>
                <img className='w-[300px]' src="https://s3-alpha-sig.figma.com/img/d7d1/cdfe/cf56f6784c8a39cf7cf2ff6ef6e21e72?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fK2PJfrP~DP90BLSuka4s7c-NKcJ6QPvub1XVGGZRciK9Jgi3YFBQ5v8VCNoaFTxDn6C0Zyf1gbo32r4mLyr1-g2bdj6PVDx~3r~kJ9btP7FIvGqLu8Mg1BlwSt547ocH0VFLGLJSQJx-uJzfQBsMSdCQTiMDC5HNsLUoIAOoRc7jF98XgEvyzX1c0tW43kPhlAhkVcdz1SjkfcFXyFzXjWku0xCL5WSZM3IndjpIoCwUOqi8LLBJl-c5aCATBx9uSNdQLSLhbpXF-LQ5z4Tcm00hS0wqXft7jw2ha-5cbJ0nqBWEJjrbdymtZUCqww6e1N6twkaT8syF2PhHEWfHw__" alt="" />
              </div>
              <div className='flex flex-col gap-2'>
                  <p className='text-xl font-semibold'>Still Having Problem to Choose!</p>
                  <button type="button" className='px-2 py-2 w-[150px] bg-btn'>Let’s Connect</button>
              </div>
         </div>
    </div>
  )
}

export default Complaint