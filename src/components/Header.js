import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>ARAGON</Logo>
      <Nav>
        <NavItem>Products</NavItem>
        <NavItem>Project</NavItem>
        <NavItem>Resources</NavItem>
        <NavItem>Ecosystem</NavItem>
      </Nav>
      <ButtonGroup>
        <Button primary>Launch your DAO</Button>
        <Button>Developers</Button>
      </ButtonGroup>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #0066ff;
  color: white;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
`;

const NavItem = styled.div`
  margin: 0 15px;
  cursor: pointer;
`;

const ButtonGroup = styled.div`
  display: flex;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  background-color: ${props => (props.primary ? 'white' : '#0044cc')};
  color: ${props => (props.primary ? '#0066ff' : 'white')};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    opacity: 0.9;
  }
`;
