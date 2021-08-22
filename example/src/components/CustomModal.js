import React from 'react'
import Modal from 'react-modal'

function CustomModal({ children, modalIsOpen }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      className='myoverlay'
      contentLabel='Example Modal'
    >
      {children}
    </Modal>
  )
}

export default CustomModal
