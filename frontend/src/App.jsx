import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Movies from './components/Main/MoviesPage/Movies';
import ViewMovie from './components/Main/MoviesPage/ViewMovie';
import Home from './components/Main/LandingPage/Home';
import AddMovie from './components/Main/Form/AddMovie';
import heroBg from './assets/pattern.jpg';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className='font-josefin'>
            <Header />
            <main
                className='text-white min-h-[85vh] bg-blend-darken bg-contain bg-center animate-fadeIn bg-black/75'
                style={{ backgroundImage: `url(${heroBg})` }}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/add-movie' element={<AddMovie />} />
                    <Route path='/movies' element={<Movies />} />
                    <Route path='/movies/details/:id' element={<ViewMovie />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
