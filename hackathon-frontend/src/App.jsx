import FirstPage from "./components/FirstPage/FirstPage";
import Sidebar from './components/Dashboard/Sidebar';
import LoginPage from "./components/SecondPage/Login";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";
const Layout = ({children}) => {
  console.log(window.location.href)

      if (window.location.href != "http://127.0.0.1:5173/dashboard"){
        return (<div>{children}</div>);
}
else {
  return (
    <div>
<Sidebar/>
{children}</div>);
    
}
}

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        {/* Replace FirstPage with dash components */}
      <Route path="/dashboard" Component={FirstPage} ></Route> 
    <Route path="/LandingPage" Component={FirstPage}></Route>
    <Route path="/Login" Component={LoginPage}></Route>
    </Routes>
  </Layout>
  </BrowserRouter>    
    // <Sidebar />
  );
}

export default App;
