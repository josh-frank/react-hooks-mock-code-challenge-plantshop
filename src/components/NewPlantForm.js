import { useState } from "react";
import APIUrl from "./APIUrl";

function NewPlantForm( { allPlants, setPlants } ) {

  const [ newPlantFormState, setNewPlantFormState ] = useState( { name: "", image: "", price: 0 } );

  function updateNewPlantFormState( newPlantFormChangeEvent ) {
    const updatedNewPlantFormState = { ...newPlantFormState };
    updatedNewPlantFormState[ newPlantFormChangeEvent.target.name ] = newPlantFormChangeEvent.target.value;
    setNewPlantFormState( updatedNewPlantFormState );
  }

  function addNewPlant( newPlantFormSubmitEvent ) {
    newPlantFormSubmitEvent.preventDefault();
    fetch( APIUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify( newPlantFormState )
    } ).then( response => response.json() ).then( newPlant => {
      setPlants( [ ...allPlants, newPlant ] );
      setNewPlantFormState( { name: "", image: "", price: 0 } );
    } );
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={ addNewPlant }>
        <input type="text" name="name" value={ newPlantFormState.name } placeholder="Plant name" onChange={ updateNewPlantFormState }/>
        <input type="text" name="image" value={ newPlantFormState.image } placeholder="Image URL" onChange={ updateNewPlantFormState }/>
        <input type="number" name="price" step="0.01" value={ newPlantFormState.price } placeholder="Price" onChange={ updateNewPlantFormState }/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );

}

export default NewPlantForm;
