import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPost() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-[50px] py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPost


// import React, { useState, useEffect } from 'react';
// import { Container, PostCard } from '../components';
// import appwriteService from "../appwrite/config";

// function AllPost() {
//     const [posts, setPosts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchPosts = async () => {
//             try {
//                 const fetchedPosts = await appwriteService.getPosts();
//                 if (fetchedPosts) {
//                     setPosts(fetchedPosts.documents);
//                 } else {
//                     setError('No posts found.');
//                 }
//             } catch (err) {
//                 setError('Failed to fetch posts. Please try again later.');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchPosts();
//     }, []);

//     if (loading) {
//         return (
//             <div className="w-full py-30 text-center">
//                 <Container>
//                     <div className="flex flex-wrap justify-center">
//                         <div className="p-2 w-full">
//                             <h1 className="text-2xl font-bold">Loading posts...</h1>
//                         </div>
//                     </div>
//                 </Container>
//             </div>
//         );
//     }

//     if (error) {
//         return (
//             <div className="w-full py-8 text-center">
//                 <Container>
//                     <div className="flex flex-wrap justify-center">
//                         <div className="p-2 w-full">
//                             <h1 className="text-2xl font-bold text-red-600">{error}</h1>
//                         </div>
//                     </div>
//                 </Container>
//             </div>
//         );
//     }

//     return (
//         <div className='w-full py-8'>
//             <Container>
//                 <div className='flex flex-wrap'>
//                     {posts.map((post) => (
//                         <div key={post.$id} className='p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
//                             <PostCard {...post} />
//                         </div>
//                     ))}
//                 </div>
//             </Container>
//         </div>
//     );
// }

// export default AllPost;
