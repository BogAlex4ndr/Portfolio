import React from 'react';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import './styles/App.scss';
import About from './Pages/About';
import Resume from './Pages/Resume';
import Projects from './Pages/Projects';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/Resume' element={<Resume />} />
        <Route path='/About' element={<About />} />
        <Route path='/Projects' element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
