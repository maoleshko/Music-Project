import React from 'react';

export const Registration = () => {
    return (
        <div>
            <h1>Registration</h1>
            <form>
                <input type="text" id="username" placeholder='Логин:' />

                <input type="password" id="password" placeholder='Пароль:' />
                <input type="password" id="password" placeholder='Повторите пароль:' />

                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
    )
}