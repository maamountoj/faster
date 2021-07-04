import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getPostsAction, addPostAction } from '../actions/postsActions'

import { Post } from '../components/Post'

const PostsPage = () => {
  const dispatch = useDispatch()
  const loadingGetPosts = useSelector(
    (state) => state.posts?.posts?.loadingGetPosts
  )
  const loadingAddPost = useSelector(
    (state) => state.posts?.posts?.loadingAddPost
  )
  const posts = useSelector((state) => state.posts.posts?.data)
  useEffect(() => {
    dispatch(getPostsAction())
  }, [dispatch])
  const addPost = () => {
    dispatch(
      addPostAction({
        title: 'foo',
        body: 'bar',
        userId: 1
      })
    )
  }
  const renderPosts = () => {
    if (loadingGetPosts) return <p>Loading posts...</p>
    return posts.map((post) => <Post key={post.id} post={post} excerpt />)
  }

  return (
    <section>
      <h1>Posts</h1>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between'
        }}
      >
        <p>
          <strong>Total:{posts?.length}</strong>
        </p>
        <button
          className='button'
          style={{ borderWidth: 'inherit', cursor: 'pointer' }}
          onClick={addPost}
        >
          {loadingAddPost ? '...Loading' : 'Add Post'}
        </button>
      </div>
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
