import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Result from "./pages/Result/Result";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/results" element={<Result/>}/>
      <Route path="/Detail/:id" element={<Detail/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
