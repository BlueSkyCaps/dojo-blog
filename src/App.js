import Navbar from "./Navbar";
import Home from "./Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CreateBlog from "./CreateBlog";
import {useState} from "react";
import Details from "./Details";
import NotFound from "./404";

function App() {
    let [name,setName] = useState("name");
    function cli(_name) {
        setName(_name)
    }
    return (
    <div>
        <button onClick={()=>{cli("1")}}>{name}</button>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/create" element={<CreateBlog/>}/>
                <Route path="/details/:id" element={<Details/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App