import getTemp from '../api/getTemp';

export function StartFetchData(){
    return { type: 'START_FETCH' };
}
export function FetchSuccess(cityName, temp){
    return { 
        type: 'FETCH_SUCESS',
        cityName,
        temp
    };
}
export function FetchErr() {
    return { type: 'FETCH_ERR' };
}
export function getData(cityName){
    return dispatch => {
        dispatch(StartFetchData());
        getTemp(cityName)
        .then(temp => dispatch(FetchSuccess(cityName, temp)))
        .catch(() => dispatch(FetchErr()));
    };
}