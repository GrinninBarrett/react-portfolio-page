import styled from 'styled-components';

export const StyledMobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 6em;
  background: rgb(238, 238, 238);
  height: 100vh;
  width: 100%;
  text-align: left;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};

  a {
    font-size: 1rem;
    padding: 2rem 0;
    color: #1f2827;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: 768px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #47684a;
    }
  }
`;