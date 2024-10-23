import { useParams,Link } from 'react-router-dom';
import useFetch from './useFetch';
import { BsClockFill } from "react-icons/bs";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const BlogDetails = () => {
  const { id } = useParams();
  const { blogsData:fulldata, error:fullerror, isLoading:fulllisLoading } = useFetch(`https://api.jsonbin.io/v3/b/671939c9e41b4d34e447aac0`);
  
  const populardata = fulldata ? fulldata.filter((d) => d.popular === "yes" && d.id!==id ) : [];
  const data = fulldata ? fulldata.find((d) => d.id === Number(id)) : null;

  

  return (
    <div>
    <div className="flex justify-center items-center min-h-screen">  
      {fulllisLoading && (<div className="flex justify-center items-center">
        <AiOutlineLoading3Quarters className="text-orange-500 animate-spin text-8xl" />
      </div>)}    {/*Here data is loading*/} 
      {fullerror && <h1>{fullerror} </h1>}
      {!data && !fulllisLoading && (                     //Here data is not found 
        <div className='w-full flex flex-col items-center'>
        <h1 className='text-9xl  italic flex justify-center '>No Blog found </h1>
       <Link to={'/'}  className='flex m-10  justify-center text-2xl hover:text-orange-500'>Go to home</Link>
       </div>
     ) }
      {data && (
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
    {data && !fulllisLoading && (
    <div>
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
      )}
    </div>
  );
};

export default BlogDetails;
