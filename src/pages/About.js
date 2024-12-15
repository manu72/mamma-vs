import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 120px 2rem;
  background: ${({ theme }) => theme.colors.dark};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const StorySection = styled(motion.div)`
  text-align: center;
  margin-bottom: 6rem;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 2rem;
`;

const StoryText = styled.p`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.2rem;
  line-height: 1.8;
`;

const ChefGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 4rem;
`;

const ChefCard = styled(motion.div)`
  text-align: center;
`;

const ChefImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.5rem;
  border: 3px solid ${({ theme }) => theme.colors.gold};
`;

const ChefName = styled.h3`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 0.5rem;
`;

const ChefTitle = styled.h4`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.light};
  margin-bottom: 1rem;
`;

const ChefBio = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
`;

const About = () => {
  const chefs = [
    {
      name: "Mamma V",
      title: "Executive Chef",
      image: `${process.env.PUBLIC_URL}/images/chef1.jpg`,
      bio: "With over 20 years of experience in fine dining, Chef Mamma V brings her passion for Italian cuisine and innovative cooking techniques to The Rosa."
    },
    {
      name: "Olivia Vigilanti",
      title: "Pastry Chef",
      image: `${process.env.PUBLIC_URL}/images/chef2.jpg`,
      bio: "A master of French pastry, Olivia creates desserts that are both visually stunning and extraordinarily delicious."
    },
    {
      name: "Dean Ambrosini",
      title: "Sous Chef",
      image: `${process.env.PUBLIC_URL}/images/chef3.jpg`,
      bio: "Specialising in fusion cuisine, Dean combines Asian and European flavors to create unique and memorable dishes."
    }
  ];

  return (
    <AboutSection>
      <Container>
        <StorySection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Our Story</SectionTitle>
          <StoryText>
            Mamma V's was founded in 1995 and has been a beacon of culinary excellence for over two decades. 
            What started as a small family restaurant has grown into one of the city's most celebrated 
            dining destinations. Our commitment to quality ingredients, innovative cuisine, and 
            exceptional service has remained unchanged throughout our journey.
          </StoryText>
        </StorySection>

        <SectionTitle>Meet Our Chefs</SectionTitle>
        <ChefGrid>
          {chefs.map((chef, index) => (
            <ChefCard
              key={chef.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <ChefImage src={chef.image} alt={chef.name} />
              <ChefName>{chef.name}</ChefName>
              <ChefTitle>{chef.title}</ChefTitle>
              <ChefBio>{chef.bio}</ChefBio>
            </ChefCard>
          ))}
        </ChefGrid>
      </Container>
    </AboutSection>
  );
};

export default About; 