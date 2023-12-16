import {Component} from 'react'

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

// Write your code here

class Capitals extends Component {
  state = {
    capitalValueId: countryAndCapitalsList[0].id,
  }

  changeOptionValue = event => {
    this.setState({capitalValueId: event.target.value})
  }

  getCountry = capitalValueId => {
    const countryCapital = countryAndCapitalsList.find(
      eachValue => capitalValueId === eachValue.id,
    )
    console.log(countryCapital)
    return countryCapital.country
  }

  render() {
    const {capitalValueId} = this.state
    console.log(capitalValueId)

    const country = this.getCountry(capitalValueId)
    return (
      <div>
        <div>
          <h1>Countries and Capitals</h1>
          <select onChange={this.changeOptionValue} value={capitalValueId}>
            {countryAndCapitalsList.map(eachOne => (
              <option key={eachOne.id} value={eachOne.id}>
                {eachOne.capitalDisplayText}
              </option>
            ))}
          </select>
          <span> is capital of which country</span>
          <h1>{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
