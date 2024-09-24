// Slideshow.jsx
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { SlideshowStyle } from '../css/SlideshowStyle';

const images = [
    '../src/assets/carrinho.png',
    '../src/assets/kids.png',
];

const Slideshow = () => {
    const [index, setIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1);

    // Muda a imagem a cada 3 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setNextIndex((prevIndex) => (prevIndex + 1) % images.length);
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Animação com react-spring
    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        reset: true,
    });

    const nextProps = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        reset: true,
    });

    return (
        <SlideshowStyle>
            <div className="slideshow" style={{ position: 'relative', overflow: 'hidden' }}>
                <animated.div style={{ ...props, position: 'absolute', top: 0, left: 0 }}>
                    <img src={images[index]} alt={`Slide ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
                </animated.div>
                <animated.div style={{ ...nextProps, position: 'absolute', top: 0, left: 0 }}>
                    <img src={images[nextIndex]} alt={`Slide ${nextIndex + 1}`} style={{ width: '100%', height: 'auto' }} />
                </animated.div>
            </div>
        </SlideshowStyle>
    );
};

export default Slideshow;