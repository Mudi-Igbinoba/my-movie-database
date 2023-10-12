import { useState } from 'react';
import { GiFilmSpool } from 'react-icons/gi';
import { HiMenuAlt2 } from 'react-icons/hi';
import { BsXCircle } from 'react-icons/bs';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className='bg-indigo-950 text-white font-limeLight uppercase tracking-wider'>
            <nav className='py-8 md:px-4 px-6 container mx-auto'>
                <ul>
                    <div
                        id='webMenu'
                        className='flex justify-between items-center'>
                        <li className='sm:text-2xl text-xl animate-trackingInExpand'>
                            <a
                                href='/'
                                className='flex hover:text-gold duration-700'>
                                <GiFilmSpool className='me-2 sm:text-2xl text-xl text-gold' />
                                My Movie Database
                            </a>
                        </li>
                        <div className='sm:text-lg sm:flex hidden animate-fadeIn'>
                            <li className='me-5'>
                                <a
                                    href='#addMovie'
                                    className='hover:text-gold duration-700'>
                                    Add Movie
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#viewMovie'
                                    className='hover:text-gold duration-700'>
                                    View Movies
                                </a>
                            </li>
                        </div>
                        <li className='sm:hidden inline animate-fadeIn'>
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                {isMenuOpen ? (
                                    <BsXCircle className='text-2xl hover:text-gold duration-700 hover:animate-pulse' />
                                ) : (
                                    <HiMenuAlt2 className='text-2xl hover:text-gold duration-700 hover:animate-pulse' />
                                )}
                            </button>
                        </li>
                    </div>
                    {isMenuOpen && (
                        <div
                            id='mobileMenu'
                            className='animate-fadeIn text-lg text-center pt-8 duration-500 sm:hidden block'>
                            <li className='mb-3'>
                                <a
                                    onClick={() => setIsMenuOpen(false)}
                                    href='#addMovie'
                                    className='hover:text-gold duration-700'>
                                    Add Movie
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => setIsMenuOpen(false)}
                                    href='#viewMovie'
                                    className='hover:text-gold duration-700'>
                                    View Movies
                                </a>
                            </li>
                        </div>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
