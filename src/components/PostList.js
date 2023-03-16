/* eslint-disable react/jsx-no-undef */
import { useSelector,useDispatch } from "react-redux";
import { selectAllPosts,fetchPosts } from "../redux/counter/postSlice";
import { useEffect } from "react";
import PostExcerpt from "./PostExcerpt";


const PostsList = () => {
    const dispatch = useDispatch();

    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector(state => state.post?.status);
    const error = useSelector(state => state.post.error);

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts())
        }
    }, [postStatus, dispatch])

    let content;
    if (postStatus === 'loading') {
        content = <p>"Loading..."</p>;
    } else if (postStatus === 'succeeded') {
        const orderedPosts = posts?.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts?.map(post => <PostExcerpt key={post.id} post={post} />)
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>;
    }

    return (
        <section>
            <h2>Posts</h2>
            {content}
        </section>
    )
}
export default PostsList;