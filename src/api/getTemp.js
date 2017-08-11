const URL = 'http://api.openweathermap.org/data/2.5/find?units=metric&appid=bdf95b1ef2cd7c83626cb90731dcc5ed&q=';

const getTemp = (cityname) =>{
    return fetch(URL + cityname)
    .then(res => res.json())
    .then(resJson => resJson.list[0].main.temp);
}
// getTemp('Hanoi')
// .then(temp => console.log(temp))
// .catch(err => console.log(err));

export default getTemp;