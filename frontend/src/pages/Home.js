import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleShopNow = () => {
        navigate('/catalog');
    };

    return (
        <div className="p-8 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-800">
                Welcome to Elderwood & Ember
            </h2>
            <p className="text-lg mb-6">
                Your source for high-quality wizarding supplies and magical goods, crafted for every witch and wizard seeking excellence in their magical journey.
            </p>
            <button
                onClick={handleShopNow}
                className="bg-purple-700 text-white px-6 py-2 rounded hover:bg-purple-800 transition"
            >
                Shop Now
            </button>
        </div>
    );
};

export default Home;