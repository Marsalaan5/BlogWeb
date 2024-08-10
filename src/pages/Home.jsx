
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/authSlice'; 
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components';

function Home() {
    const [posts, setPosts] = useState([]);
    const status = useSelector((state) => state.auth.status);
    const dispatch = useDispatch();

    useEffect(() => {
        if (status) {
            appwriteService.getPosts()
                .then((response) => {
                    if (response && response.documents) {
                        setPosts(response.documents);
                    }
                })
                .catch((error) => {
                    console.error('Failed to fetch posts:', error);
                    setPosts([]);
                });
        } else {
            setPosts([]);
        }
    }, [status]);

    const handleLogout = () => {
        dispatch(logout());
    };

    if (!status) {
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
        );
    }

    return (
        <div className='w-full py-16'>
            <Container>
                <div className='flex flex-wrap'>
                    <div className="w-full text-center mb-4 py-8">
                        <button onClick={handleLogout} className="bg-blue-600 text-white py-2 px-4 rounded">
                            Logout
                        </button>
                    </div>
                    {posts.length === 0 ? (
                        <div className="p-2 w-full text-center">
                            <h2 className="text-xl font-bold">No posts available</h2>
                        </div>
                    ) : (
                        posts.map((post) => (
                            <div key={post.$id} className='p-2 w-1/4'>
                                <PostCard {...post} />
                            </div>
                        ))
                    )}
                </div>
            </Container>
        </div>
    );
}

export default Home;
