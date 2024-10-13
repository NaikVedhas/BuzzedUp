import { Link } from "react-router-dom"
import { FaArrowRightToBracket } from "react-icons/fa6";


const Banner = () => {
  return (
    <div className="bg-black text-white p-4 ">
        <h1 className="blod  text-8xl pb-4 flex justify-center">Welcome To Our Blog</h1>
        <p className="italic text-l  text-gray-400 p-2 text-center mx-20">Start your blog journey today with us by joining a community of writers and readers who are passionate about sharing their stories and ideas. We offer everything from helpful tips to advance tutorials!</p>
        <div className=" flex justify-center hover:text-orange-500 text-l"><Link to="/services">Learn More </Link><FaArrowRightToBracket className="m-1"/></div>
    </div>
  )
}
export default Banner