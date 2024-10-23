import useFetch from "./useFetch";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link } from "react-router-dom";

const Profile = () => {
    const { data, error, isLoading } = useFetch(`https://api.jsonbin.io/v3/b/67192f1aad19ca34f8bd6629`);

    const uniqueAuthors = data
        ? data.map(blog => ({ author: blog.author, authorPic: blog.authorPic, popularStatus: blog.popular, id: blog.id }))
            .filter((value, index, self) =>
                index === self.findIndex((t) => t.author === value.author) // Filter out duplicates based on the author name
            )
        : [];

    return (
        <div className="bg-black text-white p-4">
            <h1 className="text-center text-4xl font-bold mb-10 text-orange-500">Meet Our Stellar Authors!</h1>
            {isLoading && (
                <div className="flex justify-center items-center">
                    <AiOutlineLoading3Quarters className="text-orange-500 animate-spin text-8xl" />
                </div>
            )}
            {error && <h1>{error}</h1>}

            {/* Catchy Heading */}

            {/* Display authors in a grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {uniqueAuthors.map((u, index) => (
                    <div key={index} className="mb-8 relative flex flex-col items-center">
                        <div className="relative">
                            <Link to={`${u.id}`}>
                                <img
                                    src={u.authorPic}
                                    alt="Author"
                                    className="w-64 h-64 rounded-full object-cover shadow-lg transition-transform duration-300 ease-in-out hover:scale-110" // Fixed hover effect
                                />
                                {u.popularStatus === "yes" && (
                                    <div className="absolute top-0 right-0 bg-orange-500 text-white text-sm font-bold px-3 py-2 rounded-full animate-pulse shadow-lg">
                                        Popular
                                    </div>
                                )}
                            </Link>
                        </div>
                        <h2 className="text-lg mt-4">{u.author}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Profile;
