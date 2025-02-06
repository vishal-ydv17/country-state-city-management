// src/components/CityList.jsx
const CityList = ({ state, onAddCity, onDeleteCity }) => {
  return (
    <div className="ml-6 space-y-2">
      <button
        onClick={onAddCity}
        className="mb-2 bg-purple-500 hover:bg-purple-600 text-white font-medium py-1 px-3 rounded-md transition-colors duration-200 text-sm"
      >
        + Add City
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {state.cities.map(city => (
          <div key={city.id} className="bg-white p-3 rounded-md shadow-sm flex items-center justify-between">
            <span className="text-gray-600">{city.name}</span>
            <button
              onClick={() => onDeleteCity(city.id)}
              className="text-red-500 hover:text-red-600 transition-colors duration-200 text-sm"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CityList