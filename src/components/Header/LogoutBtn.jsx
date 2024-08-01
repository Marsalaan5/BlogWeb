// // import React from 'react'
// // import {useDispatch} from 'react-redux'
// // import authService from '../../appwrite/auth'
// // import {logout} from '../../store/authSlice'

// // function LogoutBtn() {
// //     const dispatch = useDispatch()
// //     const logoutHandler = () => {
// //         authService.logout().then(() => {
// //             dispatch(logout())
// //         })
// //     }
// //   return (
// //     <button
// //     className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
// //     onClick={logoutHandler}
// //     >Logout</button>
// //   )
// // }

// // export default LogoutBtn


// import React from 'react';
// import { useDispatch } from 'react-redux';
// import authService from '../../appwrite/auth';
// import { logout } from '../../store/authSlice';

// function LogoutBtn() {
//     const dispatch = useDispatch();

//     const logoutHandler = async () => {
//         try {
//             await authService.logout();
//             dispatch(logout());
//         } catch (error) {
//             console.error('Logout failed:', error);
//             // Optionally, show an error message to the user
//         }
//     };

//     return (
//         <button
//             className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
//             onClick={logoutHandler}
//         >
//             Logout
//         </button>
//     );
// }

// export default LogoutBtn;




import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function LogoutBtn() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const logoutHandler = async () => {
        setLoading(true);
        setError('');
        try {
            await authService.logout();
            dispatch(logout());
        } catch (error) {
            console.error('Logout failed:', error);
            setError('Logout failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative inline-block">
            <button
                className={`px-6 py-2 rounded-full text-white transition duration-200 ${loading ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600'}`}
                onClick={logoutHandler}
                disabled={loading}
            >
                {loading ? (
                    <span className="flex items-center">
                        <svg
                            className="w-5 h-5 mr-2 animate-spin text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4h-4zm16 0a8 8 0 01-8 8v-4a4 4 0 004-4h4z"></path>
                        </svg>
                        Logging out...
                    </span>
                ) : (
                    'Logout'
                )}
            </button>
            {error && (
                <div className="absolute top-full left-0 mt-2 text-red-500 text-sm">
                    {error}
                </div>
            )}
        </div>
    );
}

export default LogoutBtn;
