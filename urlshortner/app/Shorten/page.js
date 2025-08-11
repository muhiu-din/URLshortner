"use client"
import React, { useState } from 'react'

const page = () => {
    const [url,seturl] = useState("");
    const [preferredUrl,setPreferredUrl] = useState("");
    const [generated,setgenerated] = useState(false);
   
  return (
    <div >
       <div className='bg-purple-100 w-[40vw] mx-auto my-30 py-10 rounded-lg'>
         <div>
            <h1 className='text-2xl my-2 text-center font-bold'>Enter Your URL</h1>
         </div>
        <div className='flex flex-col gap-2 mx-6'>
            <input value={url} onChange={(e) => seturl(e.target.value)} className='border-1 p-5 py-1 rounded-lg' type="text" placeholder="Enter Your URL" value={url} onChange={(e) => seturl(e.target.value)} />
            <input value={preferredUrl} onChange={(e) => setPreferredUrl(e.target.value)} className='border-1 p-5 py-1 rounded-lg' type="text" placeholder="Enter Preferred URL" value={preferredUrl} onChange={(e) => setPreferredUrl(e.target.value)} />
            <button className='bg-purple-400 p-3 font-bold text-white py-1 rounded-lg'>Generate</button>
        </div>
       </div>
    </div>
  )
}

export default page