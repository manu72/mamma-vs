import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  height: 100vh;
  background-image: url(${process.env.PUBLIC_URL}/images/hero-bg.jpg);
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.overlay};
  }
`;

const HeroContent = styled(motion.div)`
  text-align: center;
  position: relative;
  z-index: 1;
  padding: 0 1rem;
`;

const Welcome = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 1rem;
  font-style: italic;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
`;

const Home = () => {
  return (
    <main>
      <HeroSection>
        <HeroContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Welcome>Welcome to</Welcome>
          <Title>MAMMA V'S</Title>
          <Subtitle>
            Experience authentic Italian fine dining at its best. Fresh ingredients, traditional recipes, 
            and an atmosphere that will transport you to Italy.
          </Subtitle>
        </HeroContent>
      </HeroSection>
    </main>
  );
};

export default Home; 