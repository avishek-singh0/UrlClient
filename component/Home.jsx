import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';

export default function Home() {

  const [url ,seturl] =  useState("");
  const [shortenedUrl, setShortenedUrl] = useState('');
  const token = localStorage.getItem('accessToken');
      useEffect(()=>{
        if (!token) {
          // Handle redirection here or set a state to indicate redirection
          // For example:
          window.location.href = '/log'; // Redirects to '/log' if token is missing
          return; // Prevent further execution of the fetch logic
        }



      })
            
  // const collectData = async(e)=>{
  //   e.preventDefault(); 
  //   console.log('joker')
  //   const response = await fetch('http://localhost:4001',{
  //     method:"POST",
  //     body:JSON.stringify({url}),
  //     headers:{
  //       'Content-Type':'application/json'
  //   }  })
  //   const data = await response.json();
  //   console.log(data.shortid)
  //   setShortenedUrl(`http://localhost:4001/${data.shortid}`); // Update shortened URL
  //   console.log(data);
  //   console.warn(url);
  

  // }
  const collectData = async (e) => {
    e.preventDefault();
    const response = await fetch('https://urlst.onrender.com/url', {
      method: 'POST',
      body: JSON.stringify({ url }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (!response.ok) {
      // Handle error cases here, like 404 Not Found or other status codes
      console.error('Error:', response.status);
      return;
    }
  
    try {
      const data = await response.json();
      console.log(data.shortid);
      setShortenedUrl(`https://urlst.onrender.com/${data.shortid}`);
      console.log(data);
      console.warn(url);
    } catch (error) {
      console.error('Error parsing JSON response:', error);
      // Handle parsing error here
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-xl w-full mx-auto p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          URL Shortener
        </h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Paste a long URL
          </label>
          <input
            className="w-full p-3 border rounded-md focus:outline-none focus:border-blue-500 text-neutral-950"
            type="text"
            value={url}
            onChange={(e) => { seturl(e.target.value) }}
            placeholder="Example: http://super-long-link.com/shorten-it"
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:space-x-4 justify-between ">
          <button className=" p-2 w-full sm:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline"
            onClick={collectData}>
            Get Your Link
          </button>

          <Link to="/signup" className="w-full sm:w-auto mt-2 sm:mt-0">
            <button className=" p-2 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline">
              Sign Up
            </button>
          </Link>
        </div>

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
  );
}
