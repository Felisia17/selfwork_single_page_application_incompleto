

import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./views/Homepage.jsx";
import Posts from "./views/Posts.jsx";
import Details from "./views/Details.jsx";


function App() { 

  return (
    <>

    <BrowserRouter>
    
    <Navbar></Navbar>
    
      <Routes>
      <Route path="/" element={<Homepage/>}/>   
      <Route path="/posts" element={<Posts/>}/>
      <Route path="/posts/:id" element={<Details/>}/>

      </Routes>
    </BrowserRouter>

    </>
      
      
    
  )
}

export default App




