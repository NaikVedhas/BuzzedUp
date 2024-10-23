import { useEffect, useState } from "react";

const useFetch = (url) => {
 
    const [blogsData,setBlogsData] = useState([]);
    const [authorData,setAuthorData] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState(null);
    
    useEffect(()=>{

        fetch(url,{
            headers:{
                "Content-Type": "application/json",
                "X-Master-Key": `$2a$10$jSm4Ms${import.meta.env.VITE_API_KEY}`
            }
        })
        .then(res =>{
            if(!res.ok){
                throw Error("Database Down");
            }
            return res.json();
        })
        .then(data =>{
            setBlogsData(data.record.blogs);
            setAuthorData(data.record.authors);
            setIsLoading(false);
            setError(null);

        })
        .catch(e =>{
            setIsLoading(false);
            setError(e.message);
            console.log("Efeferg");
            
        });

    },[url])

    
 
    return {blogsData,authorData,error,isLoading};
}
export default useFetch;