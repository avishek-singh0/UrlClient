import Analytics from '../component/Analytics';
import Home from '../component/Home'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  

  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
