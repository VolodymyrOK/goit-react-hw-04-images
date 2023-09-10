import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { ModalWindow, Overlay } from './Modal.styled';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflowY = 'hidden';
    document.body.style.maxHeight = '100vh';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.removeAttribute('style');
    };
  });

  const handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      onClose();
    }
  };

  const handleBackDropClick = evt => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackDropClick}>
      <ModalWindow>{children}</ModalWindow>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
};
