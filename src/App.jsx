import { useEffect, useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Loader from './Components/Loader';

function App() {
const [loader,setLoader] = useState('true');
useEffect(()=>{
  const timer= setTimeout(() => (
    setLoader(false)
  ), 2000);
  return ()=> clearTimeout(timer)
},[])
if(loader){
  return <Loader></Loader>
}
  return (
    <section className='bg-maincl min-h-screen'>
      <Banner></Banner>
    </section>
  )
}

export default App
