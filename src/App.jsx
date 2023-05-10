import React, { useState } from 'react';
import s from './style/App.module.css';
import {AppRoutes} from './routes'
import Menu from './components/burgerMenu/menu';


function App() {
 

  const [menuActive, setMenuActive] = useState(false)
  
    return (      
    <div className={s.wrapper}>
      <div className={s.container}>
        <main className={s.main}>
          <nav className={s.nav}>
            <div className={s.logo}></div>
            <div className={s.burger_btn} onClick={() => setMenuActive(!menuActive)}>
              <span/>
            </div>
            <Menu active={menuActive} setActive={setMenuActive} header={""} /> 
            
          </nav>
          
          <AppRoutes/> 
        </main>
        <footer/>
      
              
      </div>
    </div> 
  );
}

export default App;