import React, { useEffect, useState } from 'react';

const Catalog = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/products")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Catalog</h2>
            {products.length === 0 ? (
                <p className="text-center">Loading products...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {products.map((product) => (
                        <div key={product.id} className="border p-4 rounded shadow hover:shadow-md">
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            <p className="text-purple-700 font-bold">${product.price.toFixed(2)}</p>
                            <button className="mt-2 bg-purple-700 text-white px-4 py-1 rounded hover:bg-purple-800">
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