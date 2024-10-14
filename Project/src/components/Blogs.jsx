import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import useFetch from "./useFetch";

function Blogs() {
  

  const [category,setCategory] = useState('');
  const [url,setUrl] = useState(`http://localhost:3000/blogs`);
   
  const categoryarr = ['All','AI','Work','Health','Fintech','Startups','Security','Enterprise'];

  
  useEffect(()=> {
    
    setUrl(`http://localhost:3000/blogs?category=`+category);

  },[category]);
  
  const handleCategory = (c) => {
    if(c==='All'){
      setCategory('');
    }
    else setCategory(c);
    
  }
  
  const {data,error,isLoading} = useFetch(url);

  return (
    <>
    <div >
      <div className="flex justify-center  ">

      {categoryarr.map((c,i) => (
        <button 
        key={i}
        onClick={() => handleCategory(c)}
        className=" m-1 bg-orange-500 rounded-lg py-2 px-4 hover:text-black hover:bg-orange-300"
        >{c}</button>  
      ))}
      </div>

    </div>

    {isLoading && <h1 className="text-orange-500 text-5xl">Loading</h1> }
    {error && <h1 className="text-orange-500 text-5xl">{error}</h1> }
    {data && <BlogCard  data={data} />}

    </>
  )
}
export default Blogs