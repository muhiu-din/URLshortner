"use client"
import React, { useState } from 'react';
import Link from 'next/link';
const Page = () => {
  const [url, setUrl] = useState("");
  const [preferredUrl, setPreferredUrl] = useState("");
  const [generated, setGenerated] = useState('');

  const generate = async () => {
    await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: url,
        shorturl: preferredUrl
      })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${data.shorturl}`);
        console.log("Success:", data);
        setUrl('');
        setPreferredUrl('');
        alert(data.message);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div className='bg-purple-100 w-[40vw] mx-auto my-30 py-10 rounded-lg'>
        <div>
          <h1 className='text-2xl my-2 text-center font-bold'>Enter Your URL</h1>
        </div>
        <div className='flex flex-col gap-2 mx-6'>
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className='border-1 p-5 py-1 rounded-lg'
            type="text"
            placeholder="Enter Your URL"
          />
          <input
            value={preferredUrl}
            onChange={(e) => setPreferredUrl(e.target.value)}
            className='border-1 p-5 py-1 rounded-lg'
            type="text"
            placeholder="Enter Preferred URL"
          />
          <button
            onClick={generate}
            className='bg-purple-400 p-3 font-bold text-white py-1 rounded-lg'
          >
            Generate
          </button>
        </div>
        {generated && (
          <div className='mt-4 mx-8'>
            <h2 className='text-xl font-bold'>Generated Short URL</h2>
            <p className='text-purple-600'><Link href={generated}>{generated}</Link></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
