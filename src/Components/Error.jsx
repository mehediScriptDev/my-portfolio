import FuzzyText from './FuzzyText';

const Error = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <FuzzyText 
  baseIntensity={0.01} 
  
 
>
 Whoops! Somethings went wrong!
</FuzzyText>
        </div>
    );
};

export default Error;