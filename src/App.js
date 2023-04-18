import React from 'react';
import './style/App.css';
import PlaylistItem from "./components/PlaylistItem";
import { MainNav } from './components/MainNav';

function App() {
  return (
    <div>
    <MainNav/>,
    <PlaylistItem track={{title: 'Guilt',author: 'Nero',album: 'Welcome Reality', time:'4:44'}}/>
</div>
  );
}

export default App;
