// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Main/HeroPage/Hero';

function App() {
    return (
        <div className='font-josefin'>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Hero />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
