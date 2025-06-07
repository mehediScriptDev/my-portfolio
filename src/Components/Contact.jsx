import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1 className="py-2 text-3xl text-anotherbg font-bold">
         
          Contact
        </h1>
        <p className="text-gray-300 py-3 text-xs">Feel fry to ask me anything..</p>
        <div className=" text-white min-h-screen py-6">
      <form className="w-full max-w-2xl">
        <h2 className="text-xl text-gray-300 font-semibold mb-6">Send me a Direct message</h2>

        {/* Name & Email */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1">
            <label className="block mb-1 text-sm">Name</label>
            <input
              type="text"
              placeholder="e.g. John Doe"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex-1">
            <label className="block mb-1 text-sm">Your Email</label>
            <input
              type="email"
              placeholder="e.g. john.doe@example.com"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Message Box */}
        <div className="mb-6">
          <label className="block mb-1 text-sm">Message</label>
          <textarea
            rows="6"
            placeholder="Write your message here..."
            className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Send Button */}
        <button
          type="submit"
          className="bg-textcl hover:bg-transparent hover:border-textcl hover:border-2 hover:text-textcl text-white font-semibold py-2 px-6 rounded-md border-transparent duration-200"
        >
          Send
        </button>
      </form>
    </div>
        
        </div>
    );
};

export default Contact;