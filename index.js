import React, { Component } from 'react'
import './index.css'

const countryAndCapitalsList = [
    {
      id: 'NEW_DELHI',
      capitalDisplayText: 'New Delhi',
      country: 'India',
    },
    {
      id: 'LONDON',
      capitalDisplayText: 'London',
      country: 'United Kingdom',
    },
    {
      id: 'PARIS',
      capitalDisplayText: 'Paris',
      country: 'France',
    },
    {
      id: 'KATHMANDU',
      capitalDisplayText: 'Kathmandu',
      country: 'Nepal',
    },
    {
      id: 'HELSINKI',
      capitalDisplayText: 'Helsinki',
      country: 'Finland',
    },
  ]
export default class Capitals extends Component {
    state = {country:countryAndCapitalsList[0].country}

    onChangeOption = (event) => {
       // console.log(event.target.value)
        const filterCountry = countryAndCapitalsList.filter(eachOne => eachOne.capitalDisplayText === event.target.value);
        //this.setState(prevCountry => ({country:prevCountry.country[0].country}))
       // console.log(filterOption[0].country)
        this.setState({country:filterCountry[0].country})
    }

  render() {
    const {country} = this.state
    console.log(country)
    return (
      <div className='card'>
            <h1 className='heading'>Countries and Capitals</h1>
            <div className='option-text'>
            <select onChange={this.onChangeOption} className='select-options'>
                {countryAndCapitalsList.map(eachOne => (
                <option value = {eachOne.capitalDisplayText} key={eachOne.id}>{eachOne.capitalDisplayText}</option>
                
                    
                ))}
            </select>
                <p className='heading2'>Is the capital of which country?</p>
            </div>
            
            <p className='country-heading'>{country}</p>
      </div>
    )
  }
}
