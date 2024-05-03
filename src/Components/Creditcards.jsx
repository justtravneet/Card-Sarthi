import React from 'react'

const Creditcards = () => {
  return (
    <div className='Credits px-[16px]  xl:px-[200px]  mt-[30px]'>
          <div className='flex items-center  lg:gap-[200px]  xl:gap-[230px]'>
                 <div className='w-[400px] h-[130px] flex flex-col  justify-between ml-[80px]'>
                    <p className='text-3xl font-bold'>Credit Cards</p>
                    <p>Optimize Your Earnings with Our Best Rewards Credit Cards: Find credit cards that maximize your rewards on every purchase.</p>
                 </div>

                 <div className='w-[220px] h-[110px] flex flex-col justify-between items-center'>
                                       <button className='p-[8px] bg-btn text-black w-[200px]'> Apply for Credit Card
                                        </button>

                                        <button className='p-[8px]  text-black w-[200px] border-black border-2 rounded-lg'> Want to uncover more
                                        </button>
                 </div>
          </div>
    </div>
  )
}

export default Creditcards