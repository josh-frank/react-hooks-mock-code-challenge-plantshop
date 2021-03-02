import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage( { allPlants, setPlants } ) {

  return (
    <main>
      <NewPlantForm allPlants={ allPlants } setPlants={ setPlants }/>
      <Search />
      <PlantList allPlants={ allPlants }/>
    </main>
  );
  
}

export default PlantPage;
