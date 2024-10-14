import { Link } from "react-router-dom"
import { IoPersonSharp } from "react-icons/io5";

const BlogCard = ({data}) => {

  

  return (
    <div className="grid grid-cols-3 gap-8 m-4">
      {data && data.map((d) => (
        <div key={d.id}>
          <div className="rounded-lg p-2 shadow-xl  ">
            <Link to={`/blogs/${d.id}`} ><img className="w-full " src={d.image} alt="img" /></Link>
            <h1 className="text-xl italic mx-1">{d.title}</h1>
            <Link to={`/profile/${d.id}`} className="flex text-blue-600"><IoPersonSharp className="m-1"/> {d.author}</Link>
            <p className="mx-1">Published on: {d.published_date}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
export default BlogCard