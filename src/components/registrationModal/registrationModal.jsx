import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

function RegistrationModal({ isOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Registration Modal"
    >
      
      <form>
        <input type="text" id="username" placeholder='Логин:' />

        <input type="password" id="password" placeholder='Пароль:' />
        <input type="password" id="password" placeholder='Повторите пароль:' />

        <button type="submit">Зарегистрироваться</button>
      </form>
    </Modal>
  );
}

export default RegistrationModal;