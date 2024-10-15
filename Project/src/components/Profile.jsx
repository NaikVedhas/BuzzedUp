import { useParams } from "react-router-dom"
import useFetch from "./useFetch";

const Profile = () => {
  
    const {id} = useParams();
    const {data,error,isLoading} = useFetch(`http://localhost:3000/blogs/${id}`);
    const { data:fulldata, error:fullerror, isLoading:fulllisLoading } = useFetch(`http://localhost:3000/blogs`);

    const artistBlog = fulldata ? fulldata.filter((d) => d.author===data.author) : [];


    const popularStatus = data.popular;
    return (
    <div>
        {isLoading && <h1>Loading...</h1>  }
        {error && <h1>{error}</h1>  }
        {data && (
            <div>
                <div>
                    <img src="https://i.ytimg.com/vi/TO3z3wQENPw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDFcJwZK6bNmJ8G0gx281_dY3I8kw" className="" alt="img" />
                </div>
                <div>{data.author}</div>
                {popularStatus==='yes' && <h1>Popular</h1> }
                Authors Blogs:
                {artistBlog.length>0 &&  artistBlog.map((a) => (
                    <div>{a.title}</div>
                ))}


            </div>            
        )}

    </div>
  )
}
export default Profile