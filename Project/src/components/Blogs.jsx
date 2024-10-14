import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import useFetch from "./useFetch";
import { FaArrowRightToBracket } from "react-icons/fa6";

function Blogs() {
  const [category, setCategory] = useState('');
  const [url, setUrl] = useState(`http://localhost:3000/blogs`);

  const categoryarr = ['All', 'AI', 'Work', 'Health', 'Fintech', 'Startups', 'Security', 'Enterprise'];

  useEffect(() => {
    setUrl(`http://localhost:3000/blogs?category=` + category);
  }, [category]);

  const handleCategory = (c) => {
    if (c === 'All') {
      setCategory('');
    } else {
      setCategory(c);
    }
  };

  const { data, error, isLoading } = useFetch(url);
  const populardata = data ? data.filter((d) => d.popular === "yes") : [];

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
          {isLoading && <h1 className="text-orange-500 text-5xl text-center">Loading...</h1>}
          {error && <h1 className="text-red-500 text-3xl text-center">{error}</h1>}
          {data && <BlogCard data={data} />}
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
              <p className="text-gray-600">No popular blogs available.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
