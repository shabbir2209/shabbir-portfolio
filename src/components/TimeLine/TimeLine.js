import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

// About me section
const Timeline = () => {

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
      I find immense joy in transforming ideas into interactive, dynamic, and responsive websites and web applications. The process of taking a concept from wireframe to fully functional reality, while continuously learning and adapting to new technologies, keeps me motivated and excited about my work.
      </SectionText>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
