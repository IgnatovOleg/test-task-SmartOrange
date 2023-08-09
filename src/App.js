import React from 'react';
import cl from './App.module.scss';
import AboutCompany from './components/aboutCompany/AboutCompany';
import ContactUs from './components/contactUs/ContactUs';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import HomeInfo from './components/homeInfo/HomeInfo';
import MainTasks from './components/mainTasks/MainTasks';
import OurProjects from './components/ourProjects/OurProjects';
import { Element } from 'react-scroll';

function App() {
  return (
    <div className={cl.App}>
      <Element name='main'>
        <Header />
      </Element>
      <Element name='homeInfo'>
        <HomeInfo />
      </Element>
      <Element name='aboutCompany'>
        <AboutCompany />
      </Element>
      <Element name='mainTasks'>
        <MainTasks />
      </Element>
      <Element name='ourProjects'>
        <OurProjects />
      </Element>
      <Element name='contactUs'>
        <ContactUs />
      </Element>
      <Element name='footer'>
        <Footer />
      </Element>
    </div>
  );
}

export default App;
