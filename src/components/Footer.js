import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2024 Aragon. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #0044cc;
  color: white;
`;

const FooterText = styled.p`
  margin: 0;
`;
