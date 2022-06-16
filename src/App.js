import './App.css';
import NavBar from "./Components/NavBar";
import {BrowserRouter,Routes,Route,} from "react-router-dom";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       {/* <NavBar/> */}
        <Routes>
          <Route path="/" element={<NavBar /> }/>
          
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
