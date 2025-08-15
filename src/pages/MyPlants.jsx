import React from 'react'

const MyPlants = () => {
  return (
    <div>
      <div
        className="plant-card bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition duration-300"
        data-plant-id="1"
      >
        <div className="relative">
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b56011c1-ddf5-4792-9227-4ef1496f00cb.png"
            alt="Ripe Alphonso mangoes with golden yellow skin hanging from a tree branch"
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-2 right-2 bg-emerald-600 text-white text-xs px-2 py-1 rounded-full">
            Tropical
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Alphonso Mango</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Planted: March 2020</p>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Known as the 'King of Mangoes', prized for its rich, creamy texture and sweet flavor.
          </p>

          <div className="mt-4 flex items-center justify-between">
            {/* Tag */}
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              Moderate Care
            </span>

            {/* Action Buttons */}
            <div className="flex space-x-2">
              {/* Update Button */}
              <button
                onClick={() => updatePlant(1)}
                className="p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition"
                title="Update Plant"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5h2m2 0h2m-6 4h6m-6 4h6m-6 4h6m2 0h2M4 5h2m-2 4h2m-2 4h2m-2 4h2"
                  />
                </svg>
              </button>

              {/* Delete Button */}
              <button
                onClick={() => openDeleteModal(1)}
                className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
                title="Delete Plant"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default MyPlants
