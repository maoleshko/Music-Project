import React from 'react';

function Modal(props) {
  const { isOpen, onClose, children } = props;
  return (
    isOpen ? (
      <div className='modal-overlay'>
        <div className='modal-content' onClick={onClose}>
          <div>
            {children}
          </div>
          
        </div>
      </div>
    ) : null
  );
}
export default Modal;