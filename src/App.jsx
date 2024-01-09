import Analytics from '../component/Analytics';
import Home from '../component/Home'
import Log from '../component/Log';
import Login from '../component/Login';
import Navbar from '../component/Navbar';
import Signup from '../component/Signup';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IsAuth from '../component/IsAuth';


function App() {
  

  return (
    <>
    <Router>
      <div>
        <Navbar/>
      </div>
      <Routes>
      <Route path="/" element={<Home />} />
      
      <Route path="/signup" element={<Signup />} />
      <Route   path="/analytics" element={< Analytics/>} />
      <Route path="/logout" element={<Login/>} />
      <Route path="/log" element={<Log/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
