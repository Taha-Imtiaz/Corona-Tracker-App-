import React, { Component } from 'react'
import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'
import "./App.css"
import { fetchData } from './api/fetchData'
import coronaImage from "./images/image.png"

 class App extends Component {

  state = {
    data : {},
    country: '',
  }

   componentDidMount = async () => {
     //fetch data 
     const fetchedData = await fetchData()

     //Update state
    this.setState({
      data: fetchedData
    })
   };

   handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)

    this.setState({
      data: fetchedData,
      country: country
    })

     console.log(country)
     //fetch the data
     //set the state
   }
   
  render() {
    const {data, country} = this.state
    return (
      <div className = "container">
     <img src={coronaImage} className = "image" alt="COVID-19"/>
        <Cards data = {data}/>
        <CountryPicker handleCountryChange = {this.handleCountryChange}/>
        <Chart data = {data} country = {country}/>
      </div>
    )
  }
}

export default App
