import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./Components/Card";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />} />
        </Routes>
      </BrowserRouter>
      <Card  currency = "$" price ={156} country="USA" rating = {5.0} available={6}/>
    </div>
  );
}

export default App;
