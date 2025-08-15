import React from 'react'

const AllPlants = () => {
  return (
    <div className="max-w-7xl mx-auto h-screen p-6 bg-gray-500">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold text-gray-800">🌿 All Plants</h1>
        <div className="relative w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search plants..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <svg
            className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Scrollable table for small screens */}
      <div className="bg-white rounded-lg overflow-hidden shadow-md overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Plant</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Watering Frequency</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Example row */}
            <tr className="hover:bg-gray-100 transition-colors duration-150">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2ffea457-871a-4fd6-bf5d-d79293661035.png"
                    alt="Monstera Deliciosa"
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">Monstera Deliciosa</div>
                    <div className="text-sm text-gray-500">Swiss Cheese Plant</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs font-semibold rounded-full bg-green-100 text-green-800">
                  Tropical
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Every 7-10 days</td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" className="text-green-600 hover:text-green-900 mr-4">
                  Edit
                </a>
                <a href="#" className="text-green-600 hover:text-green-900">
                  View Details
                </a>
              </td>
            </tr>
            {/* Repeat for other plants */}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllPlants
