import {  useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import useFetch from "./useFetch";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Blogs() {
  const [category, setCategory] = useState('');
  const [url, setUrl] = useState(`https://api.jsonbin.io/v3/b/67192f1aad19ca34f8bd6629`);

  const categoryarr = ['All', 'AI', 'Work', 'Health', 'Fintech', 'Startups', 'Security', 'Enterprise'];

 

  const handleCategory = (c) => {
    if (c === 'All') {
      setCategory('');
    } else {
      setCategory(c);
    }
  };

  const { data, error, isLoading } = useFetch(url);
  const populardata = data ? data.filter((d) => d.popular === "yes") : [];

  const filteredData = category          //We perofmed filter on clinet side because api doesnt provide that functionality 
  ? data.filter((d) => d.category === category) // Filtering the data locally
  : data; // Show all data if category is not selected

  return (
    <>
      <div className="bg-gray-100 py-4">
        <div className="flex justify-center space-x-4">
          {categoryarr.map((c, i) => (
            <button
              key={i}
              onClick={() => handleCategory(c)}
              className={`px-6 py-2 rounded-full border-2 hover:bg-orange-500 hover:text-white`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Main section with BlogCards on left and Popular section on right */}
      <div className="flex justify-between mt-8 px-8">
        {/* Blog cards section */}
        <div className="w-3/4">
          {isLoading && (<div className="flex justify-center items-center">
              <AiOutlineLoading3Quarters className="text-orange-500 animate-spin text-8xl" />
            </div>)}
          {error && <h1 className="text-red-500 text-3xl text-center">{error}</h1>}
          {filteredData && <BlogCard data={filteredData} />}
        </div>

        {/* Popular section */}
        <div className="w-1/4 ml-4">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center border-b-2 border-orange-500 pb-2">Popular</h2>
            {populardata.length > 0 ? (
              populardata.map((d, i) => (
                <div className="mb-4 p-2 border-b" key={i}>
                  <div className="font-semibold">{d.title}</div>
                  <Link to={`/blogs/${d.id}`} className="flex items-center text-orange-500 hover:text-orange-700 mt-1">
                    Read more <FaArrowRightToBracket className="ml-2" />
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-gray-600 animate-pulse font-bold text-3xl" >Looking for Popular Blogs</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
