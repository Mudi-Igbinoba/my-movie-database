import heroBg from '../../../assets/hero-bg.png';
import AddMovieForm from './AddMovieForm';

const Hero = () => {
    return (
        <section
            id='addMovie'
            className='text-white bg-cover bg-no-repeat bg-center animate-fadeIn  bg-slate-950'
            style={{ backgroundImage: `url(${heroBg})` }}>
            <div className='container mx-auto md:px-4 px-6 py-20'>
                <h1 className='animate-trackingInExpand lg:text-5xl sm:text-4xl text-3xl text-center font-limeLight text-indigo-100'>
                    Save Your Top 10 Movies Now !
                </h1>
                <p
                    className='text-center sm:text-lg my-4'
                    style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>
                    Fill out the form below to add your favorite movie . To get
                    the right data, write out the{' '}
                    <span className='underline text-gold decoration-double underline-offset-4'>
                        full title of the movie
                    </span>{' '}
                    .
                </p>

                <AddMovieForm />
            </div>
        </section>
    );
};

export default Hero;
