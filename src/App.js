import React from 'react';
import './App.css';
import AddPostForm from './components/AddPostForm';
import { Routes, Route } from 'react-router-dom';
import SinglePostPage from "./components/SinglePostPage"
import Layout from './components/Layout';
import PostList from './components/PostList';
import EditPostForm from './components/EditPostForm';

function App() {
  return (
    <Routes>
      <Route path = '/' element = {<Layout />}>
        <Route path = '/' element = {<PostList />} />

        <Route path = './post'>
          <Route index element = {<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>
      </Route>  
    </Routes>
  );
}

export default App;
