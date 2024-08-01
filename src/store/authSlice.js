// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     status : false,
//     userData: null
// }

// const authSlice = createSlice({
//     name: "auth",
//     initialState,
//     reducers: {
//         login: (state, action) => {
//             state.status = true;
//             state.userData = action.payload.userData;
//         },
//         logout: (state) => {
//             state.status = false;
//             state.userData = null;
//         }
//      }
// })

// export const {login, logout} = authSlice.actions;

// export default authSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false, // Indicates if the user is logged in or not
    userData: null // Stores user information when logged in
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // Action for logging in
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData; // Sets the user data
        },
        // Action for logging out
        logout: (state) => {
            state.status = false;
            state.userData = null; // Clears user data
        }
    }
});

// Export actions for use in components
export const { login, logout } = authSlice.actions;

// Export reducer to be used in the store
export default authSlice.reducer;

