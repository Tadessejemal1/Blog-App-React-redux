import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPosts } from '../posts/postsSlice'
import { selectUserById } from './usersSlice'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const UserPage = () => {

    const { userId } = useParams()
    const user = useSelector((state) => selectUserById(state, Number(userId)))
    const postForUsers = useSelector((state) => {
        const allPosts = selectAllPosts(state)
        return allPosts.filter(post => post.userId === Number(user.id))
    } 
    )
    const postTitle = postForUsers.map(post => (
        <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
        </li>
    ))

    return (
        <div>
            <h3>{user.name}</h3>
            <ol>{ postTitle }</ol>
        </div>
    )
}

export default UserPage
