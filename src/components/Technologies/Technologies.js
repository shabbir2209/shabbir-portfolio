import React from 'react';
import { DiFirebase, DiReact, } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import Link from 'next/link';

// Technologies section 
const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            <br />
            React.js | React Native | Django Jinja Templating
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
           <br />
            Express | Node | Python(Django) | Mongo | RESTful APIs
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Google Marketing</ListTitle>
          <ListParagraph>
           <br />
            Google Adwords | Google Analytics | Google My Business | Google Merchant Center
          </ListParagraph>
        </ListContainer>
      </ListItem>
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
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
