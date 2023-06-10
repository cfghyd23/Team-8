import FirstPage from "./components/FirstPage/FirstPage";
import Sidebar from './components/Dashboard/Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    
    <BrowserRouter>
    
    <Routes>
      <Route path="/">
        <Route index element={<FirstPage />} />
        <Route path="/dashboard" element={<Sidebar />}></Route>
      </Route>

    </Routes>
  </BrowserRouter>
    // <Sidebar />
  );
}

export default App;
