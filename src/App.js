import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./Components/Card";
import experiencedata from "./Data/Data"

function App() {
  const card = experiencedata.map((e) => {
    return <Card title={e.title} location={e.location} openSpot={e.openSpots}   price ={e.price} country="USA" rating = {e.stats.rating} reviewCount={e.stats.reviewCount}  description={e.description} img={e.coverImg}/>
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />} />
        </Routes>
      </BrowserRouter>
      {card}
      {/* <Card  currency = "$" price ={156} country="USA" rating = {5.0} reviewCount={6} title="Life lessons with Katie Zaferes" wedding="Learn wedding photography"/> */}
    </div>
  );
}

export default App;
