import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  right: 2rem;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    display: flex;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: #1f2827;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(0)' : 'rotate(45deg)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '1' : '0'};
      transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(20px)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(0)' : 'rotate(-45deg)'};
    }
  }
`;