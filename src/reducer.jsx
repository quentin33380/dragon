import { ADD_DRAGON, REMOVE_DRAGON, REVERSE_DRAGON } from './actions';

const initialState = {
  dragons: ['Apalala', 'Balaur', 'Bolla'],
  count: 3,
};

let reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DRAGON:
      // TODO
      const newDragon = action.payload;
      const isDuplicate = state.dragons.includes(newDragon);

      if (newDragon === '' || isDuplicate) {
        return state;
      }

      return {
        ...state,
        dragons: [...state.dragons, newDragon],
        count: state.count + 1,
      };

    case REMOVE_DRAGON:

      const dragonToRemove = action.payload;

      // On vise le dragon sélectionné
      const dragonIndex = state.dragons.indexOf(dragonToRemove);

      // Si le dragon existe
      if (dragonIndex !== -1) {

        //on crée une copie du tableau dragons
        const updatedDragons = [...state.dragons];

        // Splice retire le dragon visé dans dragonIndex
        updatedDragons.splice(dragonIndex, 1);

        // On décrémente count de 1
        const updatedCount = state.count - 1;

        return {
          ...state,
          dragons: updatedDragons,
          count: updatedCount,
        };
      }

      return state;


    case REVERSE_DRAGON:

    //.reverse() inverse directement toutes les données d'un tableau
        const reversedDragons = [...state.dragons].reverse();
        return {
          ...state,
          dragons: reversedDragons,
        };  
    default:
      return state;
  }
};

export default reducer;
