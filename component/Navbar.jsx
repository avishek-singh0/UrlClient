import { Link } from "react-router-dom";
import Logout from "./Login";


// const token = localStorage.getItem('accessToken');



const Navbar = () => {



  return (
    // <nav className="bg-grey-600 p-3 flex  justify-start items-center">
    //   {/* <div className="flex items-center "> */}
    //     <Link to="/" className="text-white text-lg font-semibold mr-4">Home</Link>
    //     <div className="flex flex-row items-center gap-5 sm:justify-end ">
    //     <Link to="/signup" className="text-white">Signup</Link>
    //     </div>
    //   {/* </div> */}
    // </nav>
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800 rounded-xl">
  <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
    <Link to="/" className="flex-none text-2xl font-semibold dark:text-white " >U</Link>
    <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
      <Link to="/" className="font-medium text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" aria-current="page">Home</Link>
      <Link to="/signup" className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" >Signup</Link>
      <Link to="/logout" className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" >Logout</Link>
      <Link to="/log" className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" >Login</Link>
      <Link to="/analytics" className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" >Analytics</Link>
    </div>
  </nav>
  {/* <div className="py-2 px-1">
{token ? <Logout/> :null} </div> */}
</header>
  );
};

export default Navbar;
