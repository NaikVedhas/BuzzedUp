import { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    setFormSubmitted(true);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">Contact Us</h1>

        {!formSubmitted ? (
          <form className="bg-white shadow-md rounded-lg p-8" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-6">
              <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-500"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-500"
                placeholder="Your Email"
                required
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-500"
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        ) : (
          <div className="bg-white shadow-md rounded-lg p-8 text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Thank You!</h2>
            <p className="text-gray-600 text-lg">
              Your message has been sent. We'll get back to you as soon as possible.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactUs;
