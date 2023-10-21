import { useState } from "react"


export default function Home() {

  const [url ,seturl] =  useState("");
  const [shortenedUrl, setShortenedUrl] = useState('');

  const collectData = async(e)=>{
    e.preventDefault(); 
    const response = await fetch('http://localhost:3001/url',{
      method:"POST",
      body:JSON.stringify({url}),
      headers:{
        'Content-Type':'application/json'
    }  })
    const data = await response.json();
    console.log(data.shortid)
    setShortenedUrl(`https://urls-2h48.onrender.com/url/${data.shortid}`); // Update shortened URL
    console.log(data);
    console.warn(url);
  

  }

  return (
    <div>
         <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 p-28 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        URL Shortner
        </h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
          Paste a long URL
          </label>
          <input
            className="w-96 p-6  h-6  border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            value={url}
            onChange={(e)=>{seturl(e.target.value)}}
            placeholder="Example:http://super-long-link.com/shorten-it"
          />
        </div>
        <button className="w-36 bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline font-normal"
        onClick={collectData}
        
        >
          get your link
        </button>
        {shortenedUrl && (
        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Shortened URL:
          </label>
          <a
            href={shortenedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {shortenedUrl}
          </a>
        </div>
      )}
      </div>
    </div>
      
    </div>
  )
}
