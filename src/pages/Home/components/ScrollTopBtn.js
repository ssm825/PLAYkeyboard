import { useEffect, useState } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import styled from 'styled-components';
import { colors } from 'styles/colors';

const ScrollTopBtn = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const scrollBtn = () => {
      if (window.scrollY > 200) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', scrollBtn);
    return () => {
      window.removeEventListener('scroll', scrollBtn);
    };
  }, []);

  return (
    <>
      {showTopBtn && (
        <TopBtn>
          <button onClick={scrollTop}>
            <FaAngleUp size={25} />
          </button>
        </TopBtn>
      )}
    </>
  );
};

const TopBtn = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 15%;
  opacity: 0.5;
  z-index: 1;
  &:hover {
    opacity: 1;
  }

  button {
    width: 60px;
    height: 60px;
    border: 1px solid ${colors.main_pink};
    border-radius: 50%;
    background-color: ${colors.main_pink};
    color: ${colors.white};
    cursor: pointer;
  }

  @media (max-width: 768px) {
    bottom: 10%;
    button {
      width: 50px;
      height: 50px;
    }
  }
`;

export default ScrollTopBtn;
