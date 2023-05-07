import React, { useState } from 'react';
import s from './menu.module.css';
import LoginModal from '../loginModal/loginModal';
import RegistrationModal from '../registrationModal/registrationModal';

const Menu = ({item, active, setActive}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => {
        setIsModalOpen(true);
      }
        const handleCloseModal = () => {
        setIsModalOpen(false);
      }

    const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
    const handleOpenRegistrationModal = () => {
        setIsRegistrationModalOpen(true);
      };
    const handleCloseRegistrationModal = () => {
        setIsRegistrationModalOpen(false);
      };
    
    return (
        <div className={`${s.menu} ${active ? s.active : ''}`} onClick={() => setActive(false)}>
            <div className={s.nav__menu}>
                <ul className={s.menu__list}>
                    { 
                    item.map((item) => 
                        <li className={s.menu__item} key={item.id}>
                            <a href={item.href}>{item.value}</a>
                        </li>

                        
                    )}
                </ul>

                <div>
                    <button onClick={handleOpenModal}>Войти</button>
                    <LoginModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
                </div> 

                <div>
                <button onClick={handleOpenRegistrationModal}>Register</button>
                <RegistrationModal isOpen={isRegistrationModalOpen} onRequestClose={handleCloseRegistrationModal} />
                </div>

            </div>
        </div>
    )
}

export default Menu;
