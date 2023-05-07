import React from 'react';
import Modal from 'react-modal';
import s from '../../style/App.module.css';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }
};

function LoginModal({ isOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Login Modal"
    >
       <div className={s.logo}></div>
      <form>
        
        <input type="text" id="username" placeholder='Логин:' />

        <input type="password" id="password" placeholder='Пароль:' />

        <button type="submit">Войти</button>
      </form>
    </Modal>
  );
}

export default LoginModal;