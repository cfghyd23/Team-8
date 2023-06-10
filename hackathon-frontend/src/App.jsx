import FirstPage from "./components/FirstPage/FirstPage";
import Sidebar from './components/Dashboard/Sidebar';
import LoginPage from "./components/SecondPage/Login";
import Register from "./components/SecondPage/Register";
import allCauses from "./components/Dashboard/allCauses";
import LandingPage from "./components/LandingPage/LandingPage";

//import { BrowserRouter, Routes, Route } from "react-router-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Overview from "./components/Dashboard/Overview";
const Layout = ({children}) => {
  console.log(window.location.href)

      if (window.location.href == "http://127.0.0.1:5173/dashboard"){
        return (<div><Sidebar/>{children}</div>);
}
else if (window.location.href == "http://127.0.0.1:5173/overview"){
        return (<div><Sidebar/>{children}</div>);
}
else if (window.location.href == "http://127.0.0.1:5173/AllCauses"){
  console.log('dshoa')
        return (<div>
          <Sidebar />
          {children}</div>);
}
else {
  return (
    <div>

{children}</div>);
    
}
}

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        {/* Replace FirstPage with dash components */}
        <Route path="/AllCauses" Component={allCauses} ></Route> 
      <Route path="/Overview" Component={Overview} ></Route> 
    <Route path="/" Component={LandingPage}></Route>
    <Route path="/Home" Component={FirstPage}></Route>
    
    <Route path="/Login" Component={LoginPage}></Route>
    <Route path="/Register" Component={Register}></Route>
    </Routes>
  </Layout>
  </BrowserRouter>    
    // <Sidebar />
  );
}

export default App;
