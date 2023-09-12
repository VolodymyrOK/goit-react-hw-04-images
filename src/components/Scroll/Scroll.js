import { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { ImPointUp } from 'react-icons/im';
import { ButtonUp } from './Scroll.styled';

export const Scroll = () => {
  const [isScrollUp, setIsScrollUp] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrollUp(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onScrollUp = () => {
    scroll.scrollToTop();
  };

  return (
    isScrollUp && (
      <ButtonUp type="button" onClick={onScrollUp}>
        <ImPointUp />
      </ButtonUp>
    )
  );
};
