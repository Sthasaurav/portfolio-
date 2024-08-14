import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white pt-20 flex items-center justify-center py-8">
      <div className="w-full max-w-lg  shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <h1 className="text-3xl font-bold text-white mb-4">Contact Me</h1>
          <p className="text-white mb-6">
            Feel free to reach out to me through any of the methods below. I'm always open to discussing new opportunities and ideas!
          </p>

          <form action="mailto:your-email@example.com" method="POST" encType="multipart/form-data" className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
              <input type="text" id="name" name="name" required className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
              <input type="email" id="email" name="email" required className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
              <textarea id="message" name="message" rows="4" required className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Send Message</button>
          </form>
        </div>
        <div className="bg-gray-200 py-4 text-center">
          <p className="text-gray-700">Or connect with me on:</p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="https://www.linkedin.com/in/saurav-shrestha-b631231a3/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
            <a href="https://github.com/Sthasaurav" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">GitHub</a>
            <a href="sthasaurav57@example.com" className="text-blue-600 hover:underline">Email</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
