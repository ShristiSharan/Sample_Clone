import React from 'react';
import styled from 'styled-components';

const Landing = () => {
  return (
    <LandingContainer>
      <MainHeading>Build Better, Together</MainHeading>
      <SubHeading>
        Launch your DAO on the most user-friendly tech stack and experiment with governance at the speed of software.
      </SubHeading>
      <ButtonGroup>
        <Button primary>Launch your DAO</Button>
        <Button>What is a DAO?</Button>
      </ButtonGroup>
      <ImageGroup>
        <Image src="path/to/aragon-app.png" alt="Aragon App" />
        <Image src="path/to/aragon-sdk.png" alt="Aragon SDK" />
        <Image src="path/to/aragon-ods.png" alt="Aragon ODS" />
        <Image src="path/to/aragon-osx.png" alt="Aragon OSX" />
      </ImageGroup>
    </LandingContainer>
  );
};

export default Landing;

const LandingContainer = styled.div`
  text-align: center;
  padding: 100px 20px;
  background-color: #0066ff;
  color: white;
`;

const MainHeading = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const SubHeading = styled.p`
  font-size: 18px;
  margin-bottom: 40px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
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

const ImageGroup = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Image = styled.img`
  margin: 10px;
  max-width: 150px;
  border: 2px solid white;
  border-radius: 10px;
`;
