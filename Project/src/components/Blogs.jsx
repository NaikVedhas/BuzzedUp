import BlogCard from "./BlogCard";
import useFetch from "./useFetch";

function Blogs() {
  
  const {data,error,isLoading} = useFetch(`http://localhost:3000/blogs`);
  
  
  return (
    <>
    <div>Caetgory of pages</div>
    {isLoading && <h1 className="text-orange-500 text-5xl">Loading</h1> }
    {error && <h1 className="text-orange-500 text-5xl">{error}</h1> }
    {data && <BlogCard  data={data} />}
    <div>Pagination</div>

    </>
  )
}
export default Blogs