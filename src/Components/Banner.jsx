import image from './images/profile1.jpg'

const Banner = () => {
    return (
        <section className='pt-3'>
            <div className='flex justify-center items-center'>
                <img className='lg:w-52 lg:h-52 w-40 h-40 border-white border-2 object-cover rounded-full' src={image} alt="myimage" />
            </div>
            <div className='space-y-2 w-11/12 mx-auto flex flex-col justify-center items-center'>
                <h1 className='text-white text-center text-4xl font-bold'>Mehedi</h1>
            <h1 className='text-white text-center text-2xl font-bold'>Junior Frontend Developer</h1>
            <p className='text-white text-center text-xs lg:text-sm max-w-2xl'>As a dedicated full-stack developer, I craft scalable, user-centric applications from front to back. I specialize in building sleek, responsive interfaces using React, Next.js and powerful backends with Node.js, Express, and MongoDB. Passionate about clean code, performance optimization, and continuous learning, I'm always ready to bring ideas to life. Let's collaborate and create something extraordinary!</p>
            </div>
        </section>
    );
};

export default Banner;