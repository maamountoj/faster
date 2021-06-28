import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getPostsAction } from '../actions/postsActions'

import { Post } from '../components/Post'

const PostsPage = () => {
  const dispatch = useDispatch()
  const loadingGetPosts = useSelector((state) => state.posts?.posts?.loading)
  const posts = useSelector((state) => state.posts.posts?.data)
  useEffect(() => {
    dispatch(getPostsAction())
  }, [dispatch])

  const renderPosts = () => {
    if (loadingGetPosts) return <p>Loading posts...</p>
    return posts.map((post) => <Post key={post.id} post={post} excerpt />)
  }

  return (
    <section>
      <h1>Posts</h1>
      {renderPosts()}
    </section>
  )
}

/* const mapStateToProps = (state) => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors
}) */

export default PostsPage
