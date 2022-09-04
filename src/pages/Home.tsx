import React from 'react';
import styled from '@emotion/styled';

export const Home: React.FC = () => {
    return (
    <HomeSection id="home">
      <Title>
        <Heading>Moe</Heading>
        <Emoji>👩🏻‍💻💬👩🏻‍🎨💡</Emoji><br/>
        <Heading>Numasawa.</Heading>
      </Title>
    </HomeSection>
    );
}

const HomeSection = styled.section`
  height: 100vh;
  z-index: 100;
`;

const Title = styled.div`
  padding-top: 22vw;
  padding-left: 5%;
`;

const Heading = styled.h1`
  display: inline;
  font-style: normal;
  font-weight: 700;
  font-size: 11vw;
  line-height: 9vw;
  margin: 0;
`;

const Emoji = styled.span`
  font-size: 6vw;
  line-height: 3vw;
  margin-left: 10vw;
  padding-bottom: 10vw;
`;