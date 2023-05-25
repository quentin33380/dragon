import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { addDragon } from "../actions";

const Home = () => {
    
    const dispatch = useDispatch();
    const [newDragon, setNewDragon] = useState('');

    // Const permettant d'ajouter un dragon
    const handleAddDragon = () => {
        dispatch(addDragon(newDragon));
        setNewDragon('');
    };

    return (
        <div>
            <h1>Ajouter un dragon</h1>
            <input
                type="text"
                placeholder="Nom du dragon"
                value={newDragon}
                onChange={(e) => setNewDragon(e.target.value)}
            />
                
            <button onClick={handleAddDragon}>Ajouter</button>
        </div>
    )

}

export default Home;