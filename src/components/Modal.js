import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -2rem;
  right: -2rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.light};
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;
  padding: 0.5rem;

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
`;

const Modal = ({ isOpen, onClose, imageSrc, alt }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleOverlayClick}
        >
          <ModalContent
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
          >
            <CloseButton onClick={onClose}>
              <FaTimes />
            </CloseButton>
            <ModalImage src={imageSrc} alt={alt} />
          </ModalContent>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

export default Modal;
