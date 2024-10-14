import { Link } from "react-router-dom"
import { IoPersonSharp } from "react-icons/io5";

const BlogCard = ({data}) => {

  

  return (
    <div className="grid grid-cols-3 gap-8 m-4">
      {data && data.map((d) => (
        <Link key={d.id}>
          <div className="rounded-lg p-2 shadow-xl  ">
            <img className="w-full " src={d.image} alt="img" />
            <h1 className="text-xl italic mx-1">{d.title}</h1>
            <p className="flex text-blue-600"><IoPersonSharp className="m-1"/> {d.author}</p>
            <p className="mx-1">Published on: {d.published_date}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
export default BlogCard