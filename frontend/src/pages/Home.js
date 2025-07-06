import React from 'react';

const Home = () => {
    return (
        <div className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Welcome to Elderwood & Ember</h2>
            <p className="text-lg mb-6">Your source for high-quality wizarding supplies and magical goods.</p>
            <button className="bg-purple-700 text-white px-6 py-2 rounded hover:bg-purple-800">
                Shop Now
            </button>
        </div>
    );
};

export default Home;