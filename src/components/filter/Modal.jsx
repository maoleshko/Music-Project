import React from 'react';

function Modal(props) {
  const { isOpen, onClose, children } = props;
  return (
    isOpen ? (
      <div className='modal-overlay'>
        <div className='modal-content'>
          <button className='modal-close' onClick={onClose}>Закрыть</button>
          {children}
        </div>
      </div>
    ) : null
  );
}
export default Modal;