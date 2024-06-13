import React from 'react'

const Results = () => {
  return (
    <div className='w-full flex flex-col place-items-center'>
        <h1 className='text-center'>Results</h1>

        <div>
            <h1>The overall sentiment is : </h1>
            <div className='flex flex-col '>
                <strong className='text-center text-8xl my-4'>😁</strong>
                <h2 className='text-center'>Happiness</h2>
            </div>
        </div>
    </div>
  )
}

export default Results