import { useEffect, useState } from "react";

const useFetch = (url) => {
 
    const [data,setData] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState(null);
 
    useEffect(()=>{

        fetch(url,{
            headers:{
                "Content-Type": "application/json",
                "X-Master-Key":`$2a$10$jSm4Ms/vFDxiVM/wT058lOLSC2R/t1gA8j8Dohz9K5BhledMXKHQ6`
            }
        })
        .then(res =>{
            if(!res.ok){
                throw Error("Database Down");
            }
            return res.json();
        })
        .then(data =>{
            setData(data);
            setIsLoading(false);
            setError(null);

        })
        .catch(e =>{
            setIsLoading(false);
            setError(e.message);
            console.log("ndiwgd");
            
        });

    },[url])

    
 
    return {data,error,isLoading};
}
export default useFetch;