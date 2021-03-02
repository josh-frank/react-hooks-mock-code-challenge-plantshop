import { useState, useEffect } from "react";
import APIUrl from "./APIUrl";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  const [ plants, setPlants ] = useState( [] );

  useEffect( () => {
    fetch( APIUrl ).then( response => response.json() ).then( setPlants );
  }, [] );

  return (
    <div className="app">
      <Header />
      <PlantPage allPlants={ plants } setPlants={ setPlants }/>
    </div>
  );

}

export default App;
