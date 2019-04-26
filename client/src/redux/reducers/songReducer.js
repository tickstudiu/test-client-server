import {
    CREATE_SONG, 
    FETCH_SONG, 
    UPDATE_SONG, 
    DELETE_SONG
} from '../types/index';

const initialState = {
    all: [],
    one: {},
    msg: '',
};

export default (state = initialState,action) => {
    switch (action.type){
        case FETCH_SONG:
            return {
                ...state,
                all: action.payload.songs,
                msg: action.payload.message,
            };
        case CREATE_SONG:
            return {
                ...state,
                all: action.payload.songs,
                msg: action.payload.message,
            };
        case UPDATE_SONG:
            return {
                ...state,
                all: action.payload.songs,
                msg: action.payload.message,
            };
        case DELETE_SONG:
            return {
                ...state,
                all: action.payload.songs,
                msg: action.payload.message,
            };
        default:
            return state;
    }
}