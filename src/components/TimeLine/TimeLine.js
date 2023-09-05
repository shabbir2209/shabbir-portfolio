import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from '../Technologies/TechnologiesStyles';

// About me section
const Timeline = () => {

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
      I find immense joy in transforming ideas into interactive, dynamic, and responsive websites and web applications. The process of taking a concept from wireframe to fully functional reality, while continuously learning and adapting to new technologies, keeps me motivated and excited about my work.
      </SectionText>
      <SectionDivider />
      <SectionTitle>Links</SectionTitle>
      <List>
      <ListItem>
      <ListContainer>
          <ListTitle>Hyperiondev Web Development Bootcamp Link</ListTitle>
          <Link href="https://www.hyperiondev.com/portfolio/58679/" target="_blank">
            Click
          </Link>
      </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Github Link</ListTitle>
          <Link href="https://github.com/shabbir2209" target="_blank">
            Click
          </Link>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Linked In</ListTitle>
          <Link href="https://www.linkedin.com/in/shabbir-hussain-3a21b4215/" target="_blank">
            Click
          </Link>
        </ListContainer>
      </ListItem>
      </List>
    </Section>
  );
};

export default Timeline;
