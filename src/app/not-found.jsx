import React from 'react';

const notFound = () => {
    return (
         <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-black via-gray-900 to-gray-950 text-white px-6">
      <div className="text-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl max-w-lg w-full">
        
        <h1 className="text-8xl font-black bg-linear-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-400 leading-relaxed">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <a
          href="/"
          className="inline-block mt-8 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 font-semibold shadow-lg shadow-cyan-500/20"
        >
          Back To Home
        </a>
      </div>
    </div>
    );
};

export default notFound;