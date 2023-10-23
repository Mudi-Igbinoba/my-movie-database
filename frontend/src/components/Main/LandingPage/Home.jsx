import { Link } from 'react-router-dom';

const Home = () => {
    return (
        // Landing Page
        <section className=' min-h-[85vh] flex items-center'>
            <div className='container mx-auto md:px-4 px-6 py-20'>
                <h1
                    className='animate-trackingInExpand lg:text-5xl sm:text-4xl text-3xl text-center font-abril text-gold'
                    style={{ textShadow: '0px 0px 0px rgb(204, 163, 84)' }}>
                    Save Your Top 10 Movies Now !
                </h1>
                <p
                    className='text-center sm:text-lg my-4'
                    style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>
                    Click the button below to start .
                </p>
                <Link
                    to='/add-movie'
                    className='block text-center lg:py-5 py-3 bg-gold w-[160px] mx-auto mt-5 rounded duration-500 hover:bg-white hover:text-gold'>
                    Add Movie
                </Link>
            </div>
        </section>
    );
};

export default Home;
