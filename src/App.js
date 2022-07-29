import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./Components/Card";
import experiencedata from "./Data/Data"

function App() {
  const card = experiencedata.map((e) => {
    // return <Card key={e.id}  title={e.title} location={e.location} openSpot={e.openSpots}   price ={e.price} country="USA" rating = {e.stats.rating} reviewCount={e.stats.reviewCount}  description={e.description} img={e.coverImg}
    // />
    // OR
    // Take the entire result of the map which is e as props
    // return <Card key={e.id} e={e}/>
    // with this, you would access the props as props.e.name of the item like props.e.location
    // OR
    // spreed the entire result of the map which is e as props
    // With the spreed, you would access props with with props.variable name like props.location
    return <Card key={e.id} {...e}/>
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />} />
        </Routes>
      </BrowserRouter>
      <section className="cards-list">{card}</section>
      
      {/* <Card  currency = "$" price ={156} country="USA" rating = {5.0} reviewCount={6} title="Life lessons with Katie Zaferes" wedding="Learn wedding photography"/> */}
    </div>
  );
}

export default App;
