import  { useState } from 'react'
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';


export default function Log() {


const[pass , Setpass] = useState();
const[email , Setemail] = useState();
const navigate = useNavigate()

const handleSubmit =(e)=>{
    e.preventDefault();
 console.log(pass,email)
 axios.post("https://urlst.onrender.com/user/log",{
    email:email,
     password:pass,
   
    })
 .then((response)=>{console.log(response)
    console.log(response.data)
    if(response.data.status === 'success'){
        
        navigate('/')
        const receivedToken = response.data.token;
          // console.log()
        // Store the token in localStorage for subsequent use
        localStorage.setItem('accessToken', receivedToken);
  
        // Redirect or perform other actions after successful login
        // For example, redirect to a dashboard page
        // history.push('/dashboard');
  
        // Set token in Axios default headers for subsequent requests
        axios.defaults.headers.common['Authorization'] = `Bearer ${receivedToken}`;
  
        
    }

})
 .catch((error)=>console.log(error))

}


  return (
    <div className="min-h-screen flex items-center justify-center rounded-lg bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
      <h2 className="text-4xl  mb-6 text-center text-gray-600 font-bold  ">Log in</h2>
    <div>
    <form onSubmit={handleSubmit}>
<div className="mb-4">
    <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
    <input type="text" 
    name="email"
    placeholder='Enter email'
    onChange={(e) => Setemail(e.target.value)}
    className="mt-1 p-2 w-full border rounded-md"

    />
</div>
<div className='mb-6'>
    <label htmlFor="password"  className="block text-sm font-medium text-gray-600">password</label>
    <input type="password"
     name="password"
    placeholder='Enter password'
    onChange={(e) => Setpass(e.target.value)}
    className="mt-1 p-2 w-full border rounded-md"
    />
</div>
<div>
    <button 
     className="w-full bg-indigo-500 hover:bg-indigo-600 text-white p-3 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
    type='submit' >Login</button>
</div>

    </form>
    <div className='my-3'>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Don't have an account ?
            <Link to="/signup" className="ml-1 font-medium text-primary-600 hover:underline dark:text-primary-500">
              Sign up here
            </Link>
          </p>
        </div>
    </div>
    </div>
    </div>
  )
}
