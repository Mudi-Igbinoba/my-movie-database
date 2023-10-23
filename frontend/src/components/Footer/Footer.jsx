const Footer = () => {
    return (
        <footer className='bg-black/90 text-white font-playfair font-semibold tracking-wide'>
            <div className='text-center text-lg py-8 md:px-4 px-6 container mx-auto'>
                <p>
                    Designed and Developed by{' '}
                    <a
                        target='_blank'
                        rel='noreferrer'
                        className='text-gold font-yeseva '
                        href='https://mudee.carrd.co'>
                        Mudi
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
