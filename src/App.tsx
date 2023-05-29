import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Landing from "./pages/Landing/Landing";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/Detail/:id" element={<Detail/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
