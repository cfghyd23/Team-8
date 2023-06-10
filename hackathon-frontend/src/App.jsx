import FirstPage from "./components/FirstPage/FirstPage";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<FirstPage />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Route>
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
