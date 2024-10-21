import { useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";

const Profile = () => {
  const { id } = useParams();
  const { data: fulldata, error: fullerror, isLoading: fulllisLoading } = useFetch(`https://api.jsonbin.io/v3/b/671696eaacd3cb34a89abb00`);


  const data = fulldata ? fulldata.find((d) => d.id === Number(id)) : null;

  const artistBlog = fulldata ? fulldata.filter((d) => d.author === data.author) : [];

  const popularStatus = data ? data.popular : null;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      {fulllisLoading && <h1>Loading...</h1>}
      {fullerror && <h1>{fullerror}</h1>}
      {data && (
        <div className="w-full flex flex-col items-center p-8 relative">
          {/* Circular Profile Image */}
          <div className="mb-6 relative">
            <img
              src={data.authorPic}
              alt="Author"
              className="w-60 h-60 rounded-full object-cover shadow-lg"
            />

            {popularStatus === "yes" && (
              <div className="absolute top-0 right-0 bg-orange-500 text-white text-sm font-bold px-4 py-1 rounded-full animate-pulse shadow-lg glow">
                Popular
              </div>
            )}
          </div>

          {/* Author Information */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">{data.author}</h1>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="https://www.instagram.com/" target="_blank">
                <FaSquareInstagram size={28} />
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                <FaFacebookSquare size={28} />
              </a>
              <a href="https://www.x.com/" target="_blank">
                <FaSquareXTwitter size={28} />
              </a>
            </div>
            <p className="text-gray-300 mt-4 max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda qui consectetur quod omnis dicta expedita fuga.
              <br/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consequatur totam voluptatibus, ratione qui neque iste iusto iure est magni voluptate molestiae vel ullam incidunt in. Quis, sequi tempore voluptas repudiandae minus, reiciendis hic magni dolore ex nostrum pariatur animi! Iusto quisquam natus nam.
            </p>
          </div>

          {/* Author's Blogs Section */}
          <div className="w-full max-w-3xl">
            <h2 className="mt-8 text-3xl font-semibold">Author's Blogs:</h2>
            <div className="mt-4">
              {artistBlog.length > 0
                ? artistBlog.map((a, i) => (
                    <div className="rounded-lg shadow-xl p-8 mb-4 bg-gray-800" key={i}>
                      <div className="font-semibold text-xl">{a.title}</div>
                      <Link to={`/blogs/${a.id}`} className="flex items-center text-orange-500 hover:text-orange-700 mt-2">
                        Read more <FaArrowRightToBracket className="ml-2" />
                      </Link>
                    </div>
                  ))
                : "No blogs by this author"}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
