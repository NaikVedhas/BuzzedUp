import { useParams,Link } from 'react-router-dom';
import useFetch from './useFetch';
import { BsClockFill } from "react-icons/bs";
import { FaArrowRightToBracket } from "react-icons/fa6";

const BlogDetails = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useFetch(`http://localhost:3000/blogs/${id}`);
  const { data:fulldata, error:fullerror, isLoading:fulllisLoading } = useFetch(`http://localhost:3000/blogs`);
  
  const populardata = fulldata ? fulldata.filter((d) => d.popular === "yes" && d.id!==id ) : [];



  if(!data.id){
    return (
      <div className=' bg-black text-white min-h-screen '>
      <h1 className='text-9xl italic flex justify-center '>No Blog found </h1>
      <Link to={'/'}  className='flex m-9 p-4 justify-center text-2xl hover:text-orange-500'>Go to home</Link>
      </div>
    ) 
  }
  return (
    <div>
    <div className="flex justify-center items-center min-h-screen">  
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      
      {data.id && (
        <div className="bg-white rounded-lg shadow-xl p-8 w-2/3 ">  
          <img src={data.image} alt="img" className="rounded-md w-full mb-4" />
          <h1 className="text-3xl font-bold mb-4 ">{data.title}</h1>  
          
          <div className="flex justify-between items-center mb-4 text-gray-600">
            <p className="flex items-center">
              <BsClockFill className="mr-2" />
              {data.reading_time}
            </p>
            <Link to={`/profile/${data.id}`} className="hover:text-orange-500">
              Written by: {data.author}
            </Link>
          </div>
          <p className="text-gray-700 text-base">{data.content}</p> 
          <br/>
          <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi blanditiis deserunt asperiores, soluta consectetur quibusdam dicta? Totam ut molestias voluptatibus porro accusamus sequi animi quam, praesentium dicta reiciendis, maxime explicabo eum qui atque iure.</p>
          <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi blanditiis deserunt asperiores, soluta consectetur quibusdam dicta? Totam ut molestias voluptatibus porro accusamus sequi animi quam, praesentium dicta reiciendis, maxime explicabo eum qui atque iure.</p>
          <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi blanditiis deserunt asperiores, soluta consectetur quibusdam dicta? Totam ut molestias voluptatibus porro accusamus sequi animi quam, praesentium dicta reiciendis, maxime explicabo eum qui atque iure.</p>
          <br />
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi magni omnis similique! Voluptatibus ducimus culpa error enim repellendus dicta reprehenderit dolorum non fugiat earum quos voluptates doloribus voluptatum quo vel aliquam, excepturi nostrum, hic laudantium molestias quam deserunt perspiciatis veritatis. Itaque ab officiis aperiam dolores ipsam consequuntur voluptas doloribus quae accusamus, veniam beatae quasi, tempore officia laudantium fuga ea, cumque minus maxime perspiciatis. Cupiditate ratione excepturi vitae.</p>
        </div>
      )}

    </div>
    <h1 className='text-center mt-5 pt-2 text-orange-500 text-3xl font-semibold '>Popular Blogs</h1>
    <div className='flex flex-wrap justify-center min-h-screen space-x-4 mt-8'>
      {populardata.length > 0 ? (
        populardata.map((d, i) => (
          <div className="rounded-lg shadow-xl p-8 w-2/3" key={i}>
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
  );
};

export default BlogDetails;
