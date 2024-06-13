import React from 'react'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'

const TextSection = () => {
  return (
    <div className="text-section">
      <Textarea className='bg-slate-700 border-none min-h-72' placeholder='write or paste text and submit to analyze it content'/>
      <div className='w-full flex justify-center mt-4'>
        <Button className='bg-slate-700 hover:border border-slate-700 w-32'>Analyze</Button>
      </div>
    </div>
  )
}

export default TextSection