import { useState } from "react";
import APIUrl from "./APIUrl";

function PlantCard( { plant, allPlants, setPlants } ) {

  const [ inStock, toggleInStock ] = useState( true );
  const [ editPriceFormActivated, activateEditPriceForm ] = useState( false );
  const [ editPriceFieldState, setEditPriceFieldState ] = useState( plant.price );

  function updatePrice() {
    fetch( `${ APIUrl }/${ plant.id }`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify( { price: editPriceFieldState } )
    } ).then( response => response.json() ).then( updatedPlant => {
      const updatedPlants = allPlants.filter( plant => plant.id !== updatedPlant.id );
      setPlants( [ ...updatedPlants, updatedPlant ].sort( ( thisPlant, thatPlant ) => thisPlant.id - thatPlant.id ) );
      activateEditPriceForm( false );
    } );
  }

  // console.log( editPriceFieldState );

  return (
    <li className="card">
      <img src={ plant.image } alt={ plant.name } />
      <h4>{ plant.name }</h4>
      <p>Price:
        <input className="price" type="number" value={ editPriceFieldState } onChange={ change => setEditPriceFieldState( change.target.value ) } disabled={ !editPriceFormActivated }/>
      </p>
      {editPriceFormActivated ? (
        <button className="primary" onClick={ updatePrice }>Save Price</button>
        ) : (
        <button onClick={ () => activateEditPriceForm( true ) }>Edit Price</button>
      )}
      {inStock ? (
        <button className="primary" onClick={ () => toggleInStock( false ) }>In Stock</button>
      ) : (
        <button onClick={ () => toggleInStock( true ) }>Out of Stock</button>
      )}
    </li>
  );

}

export default PlantCard;
