// eslint-disable-next-line no-unused-vars
import React from 'react';


function Nav() {
  return (
    <nav class="main__nav nav">
                    <div class="nav__logo logo">
                        {/* <img class="logo__image" src="img/logo.png" alt="logo"> */}
                    </div>
                    <div class="nav__burger burger">
                        <span class="burger__line"></span>
                        <span class="burger__line"></span>
                        <span class="burger__line"></span>
                    </div>
                    <div class="nav__menu menu">
                        <ul class="menu__list">
                            <li class="menu__item"><a href="http://" class="menu__link">Главное</a></li>
                            <li class="menu__item"><a href="http://" class="menu__link">Мой плейлист</a></li>
                            <li class="menu__item"><a href="http://" class="menu__link">Войти</a></li>
                        </ul>
                    </div>
                </nav>
  )
}

