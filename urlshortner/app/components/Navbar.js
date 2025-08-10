import Link from 'next/link'
import React from 'react'
const Navbar = () => {
  return (
    <nav className='bg-purple-500 flex flex-row justify-between px-6 text-white h-14 items-center'>
        {/* Logo */}
        <div>
            <h1 className='font-bold text-2xl'>ZapLink</h1>
        </div>
        <ul className='flex flex-row items-center gap-4 font-semibold'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/"><li>About</li></Link>
            <Link href="/"><li>Shorten</li></Link>
            <Link href="/"><li>Contact us</li></Link>
            <li className='flex gap-2'>
                <Link href="/"><button className='bg-purple-400 p-3 py-1 rounded-lg'>Try Now</button></Link>
                <Link href="/"><button className='bg-purple-400 p-3 py-1 rounded-lg'>Github</button></Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar