import {Link} from 'react-router-dom'
const Navbar = () => {
  
  
  return (
    <header className=' flex justi bg-black text-white'>
      <div>
        <Link to='/'>Logo</Link>
      </div>
      <ul className='flex '>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
      <div>
        
      </div>
    </header>


  )
}
export default Navbar