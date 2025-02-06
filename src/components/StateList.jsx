import CityList from './CityList'

const StateList = ({
  country,
  onAddState,
  onEditState,
  onDeleteState,
  onAddCity,
  onDeleteCity
}) => {
  return (
    <div className="ml-6 space-y-4">
      <button
        onClick={onAddState}
        className="mb-4 bg-green-500 hover:bg-green-600 text-white font-medium py-1 px-3 rounded-md transition-colors duration-200"
      >
        + Add State
      </button>

      {country.states.map(state => (
        <div key={state.id} className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-medium text-gray-600">{state.name}</h3>
            <div className="space-x-2">
              <button
                onClick={() => onEditState(state.id, prompt('New state name:', state.name))}
                className="px-2 py-1 bg-yellow-400 text-white rounded-md hover:bg-yellow-500 transition-colors duration-200 text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => onDeleteState(state.id)}
                className="px-2 py-1 bg-red-400 text-white rounded-md hover:bg-red-500 transition-colors duration-200 text-sm"
              >
                Delete
              </button>
            </div>
          </div>

          <CityList
            state={state}
            onAddCity={() => onAddCity(state.id)}
            onDeleteCity={cityId => onDeleteCity(state.id, cityId)}
          />
        </div>
      ))}
    </div>
  )
}

export default StateList
