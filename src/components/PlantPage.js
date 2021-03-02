import { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage( { allPlants, setPlants } ) {

  const [ searchQuery, setSearchQuery ] = useState( "" );

  return (
    <main>
      <NewPlantForm allPlants={ allPlants } setPlants={ setPlants }/>
      <Search searchQuery={ searchQuery } setSearchQuery={ setSearchQuery }/>
      <PlantList
        allPlants={ allPlants }
        filteredPlants={ allPlants.filter( plant => plant.name.toLowerCase().includes( searchQuery.toLowerCase() ) ) }
        setPlants={ setPlants }
      />
    </main>
  );
  
}

export default PlantPage;
