import React from 'react';
import cl from'./App.module.scss';
import Header from './components/header/Header';
import HomeInfo from './components/homeInfo/HomeInfo';

function App() {
  return (
    <div className={cl.App}>
      <Header/>
      <HomeInfo/>
    </div>
  );
}

export default App;
