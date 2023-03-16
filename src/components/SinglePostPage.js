import React from 'react'
import { useSelector } from 'react-redux'
import selectPostById from '../redux/counter/postSlice'
import PostAuthor from './PostAuthor.js';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const SinglePostPage = () => {

const { postId } = useParams();
const post = useSelector((state) => selectPostById(state, Number(postId)))

if (!post) {
  return (
    <section>
      <h2>post not found</h2>
    </section>
  )
}

  return (
    <article>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <p className = "postcredit">
          <Link to = {`./post/edit/${postId}`}>Edit Post</Link>
          <PostAuthor userId ={post.userId} />
          <TimeAgo timestamp= {post.date} />
        </p>
        <ReactionButtons post = {post} />
    </article>
  )
}

export default SinglePostPage
