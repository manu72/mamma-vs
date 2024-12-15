import styled from 'styled-components';
import { motion } from 'framer-motion';

const BookingsSection = styled.section`
  padding: 120px 2rem;
  background: ${({ theme }) => theme.colors.dark};
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const BookingHeader = styled(motion.div)`
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
  margin-bottom: 2rem;
`;

const BookingForm = styled(motion.form)`
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

const Select = styled.select`
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

  option {
    background: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.light};
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
  min-height: 100px;
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

const Bookings = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic will be added later
  };

  return (
    <BookingsSection>
      <Container>
        <BookingHeader
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title>Make a Reservation</Title>
          <Description>
            Join us for an unforgettable dining experience. Please fill out the form below
            to make your reservation.
          </Description>
        </BookingHeader>

        <BookingForm
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
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
            <Label>Phone</Label>
            <Input type="tel" required placeholder="Your phone number" />
          </FormGroup>

          <FormGroup>
            <Label>Date</Label>
            <Input type="date" required />
          </FormGroup>

          <FormGroup>
            <Label>Time</Label>
            <Select required>
              <option value="">Select a time</option>
              <option value="17:00">5:00 PM</option>
              <option value="17:30">5:30 PM</option>
              <option value="18:00">6:00 PM</option>
              <option value="18:30">6:30 PM</option>
              <option value="19:00">7:00 PM</option>
              <option value="19:30">7:30 PM</option>
              <option value="20:00">8:00 PM</option>
              <option value="20:30">8:30 PM</option>
              <option value="21:00">9:00 PM</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Label>Number of Guests</Label>
            <Select required>
              <option value="">Select number of guests</option>
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4">4 People</option>
              <option value="5">5 People</option>
              <option value="6">6 People</option>
              <option value="7">7 People</option>
              <option value="8">8 People</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Label>Special Requests</Label>
            <TextArea 
              placeholder="Any special requests or dietary requirements?"
              rows="4"
            />
          </FormGroup>

          <SubmitButton type="submit">Make Reservation</SubmitButton>
        </BookingForm>
      </Container>
    </BookingsSection>
  );
};

export default Bookings; 