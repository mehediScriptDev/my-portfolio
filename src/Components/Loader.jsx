import loader from './images/fav.png'

const Loader = () => {
    return (
        <div className='min-h-screen bg-maincl flex flex-col justify-center items-center'>
            <img className='w-28 lg:w-44' src={loader} alt="" />
            <span className="loading loading-dots bg-textcl loading-xl"></span>
        </div>
    );
};

export default Loader;