import { useEffect, useState } from "react";

const useFetch = (url) => {
 
    const [data,setData] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState(null);
 
    useEffect(()=>{

        fetch(url)
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

        });

    },[url])
 
    return {data,error,isLoading};
}
export default useFetch;