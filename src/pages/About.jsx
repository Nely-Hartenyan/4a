import Header from '../components/Header'
import Footer from "../components/Footer";

function About({cartLength}) {
  
  return (
    <div className='min-h-screen bg-gray-100'>
      <Header cart={cartLength}/>
      <Footer/> 
    </div>
  );
}

export default About