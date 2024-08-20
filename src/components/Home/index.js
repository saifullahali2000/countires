import {Component} from 'react'

import './index.css'

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

class Home extends Component {
  state = {
    list: initialCountriesList,
  }

  onClickVisited = id => {
    this.setState(prevState => ({
      list: prevState.list.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isVisited: !eachItem.isVisited}
        }
        return eachItem
      }),
    }))
  }

  onClickRemove = id => {
    this.setState(prevState => ({
      list: prevState.list.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isVisited: !eachItem.isVisited}
        }
        return eachItem
      }),
    }))
  }

  render() {
    const {list} = this.state

    return (
      <div className="bg-container">
        <h1 className="countries-head">Countries</h1>
        <ul className="lists-item">
          {list.map(eachItem => (
            <li key={eachItem.id}>
              <div className="list-item">
                <p className="name-text">{eachItem.name}</p>
                {eachItem.isVisited === false ? (
                  <button
                    type="button"
                    onClick={() => this.onClickVisited(eachItem.id)}
                  >
                    Vist
                  </button>
                ) : (
                  <p className="visted-text">Visited</p>
                )}
              </div>
              <hr />
            </li>
          ))}
        </ul>
        <h1 className="countries-head">Visited Countries</h1>
        <ul className="list-container">
          {list.map(eachItem =>
            eachItem.isVisited ? (
              <li className="list-item-visited" key={eachItem.id}>
                <img
                  src={eachItem.imageUrl}
                  alt="thumbnail"
                  className="thumnail-image"
                />
                <div className="para-button">
                  <p>{eachItem.name}</p>
                  <button
                    type="button"
                    onClick={() => this.onClickRemove(eachItem.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ) : (
              ''
            ),
          )}
        </ul>
        {list.length === 0 && (
          <h1 className="no-visited">No Countries Visited Yet</h1>
        )}
      </div>
    )
  }
}

export default Home
