
const apikey = "3265874a2c77ae4a04bb96236a642d2f";


const url = (location) => 
`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`

async function getWeatherByLocation(location){
    const resp = await fetch(url(location), {
    origin: 'cors'})
    const respData =  await resp.json()
    
    console.log(respData, kelvintoF(respData.main.temp))

}

getWeatherByLocation('waukegan')

function kelvintoF(k) {
    return (1.8 * (k - 273) + 32).toFixed(2)
}