import React, { useEffect, useState } from 'react';
import API_BASE_URL from '../config';

const Catalog = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/products`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => setProducts(data))
            .catch(err => console.error("Failed to fetch products:", err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Catalog</h2>
            {loading ? (
                <p className="text-center">Loading products...</p>
            ) : products.length === 0 ? (
                <p className="text-center">No products available.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {products.map((product) => (
                        <div key={product.id} className="border p-4 rounded shadow hover:shadow-md transition">
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            <p className="text-purple-700 font-bold">${product.price.toFixed(2)}</p>
                            <button className="mt-2 bg-purple-700 text-white px-4 py-1 rounded hover:bg-purple-800 transition">
                                View
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Catalog;