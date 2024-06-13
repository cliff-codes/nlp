import React from 'react'
import Nav from './Nav'
import Results from './Results'
import TextSection from './TextSection'

const HomePage = () => {
  return (
    <div className='w-full max-w-7xl px-4 py-4 flex flex-col gap-16'>
        <Nav/>
        <Results/>
        <TextSection/>
    </div>
  )
}

export default HomePage