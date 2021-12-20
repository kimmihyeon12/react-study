import "./styles/index.css";
import Navbar from "./components/Navbar";
import { Routes, Route, Link, Router } from "react-router-dom";
import routers from "./router/routers";
function App(){

     return(
        <div className="flex flex-col ml-2" >
        <Navbar/>
        <Routes>
            {routers.map(route=>{
                return <Route key={route.path} path={route.path} element={<route.component/>}/>
            })}
        </Routes>
          
       </div>
    )
}

export default App;
