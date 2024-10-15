import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaDribbble } from 'react-icons/fa';

function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
      {/* Main Content */}
      <div className="text-center">
        <h1 className="text-9xl font-bold italic text-orange-500 mb-4">
          404
        </h1>
        <p className="text-2xl font-semibold mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="mb-12 text-gray-400">
          It seems we can't find the page you're looking for. Maybe try one of these?
        </p>

        {/* Navigation Buttons */}
        <div className="flex justify-center space-x-6">
          <Link to="/" className="bg-orange-500 py-3 px-8 rounded-lg hover:bg-white hover:text-orange-500 transition-all duration-300">
            Go Home
          </Link>
          <Link to="/blogs" className="bg-white py-3 px-8 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300">
            Read Blogs
          </Link>
        </div>
      </div>

      {/* Popular Links or Socials */}
      <div className="mt-12 flex space-x-6">
        <a href="https://facebook.com" className="text-white hover:text-orange-500 text-2xl"><FaFacebook /></a>
        <a href="https://instagram.com" className="text-white hover:text-orange-500 text-2xl"><FaInstagram /></a>
        <a href="https://dribbble.com" className="text-white hover:text-orange-500 text-2xl"><FaDribbble /></a>
      </div>
    </div>
  );
}

export default NotFound;
