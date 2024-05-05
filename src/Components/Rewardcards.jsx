import React from 'react'

const Rewardcards = () => {
  return (
    <div className='result px-[16px]    mt-[30px] '>
    <div className='flex items-center  justify-center  md:gap-[230px] lg:justify-center xl:justify-center 2xl:justify-center lg:gap-[230px] xl:gap-[230px] 2xl:gap-[230px]'>
           <div className='w-[400px] h-[130px] flex flex-col  justify-between   leading-1 '>
              <p className='text-3xl font-bold tracking-wider'>Reward Cards</p>
              <p>Enjoy retail therapy with shopping credit cards: Let your inner shopaholic shine!</p>
           </div>

           <div className='w-[220px] h-[110px] flex flex-col justify-between items-center'>
                                 <button className='p-[8px] bg-btn text-black w-[280px] rounded-lg'>Compare and apply for Credit Card
                                  </button>

                                  <button className='p-[8px]  text-black w-[280px] border-black border-2 rounded-lg'> Shopping Credit Card Suggestion
                                  </button>
           </div>
    </div>
</div>
  )
}

export default Rewardcards