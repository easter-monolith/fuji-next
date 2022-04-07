import { ReactNode } from 'react'

const closeModals = () => {
  const modals = document.querySelectorAll('.modal') || []
  modals.forEach((modal) => {
    modal.classList.remove('is-active')
  })
}

interface ModalProps {
  children: ReactNode
  id: string
}

const Modal = ({ children, id }: ModalProps) => {
  return (
    <div className='modal' id={id}>
      <div onClick={closeModals} className="modal-background" />
      <div className="modal-content">
        <div className="box has-text-centered">{children}</div>
      </div>
      <button onClick={closeModals} className="modal-close is-large" aria-label="close" />
    </div>
  )
}

export default Modal
