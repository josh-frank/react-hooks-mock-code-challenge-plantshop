import { useState } from "react";

function PlantCard( { plant } ) {

  const [ inStock, toggleInStock ] = useState( true );

  return (
    <li className="card">
      <img src={ plant.image } alt={ plant.name } />
      <h4>{ plant.name }</h4>
      <p>Price: { plant.price }</p>
      {inStock ? (
        <button className="primary" onClick={ () => toggleInStock( false ) }>In Stock</button>
      ) : (
        <button onClick={ () => toggleInStock( true ) }>Out of Stock</button>
      )}
    </li>
  );

}

export default PlantCard;
