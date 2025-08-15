import React from 'react'

const PlantDetails = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Plant Detail Header */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <div>
              <h1 className="text-3xl font-extrabold drop-shadow">
                Alphonso Mango Tree
              </h1>
              <p className="text-lg opacity-90 mt-2">
                King of Mangoes - Owned by John Doe
              </p>
            </div>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-md text-sm font-medium transition duration-300 flex items-center shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
                Edit Plant
              </button>
              <button className="bg-white text-emerald-700 border border-white hover:bg-emerald-50 px-6 py-2 rounded-md text-sm font-medium transition duration-300 shadow">
                Back to My Plants
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Plant Detail Content */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Plant Images Column */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition duration-300">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b56011c1-ddf5-4792-9227-4ef1496f00cb.png"
                  alt="Large Alphonso mango tree with golden fruits in full sunlight"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-2">
              {/* Quick Status Card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg mb-6 p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {/* Last Watered */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
                    <div className="flex items-center justify-between gap-4">
                      <div className="bg-blue-50 dark:bg-blue-900 p-3 rounded-full shadow-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-blue-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 pb-2 text-center">
                          Last Watered
                        </p>
                        <div className="flex items-center space-x-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          12 hours left
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Next Watering */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
                    <div className="flex items-center justify-between gap-4">
                      <div className="bg-yellow-50 dark:bg-yellow-900 p-3 rounded-full shadow-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-yellow-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 pb-2 text-center">
                          Next Watering
                        </p>
                        <div className="flex items-center space-x-2 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-3 py-1 rounded-full text-xs font-medium">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          12 hours left
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Plant Health */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
                    <div className="flex items-center justify-between gap-4">
                      <div className="bg-green-50 dark:bg-green-900 p-3 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-300">
                          Plant Health
                        </p>
                        <p className="text-lg font-semibold text-emerald-600 dark:text-emerald-400">
                          Excellent
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Care Level */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
                    <div className="flex items-center justify-between gap-4">
                      <div className="bg-green-50 dark:bg-green-900 p-3 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-300">
                          Care Level
                        </p>
                        <p className="text-lg font-semibold text-emerald-600 dark:text-emerald-400">
                          Moderate
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Watering Frequency */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
                    <div className="flex items-center justify-between gap-4">
                      <div className="bg-green-50 dark:bg-green-900 p-3 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-300">
                          Watering Frequency
                        </p>
                        <p className="text-lg font-semibold text-emerald-600 dark:text-emerald-400">
                          Every 7-10 days
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Plant Details Column */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Description
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      The Alphonso mango, often called the "King of Mangoes", is
                      a premium variety known for its rich, creamy texture and
                      aromatic sweetness. This particular tree was planted in
                      March 2020 and has grown to 8 feet tall, now producing
                      20-30 fruits per season. Its unique flavor profile
                      includes notes of honey and citrus with minimal fiber.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PlantDetails
