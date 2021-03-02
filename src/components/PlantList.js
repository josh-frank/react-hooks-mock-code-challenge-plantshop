import React from "react";
import PlantCard from "./PlantCard";

function PlantList( { allPlants, filteredPlants, setPlants } ) {

  return (
    <ul className="cards">
      { filteredPlants.map( plant => <PlantCard key={ plant.id } plant={ plant } allPlants={ allPlants } setPlants={ setPlants }/> ) }
    </ul>
  );

}

export default PlantList;
