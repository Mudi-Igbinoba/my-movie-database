import { useState } from 'react';
import { GiFilmSpool } from 'react-icons/gi';
import { HiMenuAlt2 } from 'react-icons/hi';
import { BsXCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className='bg-black/90 text-white font-playfair font-semibold tracking-wide'>
            <nav className='py-8 md:px-4 px-6 container mx-auto'>
                <ul>
                    <div
                        id='webMenu'
                        className='flex justify-between items-center'>
                        <li className='sm:text-2xl text-xl animate-trackingInExpand'>
                            {/* Logo */}
                            <Link
                                to='/'
                                className='flex hover:text-gold duration-700'>
                                <GiFilmSpool className='me-2 sm:text-2xl text-xl text-gold' />
                                My Movie Database
                            </Link>
                        </li>

                        {/* Menu Links */}
                        <div className='sm:text-lg sm:flex hidden animate-fadeIn'>
                            <li className='me-5'>
                                <Link
                                    to='/add-movie'
                                    className='hover:text-gold duration-700'>
                                    Add Movie
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/movies'
                                    className='hover:text-gold duration-700'>
                                    All Movies
                                </Link>
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
                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div
                            id='mobileMenu'
                            className='animate-fadeIn text-lg text-center pt-8 duration-500 sm:hidden block'>
                            <li className='mb-3'>
                                <Link
                                    onClick={() => setIsMenuOpen(false)}
                                    to='/add-movie'
                                    className='hover:text-gold duration-700'>
                                    Add Movie
                                </Link>
                            </li>
                            <li>
                                <Link
                                    onClick={() => setIsMenuOpen(false)}
                                    to='/movies'
                                    className='hover:text-gold duration-700'>
                                    View Movies
                                </Link>
                            </li>
                        </div>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
