import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-16 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
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

export default Home



// import React, { useEffect, useState } from 'react';
// import appwriteService from '../appwrite/config';
// import { Container, PostCard } from '../components';

// function Home() {
//     const [posts, setPosts] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchPosts = async () => {
//             try {
//                 const response = await appwriteService.getPosts();
//                 if (response) {
//                     setPosts(response.documents);
//                 }
//             } catch (error) {
//                 console.error('Failed to fetch posts:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchPosts();
//     }, []);

//     if (loading) {
//         return (
//             <div className="w-full py-16 text-center">
//                 <Container>
//                     <div className="flex justify-center items-center h-full">
//                         <div className="text-xl font-semibold text-gray-700">Loading...</div>
//                     </div>
//                 </Container>
//             </div>
//         );
//     }

//     if (posts.length === 0) {
//         return (
//             <div className="w-full py-16 text-center">
//                 <Container>
//                     <div className="flex flex-col items-center justify-center">
//                         <h1 className="text-2xl font-bold text-gray-800 mb-4">No Posts Available</h1>
//                         <p className="text-lg text-gray-600">It looks like there are no posts available at the moment. Please check back later.</p>
//                     </div>
//                 </Container>
//             </div>
//         );
//     }

//     return (
//         <div className='w-full py-8 bg-gray-50'>
//             <Container>
//                 <div className='flex flex-wrap -mx-4'>
//                     {posts.map((post) => (
//                         <div key={post.$id} className='p-4 md:w-1/2 lg:w-1/3 xl:w-1/4'>
//                             <PostCard {...post} />
//                         </div>
//                     ))}
//                 </div>
//             </Container>
//         </div>
//     );
// }

// export default Home;
