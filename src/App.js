import React from 'react';
import cl from'./App.module.scss';
import AboutCompany from './components/aboutCompany/AboutCompany';
import ContactUs from './components/contactUs/ContactUs';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import HomeInfo from './components/homeInfo/HomeInfo';
import MainTasks from './components/mainTasks/MainTasks';
import OurProjects from './components/ourProjects/OurProjects';

function App() {
  return (
    <div className={cl.App}>
      <Header/>
      <HomeInfo/>
      <AboutCompany/>
      <MainTasks/>
      <OurProjects/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
