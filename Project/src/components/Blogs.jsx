import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaDribbble } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className='flex justify-between items-center px-8 py-4 bg-black text-white sticky top-0 z-50 shadow-lg'>

      {/* Logo Section */}
      <div className='flex-shrink-0'>
        <NavLink className='italic text-4xl ml-5 tracking-wide font-bold hover:scale-105 transition-transform duration-300' to='/'>
          Buzzed<b className='text-orange-500'>Up</b>
        </NavLink>
      </div>

      {/* Navigation Links */}
      <ul className='flex-grow flex justify-center gap-8 italic items-center text-lg'>
        <li className='hover:text-orange-500 transition-colors duration-300'>
          <NavLink to='/'
            className={({ isActive }) => (isActive ? 'text-orange-500 underline decoration-wavy' : 'text-white')}>
            Home
          </NavLink>
        </li>
        <li className='hover:text-orange-500 transition-colors duration-300'>
          <NavLink to='/services'
            className={({ isActive }) => (isActive ? 'text-orange-500 underline decoration-wavy' : 'text-white')}>
            Services
          </NavLink>
        </li>
        <li className='hover:text-orange-500 transition-colors duration-300'>
          <NavLink to='/profile'
            className={({ isActive }) => (isActive ? 'text-orange-500 underline decoration-wavy' : 'text-white')}>
            Authors
          </NavLink>
        </li>
        <li className='hover:text-orange-500 transition-colors duration-300'>
          <NavLink to='/blogs'
            className={({ isActive }) => (isActive ? 'text-orange-500 underline decoration-wavy' : 'text-white')}>
            Blogs
          </NavLink>
        </li>
        <li className='hover:text-orange-500 transition-colors duration-300'>
          <NavLink to='/about'
            className={({ isActive }) => (isActive ? 'text-orange-500 underline decoration-wavy' : 'text-white')}>
            About
          </NavLink>
        </li>
        <li className='hover:text-orange-500 transition-colors duration-300'>
          <NavLink to='/contact'
            className={({ isActive }) => (isActive ? 'text-orange-500 underline decoration-wavy' : 'text-white')}>
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Social Icons & Log In Button */}
      <div className='flex items-center gap-4'>
        <a className='hover:text-orange-500 hover:scale-110 transition-all duration-300' href="https://facebook.com">
          <FaFacebook size={24} />
        </a>
        <a className='hover:text-orange-500 hover:scale-110 transition-all duration-300' href="https://instagram.com">
          <FaInstagram size={24} />
        </a>
        <a className='hover:text-orange-500 hover:scale-110 transition-all duration-300' href="https://dribbble.com">
          <FaDribbble size={24} />
        </a>
        <button className='bg-orange-500 py-2 px-5 ml-6 rounded-full text-lg hover:bg-white hover:text-orange-500 shadow-md transition-all duration-300'>
          Log in
        </button>
      </div>
    </header>
  );
}

export default Navbar;
