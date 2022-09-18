import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  fadeInUp,
  animationContainer
} from '../animations/variants';
import styled from '@emotion/styled';
import Avator from '../assets/avator.png';

export const Home: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: [0.25],
    triggerOnce: true
  });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <HomeSection
      id="home"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animationContainer}
    >
      <Title variants={fadeInUp}>
        <AvatorImage src={Avator} alt="My avator" />
        <Heading>Moe Numasawa</Heading>
        <Text>CS Student at the University of Alberta</Text>
      </Title>
    </HomeSection>
  );
}

const HomeSection = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  z-index: 100;
  align-items: center;
`;

const Title = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
`;

const Heading = styled.h1`
  display: inline;
  font-style: normal;
  font-weight: 700;
  font-size: 4vw;
  line-height: 5vw;
  margin: 0.7rem 0;
  letter-spacing: 1vw;
`;

const Emojis = styled.span`
  font-size: 3vw;
  margin-top: 2vw;
  margin-left: auto;
  margin-right: auto;
`;

const AvatorImage = styled.img`
  width: 9vw;
`;

const Text = styled.div`
  font-size: 1.3vw;
  font-weight: 300;
  letter-spacing: 0.4vw;
  line-height: 2vw;
`;