import Navbar from "./Project5 Recipe App/Navbar"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./Project5 Recipe App/Home"
import About from "./Project5 Recipe App/About"
import Search from "./Project5 Recipe App/Search"
import Aboutmeals from "./Project5 Recipe App/Aboutmeals"
import { useState } from "react"
const App = () => {
  const[search,setSearch]=useState('b')
  return (
    <div className="App">
     <BrowserRouter>
       <Navbar setSearch={setSearch}/>
      <Routes>
        <Route path="/" element={<Home search={search}/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/aboutmeals" element={<Aboutmeals search={search}/>}></Route>
        <Route path="/search" element={<Search/>}></Route>
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
