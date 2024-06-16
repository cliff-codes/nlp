"use client"
import React, { useState } from 'react'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import axios from 'axios'

const TextSection = () => {
    const [textToAnalyze, setTextToAnalyze] = useState("")

    const handleTextChanges = (e:React.ChangeEvent<HTMLTextAreaElement> ) => {
        setTextToAnalyze(e.target.value)
        console.log(e.target.value)
    }

    const handleSubmit = async() => {
        console.log("working")
        const res = await axios.post("/api/analyze", {textToAnalyze});
        console.log(res)
    }

  return (
    <div className="text-section">
      <Textarea 
        className='bg-slate-700 border-none min-h-72' 
        placeholder='write or paste text and submit to analyze it content'
        onChange={(e) => handleTextChanges(e)}/>
      <div className='w-full flex justify-center mt-4'>
        <Button 
        className='bg-slate-700 hover:border border-slate-700 w-32'
        disabled = {textToAnalyze !== "" ? false : true}
        onClick={() => {
          handleSubmit()
          setTextToAnalyze("")
        }}
        >Analyze</Button>
      </div>
    </div>
  )
}

export default TextSection