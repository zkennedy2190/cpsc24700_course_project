import React, { useState } from 'react';

const WelcomeModal = () => {
    const [show, setShow] = useState(true);

    if (!show) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow text-center">
                <h2 className="text-xl font-bold mb-2">Welcome to Elderwood & Ember</h2>
                <p className="mb-4">Explore magical goods and wizarding supplies! Use the navigation above to explore.</p>
                <button
                    className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800"
                    onClick={() => setShow(false)}
                >
                    Enter
                </button>
            </div>
        </div>
    );
};

export default WelcomeModal;