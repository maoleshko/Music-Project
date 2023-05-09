import React, { useState } from 'react';
import s from './style/App.module.css';
import {AppRoutes} from './routes'
import { NavBar } from './components/navbar/navbar';

function App() {


  const [user, setUser] = useState(null);
  const handleLogin = () => setUser({ login: "taradam" });
  const handleLogout = () => setUser(null);

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <main className={s.main}>
          <div className={s.centerblock}>
            <div>
              <NavBar
              user={user}
              onAuthButtonClick={user ? handleLogout : handleLogin}
              />
              <AppRoutes user={user} />
            </div>
          </div>
        </main>
        <footer/>
      </div>
    </div> 
  );
}

export default App;