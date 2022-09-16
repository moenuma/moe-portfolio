import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  fadeInRight,
  animationContainer
} from '../animations/variants';
import styled from '@emotion/styled';

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
      <Title variants={fadeInRight}>
        <Heading>Moe</Heading>
        <Emoji>👩🏻‍💻💬👩🏻‍🎨💡</Emoji><br/>
        <Heading>Numasawa.</Heading>
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