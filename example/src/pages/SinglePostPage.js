import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getPostAction } from '../actions/postActions'
import { getCommentsAction } from '../actions/commentsActions'

import { Post } from '../components/Post'
import { Comment } from '../components/Comment'

const SinglePostPage = ({ match }) => {
  const dispatch = useDispatch()
  const loading = useSelector((state) => {
    return { post: state.post.loadingGetPost, comments: state.comments.loading }
  })
  const state = useSelector((state) => state)
  const post = useSelector((state) => state.post.post)
  const comments = useSelector((state) => state.comments.comments)
  useEffect(() => {
    const { id } = match.params
    /* *** without easy-redux *** */
    //dispatch(getPostAction(id))
    //dispatch(getCommentsAction(id))
    /* *** with easy-redux *** */
    dispatch(getPostAction({ params: { id } }))
    dispatch(getCommentsAction({ params: { postId: id } }))
  }, [dispatch, match])

  const renderPost = () => {
    if (loading.post) return <p>Loading post...</p>
    return <Post post={post} />
  }

  const renderComments = () => {
    if (loading.comments) return <p>Loading comments...</p>
    return comments.map((comment) => (
      <Comment key={comment.id} comment={comment} />
    ))
  }

  return (
    <section>
      {console.log(state)}
      {renderPost()}
      <h2>Comments</h2>
      {renderComments()}
    </section>
  )
}

export default SinglePostPage
