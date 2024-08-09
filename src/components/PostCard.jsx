

import React from 'react';
import { Link } from 'react-router-dom';
import appwriteService from "../appwrite/config";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
      <div className='bg-gray-100 rounded-xl overflow-hidden shadow-md'>
        <div className='w-full'>
          <img 
            src={appwriteService.getFilePreview(featuredImage)} 
            alt={title || 'Post image'} 
            className='w-full h-48 object-cover' 
            onError={(e) => e.target.src = '/default-image.jpg'} 
          />
        </div>
        <div className='p-4'>
          <h2 className='text-xl font-bold text-gray-800'>{title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
