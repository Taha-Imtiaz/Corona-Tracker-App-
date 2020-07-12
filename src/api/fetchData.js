import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'
//fetch data for cards
export const fetchData = async (country) => {
    let changeableUrl = url
    if (country) {
        changeableUrl = `${url}/countries/${country}`
    }
try {
    const response = await axios.get(changeableUrl)
    const {data : {confirmed,recovered,deaths,lastUpdate}} = response
  
    const modifiedData = {
        confirmed: confirmed,
        recovered: recovered,
        deaths: deaths,
        lastUpdate: lastUpdate
    }
    return modifiedData

} catch (error) {
    console.log(error)
}
}

export const fetchDailyData = async () => {
try {
    const response = await axios.get(`${url}/daily`);
   
    
    const {data} = response
    const modifiedData = data.map((dailyData) => ({
        confirmed : dailyData.confirmed.total,
        deaths : dailyData.deaths.total,
        date: dailyData.reportDate
    }))
return modifiedData
} catch (error) {
    console.log(error)
}
}

export const fetchCountries = async () => {
    try {
        const response = await axios.get(`${url}/countries`)
        const {data:{countries}} = response
        return countries.map((country) => country.name)
    } catch (error) {
        console.log(error)
    }
}