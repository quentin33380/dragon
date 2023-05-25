
export const ADD_DRAGON ='ADD_DRAGON';

export const addDragon = (dragonName) => ({
    type : ADD_DRAGON,
    payload : dragonName,
})

export const REMOVE_DRAGON = 'REMOVE_DRAGON';

export const removeDragon = (dragonName) => ({
    type : REMOVE_DRAGON,
    payload : dragonName,
})

export const REVERSE_DRAGON = 'REVERSE_DRAGON';

export const reverseDragons = () => ({
    type : REVERSE_DRAGON,
})