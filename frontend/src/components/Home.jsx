import React from 'react';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-teal-400 to-blue-600 text-white text-center p-4">
      <div className="bg-white rounded-lg p-6 shadow-xl max-w-lg mx-auto animate-fade-in">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 animate-slide-down">Thank You for Your Submission!</h1>
        <p className="text-lg text-gray-600 mb-6 font-serif animate-slide-up">Your details have been successfully submitted. We will get back to you shortly!</p>
        <div className="flex justify-center">
          <button
            className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition duration-300 transform hover:scale-105 animate-pulse"
            onClick={() => window.location.href = '/'}
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

/* CSS Animations */
/* Add the following animations to your CSS or Tailwind configuration */
