import { useState, useEffect } from "react";
import { server } from "../main";

function Post() {
    const [Post, setPost]= useState([]);
    const [loading, setLoading] = useState(true);
  const [error, seterror]= useState(false)
  useEffect(()=>{
    const fetchPost = async()=>{
        
        try {
          const {data}= await axios(`${server}/search/trending`)
        setexchanges(data);
        setLoading(false);
        console.log(data);
        } catch (error) {
          seterror(true)
          setLoading(false)
        }
        
    }
    fetchPost();
  },[])
    return ( 
     <></>
    );
}

export default Post;