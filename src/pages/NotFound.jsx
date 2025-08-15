import React from 'react'

const NotFound = () => {
  return (
    <div className="max-w-7xl mx-auto p-10">
      <div className="max-w-md mx-auto text-center bg-white rounded-3xl shadow-lg p-10">

        <div className="mb-6">
          <svg className="mx-auto w-40 h-40 text-green-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 2C16 18 12 38 12 38s8-6 20-6 20 6 20 6-4-20-20-36z" stroke-linecap="round" stroke-linejoin="round" />
            <rect x="12" y="38" width="40" height="20" rx="5" ry="5" stroke-linejoin="round" />
            <line x1="32" y1="38" x2="32" y2="58" stroke-linecap="round" />
          </svg>
        </div>

        <h1 className="text-6xl font-extrabold text-green-700 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Oops! This plant hasn't grown here yet.</h2>
        <p className="mb-6 text-gray-600 px-4">
          The page you’re looking for doesn’t exist in our garden. Maybe try watering your navigation and try again?
        </p>

        <a href="/" className="inline-block px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition">
          Go Back to Home
        </a>
      </div>
    </div>
  )
}

export default NotFound
