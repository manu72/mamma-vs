import styled from "styled-components";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactSection = styled.section`
  padding: 120px 2rem;
  background: ${({ theme }) => theme.colors.dark};
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ContactHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 4rem;
`;

const ContactCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 1rem;
`;

const ContactTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.light};
  margin-bottom: 1rem;
`;

const ContactInfo = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
`;

const MapContainer = styled(motion.div)`
  width: 100%;
  height: 400px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 4rem;
`;

const ContactForm = styled(motion.form)`
  max-width: 600px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.05);
  padding: 3rem;
  border-radius: 8px;
`;

const FormGroup = styled.div`
  margin-bottom: 2rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.gold};
  font-size: 1.1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.gold};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.light};
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.light};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.gold};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.light};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.light};
  }
`;

const SubmitButton = styled.button`
  background: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.dark};
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.darkGold};
  }
`;

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic will be added later
  };

  return (
    <ContactSection>
      <Container>
        <ContactHeader
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title>Contact Us</Title>
          <Description>
            We'd love to hear from you. Get in touch with us for reservations,
            private events, or any questions you may have.
          </Description>
        </ContactHeader>

        <ContactGrid>
          <ContactCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <IconWrapper>
              <FaPhone />
            </IconWrapper>
            <ContactTitle>Phone</ContactTitle>
            <ContactInfo>+61 444 999 678</ContactInfo>
          </ContactCard>

          <ContactCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <IconWrapper>
              <FaEnvelope />
            </IconWrapper>
            <ContactTitle>Email</ContactTitle>
            <ContactInfo>info@mammavs.com</ContactInfo>
          </ContactCard>

          <ContactCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <IconWrapper>
              <FaMapMarkerAlt />
            </IconWrapper>
            <ContactTitle>Location</ContactTitle>
            <ContactInfo>
              175 Nelson Place
              <br />
              Williamstown, VIC 3016
            </ContactInfo>
          </ContactCard>

          <ContactCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <IconWrapper>
              <FaClock />
            </IconWrapper>
            <ContactTitle>Hours</ContactTitle>
            <ContactInfo>
              Mon-Thu: 5:00 PM - 10:00 PM
              <br />
              Fri-Sat: 5:00 PM - 11:00 PM
              <br />
              Sun: 5:00 PM - 9:00 PM
            </ContactInfo>
          </ContactCard>
        </ContactGrid>

        <MapContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <iframe
            title="Restaurant Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.8108342657604!2d144.89772807677415!3d-37.86074037197641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad667f8178b5b3d%3A0x9bae3de8ef447073!2s175%20Nelson%20Pl%2C%20Williamstown%20VIC%203016%2C%20Australia!5e0!3m2!1sen!2sus!4v1709697432776!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </MapContainer>

        <ContactForm
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <FormGroup>
            <Label>Name</Label>
            <Input type="text" required placeholder="Your full name" />
          </FormGroup>

          <FormGroup>
            <Label>Email</Label>
            <Input type="email" required placeholder="your@email.com" />
          </FormGroup>

          <FormGroup>
            <Label>Subject</Label>
            <Input type="text" required placeholder="What is this regarding?" />
          </FormGroup>

          <FormGroup>
            <Label>Message</Label>
            <TextArea required placeholder="Your message..." />
          </FormGroup>

          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
      </Container>
    </ContactSection>
  );
};

export default Contact;
