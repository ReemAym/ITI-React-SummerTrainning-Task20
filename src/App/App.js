
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import NotFound from "../components/componentPage/NotFound";
import Allmoves from "../pages/Allmoves";
import Movedatail from "../components/componentPage/Movedatail";
import Contacts from "../components/componentPage/Contacts";


var namee = "React 1";
function App() {
  
  return (
  

    <>
    <BrowserRouter>
    <Navbar></Navbar>
    
         <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="allmoves" element={<Allmoves></Allmoves>}></Route>
              <Route path="allmoves/:genre_ids" element ={<Movedatail></Movedatail>}></Route>
              <Route path="Contacts" element ={<Contacts></Contacts>}></Route>
              <Route path="*" element={<NotFound></NotFound>}></Route>

         </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
