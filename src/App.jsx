import React from 'react';
import s from './style/App.module.css';
import {AppRoutes} from './routes'
import { NavBar } from './components/navbar/navbar';

function App() {

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <NavBar/>
        <AppRoutes/>       
      </div>
    </div> 
  );
}

export default App;