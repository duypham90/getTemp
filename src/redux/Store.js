import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const defaultState = {
    cityName: null,
    temp: null,
    isLoading: false,
    error: false
}
const reducerN = (state = defaultState, action) => {
    switch (action.type) {
        case 'START_FETCH':
            return { ...state, isLoading: true};
        case 'FETCH_SUCESS':
           return { ...state, cityName: action.cityName, temp: action.temp, isLoading: false };
        case 'FETCH_ERR':
            return { error: true };
        default:
            return state;
    }
};
const store = createStore(reducerN, applyMiddleware(thunk));
export default store;