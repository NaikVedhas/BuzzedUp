import { useEffect, useState } from "react";

const useFetch = (url) => {
 
    const [data,setData] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState(null);
    console.log(import.meta.env.VITE_API_KEY);
    
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
            setData(data.record.blogs);
            setIsLoading(false);
            setError(null);

        })
        .catch(e =>{
            setIsLoading(false);
            setError(e.message);
            console.log("Efeferg");
            
        });

    },[url])

    
 
    return {data,error,isLoading};
}
export default useFetch;