import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

// About me section
const Timeline = () => {

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
      Started off as a self taught developer with python and the basics of web development.Aspiring student keen on learning more technologies.
      </SectionText>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
