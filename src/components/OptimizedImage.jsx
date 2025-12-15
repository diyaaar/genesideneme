import React, { useState } from 'react';

const OptimizedImage = ({ src, srcSet, alt, className, style, sizes = "100vw" }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={`img-wrapper ${className || ''}`} style={style}>
            {!isLoaded && <div className="skeleton-pulse"></div>}
            <img
                src={src}
                srcSet={srcSet}
                sizes={sizes}
                alt={alt}
                loading="lazy"
                width="100%"
                height="100%"
                onLoad={() => setIsLoaded(true)}
                className={isLoaded ? 'loaded' : ''}
                style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }}
            />
        </div>
    );
};

export default OptimizedImage;
