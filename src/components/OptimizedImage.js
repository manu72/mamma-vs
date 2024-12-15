import { useState, useEffect } from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: ${({ height }) => height || 'auto'};
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${({ objectFit }) => objectFit || 'cover'};
  transition: opacity 0.3s ease;
  opacity: ${({ isLoaded }) => (isLoaded ? 1 : 0)};
`;

const Placeholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  display: ${({ isLoaded }) => (isLoaded ? 'none' : 'block')};
`;

const OptimizedImage = ({
  src,
  alt,
  height,
  objectFit = 'cover',
  className,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <ImageContainer height={height} className={className}>
      <Placeholder isLoaded={isLoaded} />
      {imageSrc && (
        <StyledImage
          src={imageSrc}
          alt={alt}
          objectFit={objectFit}
          isLoaded={isLoaded}
          loading="lazy"
          {...props}
        />
      )}
    </ImageContainer>
  );
};

export default OptimizedImage; 