import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { updatePostAction } from '../actions/postsActions'

export const Post = ({ post, excerpt }) => {
  const dispatch = useDispatch()
  const loadingUpdatePost = useSelector(
    (state) => state.posts?.posts?.loadingUpdatePost
  )
  const updatePost = () => {
    dispatch(
      updatePostAction({
        body: { title: 'maamoun', body: 'description,description' },
        params: { id: post?.id }
      })
    )
  }
  return (
    <article className={excerpt ? 'post-excerpt' : 'post'}>
      <h2>{post?.title}</h2>
      <p>{excerpt ? post?.body.substring(0, 100) : post?.body}</p>

      {excerpt && (
        <>
          <Link to={`/posts/${post?.id}`} className='button'>
            View Post
          </Link>
          <button
            className='button'
            style={{ borderWidth: 'inherit', cursor: 'pointer' }}
            onClick={updatePost}
          >
            {loadingUpdatePost ? '...Loading' : 'Update Post'}
          </button>
        </>
      )}
    </article>
  )
}
