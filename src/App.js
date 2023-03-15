import React from 'react';
import './App.css';
import Counter from './components/counter';
import Post from './components/AddPostForm';
import PostList from './components/PostList';

function App() {
  return (
    <div className="App">
      <Counter />
      <Post />
      <PostList />
    </div>
  );
}

export default App;
