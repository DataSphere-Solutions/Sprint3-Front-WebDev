// Slideshow.jsx
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import {SlideshowStyle} from '../css/SlideshowStyle'

const images = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
];

const Slideshow = () => {
    const [index, setIndex] = useState(0);

    // Muda a imagem a cada 3 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Animação com react-spring
    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        reset: true,
    });

    return (
        <SlideshowStyle>
            <div className="slideshow">
                <animated.div style={props}>
                    <img src={images[index]} alt={`Slide ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
                </animated.div>
            </div>
        </SlideshowStyle>

    );
};

export default Slideshow;