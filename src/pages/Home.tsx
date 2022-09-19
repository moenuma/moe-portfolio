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

// 1vw = 16px
const Heading = styled.h1`
  display: inline;
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 80px;
  margin: 12px 0;
  letter-spacing: 16px;
`;

const AvatorImage = styled.img`
  width: 144px;
`;

const Text = styled.div`
  font-size: 21px;
  font-weight: 300;
  letter-spacing: 6.4px;
  line-height: 32px;
`;