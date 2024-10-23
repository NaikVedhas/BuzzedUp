import useFetch from "./useFetch";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link } from "react-router-dom";

const Profile = () => {
    const { authorData, error, isLoading } = useFetch(`https://api.jsonbin.io/v3/b/67194797ad19ca34f8bd7089`);


    return (
        <div className="bg-black text-white p-4">
            <h1 className="text-center text-4xl font-bold mb-10 text-orange-500">Meet Our Stellar Authors!</h1>
            {isLoading && (
                <div className="flex justify-center items-center">
                    <AiOutlineLoading3Quarters className="text-orange-500 animate-spin text-8xl" />
                </div>
            )}
            {error && <h1>{error}</h1>}
            {authorData && (

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {authorData.map((u) => (
                    <div key={u.authorid} className="mb-8 relative flex flex-col items-center">
                        <div className="relative">
                            <Link to={`${u.authorid}`}>
                                <img
                                    src={u.authorPic}
                                    alt="Author"
                                    className="w-64 h-64 rounded-full object-cover shadow-lg transition-transform duration-300 ease-in-out hover:scale-110" // Fixed hover effect
                                />
                                {u.popular === "yes" && (
                                    <div className="absolute top-0 right-0 bg-orange-500 text-white text-sm font-bold px-3 py-2 rounded-full animate-pulse shadow-lg">
                                        Popular
                                    </div>
                                )}
                            </Link>
                        </div>
                        <h2 className="text-xl italic mt-4">{u.name}</h2>
                    </div>
                ))}
            </div>
            )}
        </div>
    );
}

export default Profile;
