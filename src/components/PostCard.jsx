// import React from 'react'
// import appwriteService from "../appwrite/config"
// import {Link} from 'react-router-dom'

// function PostCard({$id, title, featuredImage}) {
    
//   return (
//     <Link to={`/post/${$id}`}>
//         <div className='w-full bg-gray-100 rounded-xl p-4'>
//             <div className='w-full justify-center mb-4'>
//                 <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
//                 className='rounded-xl' />

//             </div>
//             <h2
//             className='text-xl font-bold'
//             >{title}</h2>
//         </div>
//     </Link>
//   )
// }


// export default PostCard


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
            onError={(e) => e.target.src = '/default-image.jpg'} // Fallback image on error
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
