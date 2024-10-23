import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaDribbble } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className='flex justify-between items-center px-6 py-4 max-w-full mx-auto bg-black text-white sticky top-0 z-50 shadow-md'>

      {/* Logo Section */}
      <div className='flex-shrink-0 mr-10'>
        <NavLink className='italic text-4xl ml-5' to='/'>Buzzed<b className='text-orange-500'>Up</b></NavLink>
      </div>

      {/* Navigation Links */}
      <ul className='flex-grow flex justify-center gap-6 italic items-center'>
        <li className='hover:text-orange-500'>
          <NavLink to='/' className={({ isActive }) => (isActive ? 'text-orange-500' : 'text-white')}>
            Home
          </NavLink>
        </li>
        <li className='hover:text-orange-500'>
          <NavLink to='/services' className={({ isActive }) => (isActive ? 'text-orange-500' : 'text-white')}>
            Services
          </NavLink>
        </li>
        <li className='hover:text-orange-500'>
          <NavLink to='/profile' className={({ isActive }) => (isActive ? 'text-orange-500' : 'text-white')}>
            Authors
          </NavLink>
        </li>
        <li className='hover:text-orange-500'>
          <NavLink to='/blogs' className={({ isActive }) => (isActive ? 'text-orange-500' : 'text-white')}>
            Blogs
          </NavLink>
        </li>
        <li className='hover:text-orange-500'>
          <NavLink to='/about' className={({ isActive }) => (isActive ? 'text-orange-500' : 'text-white')}>
            About
          </NavLink>
        </li>
        <li className='hover:text-orange-500'>
          <NavLink to='/contact' className={({ isActive }) => (isActive ? 'text-orange-500' : 'text-white')}>
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Social Icons & Log In Button */}
      <div className='flex items-center gap-4 ml-6'>
        <a className='hover:text-orange-500' href="https://facebook.com">
          <FaFacebook />
        </a>
        <a className='hover:text-orange-500' href="https://instagram.com">
          <FaInstagram />
        </a>
        <a className='hover:text-orange-500' href="https://dribbble.com">
          <FaDribbble />
        </a>
        <button className='bg-orange-500 py-2 px-4 rounded-xl hover:bg-white hover:text-orange-500 transition-all duration-300'>
          Log in
        </button>
      </div>
    </header>
  );
}

export default Navbar;
