import { useContext, useState, useEffect } from 'react'
import './Hero.css'
import { AllDataProduct } from '../../contex/Context';
import { GrNext , GrPrevious } from "react-icons/gr";



const Hero = () => {
  const { heroSlide } = useContext(AllDataProduct);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {

    if (!heroSlide || heroSlide.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === heroSlide.length - 1 ? 0 : prev + 1));
    }, 2000);


    return () => clearInterval(interval);
  }, [heroSlide, heroSlide.length]); 

  if (!heroSlide || heroSlide.length === 0) return <div>Loading...</div>;


  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === heroSlide.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? heroSlide.length - 1 : prev - 1));
  };

  return (
    <div className="carousel-container">
    <button onClick={prevSlide} className="">{<GrPrevious/>}</button>
      <div className="slide_image">
         <img 
           src={heroSlide[currentIndex].image} 
           alt={`Slide ${currentIndex}`} 
         />
      </div>

      <button onClick={nextSlide} className="">{<GrNext/>}</button>
    </div>
  );
}

export default Hero;