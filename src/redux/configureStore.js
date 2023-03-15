/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/counter/counterSlice';
import postReducer from '../redux/counter/postSlice';
import usersReducer from '../redux/counter/userSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        post: postReducer,
        users: usersReducer

    }
})

export default store;