import { useState,useEffect } from "react";

//custom hook
const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    useEffect(() => {
        fetch(url)
        .then(res => {
            if(!res.ok) {
                throw Error("Could not get the rusult for the resource")
            }
            return res.json()
        })
        .then(data => {
            setData(data);
            setIsPending(false)
        })
        .catch(err => {
            console.log(err)
        })
    },[url])
    
    return {data,isPending}

}
 
export default useFetch;