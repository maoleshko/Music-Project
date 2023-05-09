import React from 'react';
import s from './style/App.module.css';
import {AppRoutes} from './routes'
import { NavBar } from './components/navbar/navbar';
import BarPlayer from './components/barPlayer/barPlayer';

function App() {

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <main className={s.main}>
          <div className={s.centerblock}>
            <div className={s.content}>
              <NavBar/>
              <AppRoutes/>       
            </div>
            <BarPlayer/>
          </div>
        </main>
        <footer/>
      </div>
    </div> 
  );
}

export default App;