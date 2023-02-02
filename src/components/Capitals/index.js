import {Component} from 'react'
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

// Write your code here

class Capitals extends Component {
  state = {activeId: countryAndCapitalsList[0].id}

  change = Event => {
    this.setState({activeId: Event.target.value})
  }

  render() {
    const {activeId} = this.state
    const final = countryAndCapitalsList.filter(each => each.id === activeId)[0]
    return (
      <div className="main">
        <div className="sub">
          <h1>Countries and Capitals</h1>
          <select id="capital" onChange={this.change}>
            {countryAndCapitalsList.map(each => (
              <option
                id={each.id}
                value={each.id}
                key={each.capitalDisplayText}
              >
                {each.capitalDisplayText}
              </option>
            ))}
          </select>
          <label htmlFor="capital">is capital of which country</label>
          <p>{final.country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
