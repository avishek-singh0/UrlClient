import  { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
export default function Signup() {

 const navigate = useNavigate()

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your signup logic here
    // For example, send a request to your API to register the user
    const response = await fetch("https://urlst.onrender.com/user/sign",{
      method:'POST',
      body: JSON.stringify({ fullName: formData.fullName, email: formData.email, password: formData.password, confirmPassword: formData.confirmPassword }),
      headers:{
        'Content-Type':'application/json'
    }
    })
    if(response.ok){
      navigate('/');

    }
    else{
      console.error('Signup failed')
    }
    console.log(response);
    const data = await response.json();
    console.log(data);
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center rounded-lg bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-4xl  mb-6 text-center text-gray-600 font-bold  ">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              // required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white p-3 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Sign Up
          </button>
        </form>
        <div className='my-3'>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
  Already have an account ? 
  <Link to="/login" className="ml-1 font-medium text-primary-600 hover:underline dark:text-primary-500">
    Login here
  </Link>
</p>
</div>
      </div>
    </div>
  );
}
