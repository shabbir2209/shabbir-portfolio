import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

// Hero section of the site
const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Aspiring Fullstack Web Developer | Mobile App Developer | Student
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;