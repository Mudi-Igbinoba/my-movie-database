// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Main/Hero';

function App() {
    return (
        <div className='font-josefin'>
            <Header />
            <main>
                <Hero />
            </main>
        </div>
    );
}

export default App;
