import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black text-white grid grid-cols-4 p-8">
      
      {/* About Section */}
      <div className="m-3 p-2">
        <p className="text-gray-500 font-semibold">About Us</p> 
        <ul>
          <li><Link to={"/"}>Our Story</Link></li>
          <li><Link to={"/"}>Team</Link></li>
          <li><Link to={"/"}>Careers</Link></li>
          <li><Link to={"/"}>Privacy Policy</Link></li>
          <li><Link to={"/"}>Terms of Service</Link></li>
          <li><Link to={"/"}>Contact</Link></li>
        </ul>
      </div>

      {/* Categories Section */}
      <div className="m-3 p-2">
        <p className="text-gray-500 font-semibold">Categories</p> 
        <ul>
          <li><Link to={"/"}>Technology</Link></li>
          <li><Link to={"/"}>Health</Link></li>
          <li><Link to={"/"}>Business</Link></li>
          <li><Link to={"/"}>Lifestyle</Link></li>
          <li><Link to={"/"}>Travel</Link></li>
          <li><Link to={"/"}>Entertainment</Link></li>
        </ul>
      </div>

      {/* Quick Links Section */}
      <div className="m-3 p-2">
        <p className="text-gray-500 font-semibold">Quick Links</p>  
        <ul>
          <li><Link to={"/"}>Latest Posts</Link></li>
          <li><Link to={"/"}>Popular Posts</Link></li>
          <li><Link to={"/"}>Write for Us</Link></li>
          <li><Link to={"/"}>Advertise</Link></li>
          <li><Link to={"/"}>FAQ</Link></li>
        </ul>
      </div>

      {/* Subscribe Section */}
      <div className="m-3 p-2">
        <p className="text-gray-500 font-semibold mb-3">Subscribe to our Newsletter</p> 
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Subscribed!");
          }}
        >
          <input 
            type="email"
            className="p-2 w-full rounded text-black"
            placeholder="me@gmail.com"
            required
          />
          <button 
            type="submit" 
            className="mt-2 p-2 bg-orange-500 text-white rounded hover:bg-orange-600 w-full"
          >
            Subscribe
          </button>
        </form>
      </div>

    </div>
  )
}

export default Footer;
