import {Link} from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
const Navbar = () => {
  
  
  return (
    <header className='  flex justify-center items-center px-3 py-6 max-w-full mx-auto bg-black text-white'>
      <div className='my-4 mr-60 '>
        <Link to='/'>My Logo</Link>
      </div>
      <ul className='my-4 mx-20 flex gap-6 italic item-center'>
        <li className='hover:text-orange-500' ><Link to='/'>Home</Link></li>
        <li className='hover:text-orange-500'><Link to='/services'>Services</Link></li>
        <li className='hover:text-orange-500'><Link to='/blogs'>Blogs</Link></li>
        <li className='hover:text-orange-500'><Link to='/about'>About</Link></li>
        <li className='hover:text-orange-500'><Link to='/contact'>Contact</Link></li>
      </ul>
      <div className=' my-4 ml-48 flex gap-4 items-center' >
        <a className='hover:text-orange-500' href="https://facebook.com"><FaFacebook/></a>
        <a className='hover:text-orange-500' href="https://facebook.com"><FaInstagram/></a>
        <a className='hover:text-orange-500' href="https://facebook.com"><FaDribbble/></a>
      </div>
      <button className='bg-orange-500 py-2 px-4  my-4 ml-8 rounded-xl hover:bg-white hover:text-orange-500 transition-all duration-300'>Log in</button>
    </header>


  )
}
export default Navbar