import React, { useState } from 'react';
import API_BASE_URL from '../config';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(null);

        try {
            const response = await fetch(`${API_BASE_URL}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccess("Your message has been sent successfully!");
                setFormData({ name: '', email: '', message: '' });
            } else {
                setSuccess("Something went wrong. Please try again later.");
            }
        } catch (error) {
            console.error("Error submitting contact form:", error);
            setSuccess("An error occurred. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-8 max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
            {success && <p className={`text-center mb-4 ${success.includes("successfully") ? "text-green-600" : "text-red-600"}`}>{success}</p>}
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
                    disabled={loading}
                    className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 w-full disabled:opacity-50"
                >
                    {loading ? "Sending..." : "Submit"}
                </button>
            </form>
        </div>
    );
};

export default Contact;