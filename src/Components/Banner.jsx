import image from './images/mine.png'

const Banner = () => {
    return (
        <section className='pt-3'>
            <div className='flex justify-center items-center'>
                <img className='lg:w-52 lg:h-52 w-40 h-40  object-cover rounded-full' src={image} alt="myimage" />
            </div>
        </section>
    );
};

export default Banner;