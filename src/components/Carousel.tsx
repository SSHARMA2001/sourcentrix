import React, { useState, useEffect } from 'react';
import carousel1 from '../assets/carousel/carousel1.png';
import carousel2 from '../assets/carousel/carousel2.png';
import carousel3 from '../assets/carousel/carousel3.jpg';
import carousel4 from '../assets/carousel/carousel4.jpeg';
import carousel5 from '../assets/carousel/carousel5.jpeg';
import carousel6 from '../assets/carousel/carousel6.jpeg';
import carousel7 from '../assets/carousel/carousel7.jpeg';
import './Carousel.css';

interface SlideContent {
  image: string;
  title: string;
  subtitle: string;
}

const Carousel: React.FC = () => {
  const slides: SlideContent[] = [
    {
      image: carousel1,
      title: 'Innovative Agri-Machinery and Field Solutions',
      subtitle: 'Explore our range of modern implements, precision tools, and robust equipment designed for the needs of 21st-century agriculture'
    },
    {
      image: carousel6,
      title: 'Mining, Crushing & Mineral Processing Solut',
      subtitle: 'Supplying parts for high-capacity crushers, advanced screening equipment, and complete plant solutions designed for efficient extraction, precise sizing, and superior material processing'
    },
    {
      image: carousel2,
      title: 'Fueling Progress Solutions for the Energy Sector',
      subtitle: 'Delivering robust, reliable equipment and critical services for upstream, midstream, and downstream energy sector processing'
    },
    {
      image: carousel3,
      title: 'Construction Equipment & Heavy Machinery',
      subtitle: 'Strengthening the global supply chain for heavy machinery. Delivering reliable, critical parts and solutions to keep your OEM production lines moving efficiently'
    },
    {
      image: carousel7,
      title: 'Sustainable Power Generation and Infrastructure',
      subtitle: 'Delivering parts for integrated solar, wind, and storage systems, along with the critical infrastructure and components required for reliable, large-scale clean energy grids.'
    },
    {
      image: carousel4,
      title: 'Global Automotive Ecosystem Partner',
      subtitle: 'A reliable global supplier of critical components, systems, and solutions, ensuring quality and performance across the entire automotive value chain'
    },
    {
      image: carousel5,
      title: 'Industrial Solutions & Manufacturing Technologies',
      subtitle: 'A comprehensive portfolio of engineering goods, specialized equipment, and system integration services for diverse core sectors, including metals, cement, and material processing'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000); // Resume auto-play after 5 seconds
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section className="carousel-section">
      <div className="carousel-container">
        <div 
          className="carousel-wrapper"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <button 
            className="carousel-button carousel-button-prev"
            onClick={goToPrevious}
            aria-label="Previous slide"
          >
            &#8249;
          </button>
          
          <div className="carousel-slides">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
              >
                <div className="carousel-overlay"></div>
                <img 
                  src={slide.image} 
                  alt={`Carousel slide ${index + 1}`}
                  className="carousel-image"
                />
                {index === currentIndex && (
                  <div className="carousel-content">
                    <h1 className="carousel-title">
                      {slide.title}
                    </h1>
                    <p className="carousel-subtitle">
                      {slide.subtitle}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button 
            className="carousel-button carousel-button-next"
            onClick={goToNext}
            aria-label="Next slide"
          >
            &#8250;
          </button>

          <div className="carousel-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;

