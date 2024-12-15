import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.dark};
  padding: 4rem 2rem 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
`;

const FooterSection = styled.div`
  color: ${({ theme }) => theme.colors.light};
`;

const FooterTitle = styled.h4`
  color: ${({ theme }) => theme.colors.gold};
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
`;

const FooterText = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const FooterLink = styled(Link)`
  display: block;
  margin-bottom: 0.8rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SocialIcon = styled.a`
  color: ${({ theme }) => theme.colors.light};
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.light};
  font-size: 0.9rem;
`;

const NewsletterForm = styled.form`
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
`;

const NewsletterInput = styled.input`
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.gold};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.light};
  font-size: 0.9rem;
  flex-grow: 1;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.light};
  }
`;

const SubscribeButton = styled.button`
  background: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.dark};
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.darkGold};
  }
`;

const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Newsletter subscription logic will be added later
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>About Mamma V's</FooterTitle>
          <FooterText>
            Experience fine dining at its best. Our commitment to quality ingredients
            and exceptional service has made us a premier dining destination since 1995.
          </FooterText>
          <SocialLinks>
            <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </SocialIcon>
            <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialIcon>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/menu">Menu</FooterLink>
          <FooterLink to="/bookings">Reservations</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contact Info</FooterTitle>
          <FooterText>
            175 Nelson Place<br />
            Williamstown, Victoria 3016
          </FooterText>
          <FooterText>
            Phone: +61 444 999 678<br />
            Email: info@mammavs.com
          </FooterText>
          <FooterText>
            <strong>Hours:</strong><br />
            Mon-Thu: 5:00 PM - 10:00 PM<br />
            Fri-Sat: 5:00 PM - 11:00 PM<br />
            Sun: 5:00 PM - 9:00 PM
          </FooterText>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Newsletter</FooterTitle>
          <FooterText>
            Subscribe to our newsletter for updates, special offers, and culinary insights.
          </FooterText>
          <NewsletterForm onSubmit={handleNewsletterSubmit}>
            <NewsletterInput
              type="email"
              placeholder="Enter your email"
              required
            />
            <SubscribeButton type="submit">Subscribe</SubscribeButton>
          </NewsletterForm>
        </FooterSection>
      </FooterContent>

      <Copyright>
        © {new Date().getFullYear()} Mamma V's. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 