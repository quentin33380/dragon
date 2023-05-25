import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeDragon, reverseDragons } from '../actions'

const Dragons = () => {

    //useSelector() permet de ne selectionner que dragons dans le state pour éviter d'avoir à écrire state.dragons à chaque fois
    const dragons = useSelector((state) => state.dragons);
    const dispatch = useDispatch();

    // Const permettant de remove un dragon
    const handleRemoveDragon = (dragon) => {
        dispatch(removeDragon(dragon));
    }

    const handleReverseDragon = () => {
        dispatch(reverseDragons());
    }

    return (
        <div>
          <h1>Liste des dragons</h1>
          <ul>
            {dragons.map((dragon) => (
              <li key={dragon}>
                {dragon}<br/>
                <button onClick={() => handleRemoveDragon(dragon)}>
                  Supprimer
                </button>
              </li>
            ))}
          </ul>
          <button onClick={handleReverseDragon}>Inverser l'ordre</button>
        </div>
      );
};
export default Dragons