import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message submitted successfully!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="p-8 max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="w-full p-2 border rounded"
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full p-2 border rounded"
                />
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    required
                    className="w-full p-2 border rounded"
                />
                <button
                    type="submit"
                    className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 w-full"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;