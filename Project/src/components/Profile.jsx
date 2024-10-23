import useFetch from "./useFetch";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link } from "react-router-dom";

const Profile = () => {
    const { data, error, isLoading } = useFetch(`https://api.jsonbin.io/v3/b/671696eaacd3cb34a89abb00`);

    const uniqueAuthors = data
        ? data.map(blog => ({ author: blog.author, authorPic: blog.authorPic, popularStatus: blog.popular,id:blog.id }))
            .filter((value, index, self) =>
                index === self.findIndex((t) => t.author === value.author) // Filter out duplicates based on the author name
            )
        : [];

    return (
        <div className="bg-black text-white p-4">
            {isLoading && (
                <div className="flex justify-center items-center">
                    <AiOutlineLoading3Quarters className="text-orange-500 animate-spin text-8xl" />
                </div>
            )}
            {error && <h1>{error}</h1>}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {uniqueAuthors.map((u, index) => (
                    <div key={index} className="mb-6 relative flex flex-col items-center">
                        <div className="relative">
                            <Link to={`${u.id}`}>
                            <img
                                src={u.authorPic}
                                alt="Author"
                                className="w-56 h-56 rounded-full object-cover shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110" // Added hover scale
                                />
                            {u.popularStatus === "yes" && (
                                <div className="absolute top-0 right-0 bg-orange-500 text-white text-sm font-bold px-3 py-2 rounded-full animate-pulse shadow-lg">
                                    Popular
                                </div>
                            )}
                            </Link>
                        </div>
                        <h2 className="text-lg mt-2">{u.author}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Profile;
