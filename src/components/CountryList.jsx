import StateList from './StateList'

const CountryList = ({
  countries,
  onEditCountry,
  onDeleteCountry,
  onAddState,
  onEditState,
  onDeleteState,
  onAddCity,
  onDeleteCity
}) => {
  return (
    <div className="space-y-6">
      {countries.map(country => (
        <div key={country.id} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-700">{country.name}</h2>
            <div className="space-x-2">
              <button
                onClick={() => onEditCountry(country.id, prompt('New country name:', country.name))}
                className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors duration-200"
              >
                Edit
              </button>
              <button
                onClick={() => onDeleteCountry(country.id)}
                className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200"
              >
                Delete
              </button>
            </div>
          </div>
          
          <StateList
            country={country}
            onAddState={() => onAddState(country.id)}
            onEditState={(stateId, newName) => onEditState(country.id, stateId, newName)}
            onDeleteState={stateId => onDeleteState(country.id, stateId)}
            onAddCity={stateId => onAddCity(country.id, stateId)}
            onDeleteCity={(stateId, cityId) => onDeleteCity(country.id, stateId, cityId)}
          />
        </div>
      ))}
    </div>
  )
}

export default CountryList
