// src/App.jsx
import { useState } from 'react'
import CountryList from './components/CountryList'

function App() {
  const [countries, setCountries] = useState([])

  // Country Actions
  const addCountry = () => {
    const name = prompt('Enter country name:')
    if (name) {
      setCountries([...countries, { id: Date.now(), name, states: [] }])
    }
  }

  const editCountry = (countryId, newName) => {
    setCountries(
      countries.map(country =>
        country.id === countryId ? { ...country, name: newName } : country
      )
    )
  }

  const deleteCountry = countryId => {
    if (window.confirm('Delete this country and all its states/cities?')) {
      setCountries(countries.filter(country => country.id !== countryId))
    }
  }

  // State Actions
  const addState = countryId => {
    const name = prompt('Enter state name:')
    if (name) {
      setCountries(
        countries.map(country =>
          country.id === countryId
            ? {
                ...country,
                states: [...country.states, { id: Date.now(), name, cities: [] }]
              }
            : country
        )
      )
    }
  }

  const editState = (countryId, stateId, newName) => {
    setCountries(
      countries.map(country =>
        country.id === countryId
          ? {
              ...country,
              states: country.states.map(state =>
                state.id === stateId ? { ...state, name: newName } : state
              )
            }
          : country
      )
    )
  }

  const deleteState = (countryId, stateId) => {
    if (window.confirm('Delete this state and all its cities?')) {
      setCountries(
        countries.map(country =>
          country.id === countryId
            ? {
                ...country,
                states: country.states.filter(state => state.id !== stateId)
              }
            : country
        )
      )
    }
  }

  // City Actions
  const addCity = (countryId, stateId) => {
    const name = prompt('Enter city name:')
    if (name) {
      setCountries(
        countries.map(country =>
          country.id === countryId
            ? {
                ...country,
                states: country.states.map(state =>
                  state.id === stateId
                    ? {
                        ...state,
                        cities: [...state.cities, { id: Date.now(), name }]
                      }
                    : state
                )
              }
            : country
        )
      )
    }
  }

  const deleteCity = (countryId, stateId, cityId) => {
    if (window.confirm('Delete this city?')) {
      setCountries(
        countries.map(country =>
          country.id === countryId
            ? {
                ...country,
                states: country.states.map(state =>
                  state.id === stateId
                    ? {
                        ...state,
                        cities: state.cities.filter(city => city.id !== cityId)
                      }
                    : state
                )
              }
            : country
        )
      )
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Country, State, and City Management
      </h1>
      
      <button
        onClick={addCountry}
        className="mb-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200"
      >
        + Add Country
      </button>

      <CountryList
        countries={countries}
        onEditCountry={editCountry}
        onDeleteCountry={deleteCountry}
        onAddState={addState}
        onEditState={editState}
        onDeleteState={deleteState}
        onAddCity={addCity}
        onDeleteCity={deleteCity}
      />
    </div>
  )
}

export default App