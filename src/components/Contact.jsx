import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
        <p className="mt-4 text-lg text-gray-500">
          We'd love to hear from you! Fill out the form below and we will get
          back to you as soon as possible.
        </p>
      </div>

      <div className="mt-12 max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <form action="#" method="POST" className="space-y-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            ></textarea>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full inline-flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Address Section */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold text-gray-900">Our Office</h3>
        <p className="mt-4 text-lg text-gray-500">
          1234 Company Street, Business City, 12345, Country
        </p>
      </div>

      {/* Social Media Links */}
      <div className="mt-8 flex justify-center space-x-6">
        <a href="https://www.linkedin.com" className="text-gray-500 hover:text-gray-900">
          <i className="fab fa-linkedin text-2xl"></i>
        </a>
        <a href="https://twitter.com" className="text-gray-500 hover:text-gray-900">
          <i className="fab fa-twitter text-2xl"></i>
        </a>
        <a href="https://facebook.com" className="text-gray-500 hover:text-gray-900">
          <i className="fab fa-facebook text-2xl"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;