import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaDribbble } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className='flex justify-between items-center px-3 py-4 max-w-full mx-auto bg-black text-white sticky top-0 z-50 shadow-md'>

      <div className='my-8 mr-60'>
        <NavLink className='italic text-4xl ml-5' to='/'>Buzzed<b className='text-orange-500'>Up</b></NavLink>
      </div>
      <ul className='my-4 mx-20 flex gap-6 italic items-center'>
        <li className='hover:text-orange-500'><NavLink to='/'
        className={({ isActive }) => (isActive ? 'text-orange-500' : 'text-white')}
        >Home</NavLink></li>
        <li className='hover:text-orange-500'><NavLink to='/services'
        className={({ isActive }) => (isActive ? 'text-orange-500' : 'text-white')}
        >Services</NavLink></li>
        <li className='hover:text-orange-500'><NavLink to='/blogs'
        className={({ isActive }) => (isActive ? 'text-orange-500' : 'text-white')}
        >Blogs</NavLink></li>
        <li className='hover:text-orange-500'><NavLink to='/about'
        className={({ isActive }) => (isActive ? 'text-orange-500' : 'text-white')}
        >About</NavLink></li>
        <li className='hover:text-orange-500'><NavLink to='/contact'
        className={({ isActive }) => (isActive ? 'text-orange-500' : 'text-white')}
        >Contact</NavLink></li>
      </ul>
      <div className='my-4 ml-48 flex gap-4 items-center'>
        <a className='hover:text-orange-500' href="https://facebook.com"><FaFacebook /></a>
        <a className='hover:text-orange-500' href="https://instagram.com"><FaInstagram /></a>
        <a className='hover:text-orange-500' href="https://dribbble.com"><FaDribbble /></a>
      </div>
      <button className='bg-orange-500 py-2 px-4 my-4 ml-8 rounded-xl hover:bg-white hover:text-orange-500 transition-all duration-300'>Log in</button>
    </header>
  );
}

export default Navbar;
