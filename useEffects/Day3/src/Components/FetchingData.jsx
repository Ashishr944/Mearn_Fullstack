
import React, { useEffect, useState } from "react";

const FetchingData = () => {
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  // using .then
//   useEffect(() => {
//     fetch("https://dummyjson.com/posts")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data.posts);
//         setPosts(data.posts);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);



// using sync await
//   useEffect(() => {
//     const fetchPosts = async () => {
//       const res = await fetch("https://dummyjson.com/posts");

//       const data = await res.json();

//       console.log(data);

//       setPosts(data.posts);
//     };

//     fetchPosts();
//   }, []);





    // Loading, error data
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            setError(null);
            try{
                const res = await fetch("https://dummyjson.com/posts");
        
                const data = await res.json();
        
                console.log(data);
        
                setPosts(data.posts);
            }
            catch(error){
                setError(error.message)
            }
            finally{
                setLoading(false);
            }
        };

    fetchPosts();
  }, []);

    if(loading) return <h1>Loading......</h1>
    if(error) return <h1>{error}</h1>

  return (
    <div>
      <h2>Posts</h2>

      <ul>
        {posts.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchingData;

