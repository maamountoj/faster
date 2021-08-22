import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { updatePostAction } from '../actions/postsActions'
import '../assets/style.css'
import CustomModal from './CustomModal'

export const Post = ({ post, excerpt }) => {
  const dispatch = useDispatch()
  const loadingUpdatePost = useSelector(
    (state) => state.posts?.posts?.loadingUpdatePost
  )
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const [title, setTitle] = React.useState(post?.title)
  const [body, setBody] = React.useState(post?.body)

  function openModal() {
    setIsOpen(true)
  }

  const updatePost = () => {
    dispatch(
      updatePostAction({
        body: { title, body },
        params: { id: post?.id }
      })
    )
    setIsOpen(false)
  }
  function toggleModal() {
    setIsOpen(!modalIsOpen)
  }
  useEffect(() => {
    setBody(post?.body)
    setTitle(post?.title)
  }, [post?.title, post?.body])
  return (
    <>
      <article className={excerpt ? 'post-excerpt' : 'post'}>
        <h2>{post?.title}</h2>
        <p>{excerpt ? post?.body.substring(0, 100) : post?.body}</p>

        {excerpt && (
          <>
            <Link to={`/posts/${post?.id}`} className='button'>
              View Post
            </Link>
            <div className='button' onClick={openModal}>
              Update Post
            </div>
          </>
        )}
      </article>
      <CustomModal
        modalIsOpen={modalIsOpen}
        contentLabel='Example Modal'
        toggleModal={toggleModal}
      >
        <form>
          <h1>Update Post #{post?.id}</h1>
          <label>
            Title:
            <input
              name='title'
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
          <label>
            Body:
            <textarea
              name='body'
              type='text'
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            />
          </label>
          <button className='button' onClick={updatePost}>
            Submit
          </button>
        </form>
      </CustomModal>
    </>
  )
}
