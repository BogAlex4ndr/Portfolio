import React from 'react';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import './styles/App.scss';
import About from './Pages/About';
import Resume from './Pages/Resume';
import Projects from './Pages/Projects';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
import options from './ParticlesOptions';
import Footer from './components/Footer';
import CatWriter from './components/CatWriter';

const App = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  return (
    <div className='App'>
      <div className='app__wrapper'>
        <Header />
        <Particles className='background__live' options={options} init={particlesInit} />
       <div className='main__content'>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/Resume' element={<Resume />} />
            <Route path='/About' element={<About />} />
            <Route path='/Projects' element={<Projects />} />
          </Routes>
       </div>
       <CatWriter/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
