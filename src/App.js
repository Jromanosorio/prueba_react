import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./components/detail/detail";
import Login from "./components/login/login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/coin/:id' element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
