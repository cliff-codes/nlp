import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <Link href={"/"} >
        <h1 className='font-medium text-2xl'>Sentiment.Io</h1>
    </Link>
  )
}

export default Nav