import { Box, Stack, Typography } from '@mui/material';
import ScrollContainer from 'components/shared/ScrollContainer';
import { AboutTabHorizontal, AboutTabs } from 'components/ukit/Tabs';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { theme } from 'theme';
import Awards from './Awards';
import ContactUs from './ContactUs';
import Culture from './Culture';
import Megazines from './Megazines';
import PressAndRecognition from './PressAndRecognition';
import Teams from './Teams';
const distanceOriginal = 0;
export default function AboutPage({ isMobile, position }) {
  const teamRef = useRef();
  const cultureRef = useRef();
  const awardRef = useRef();
  const pressRef = useRef();
  const contactRef = useRef();

  const router = useRouter();
  const [value, setValue] = useState('culture');
  const [swipeScroll, setSwipeScroll] = useState(0);
  const [valueToScroll, setValueToScroll] = useState('culture');

  const handleChange = (event, newValue, scroll) => {
    setValue(newValue);
    if (scroll) {
      setValueToScroll(newValue);
    }
  };

  useEffect(() => {
    if (position >= contactRef.current.offsetLeft) {
      setValue('contact');
      return;
    }
    if (position >= pressRef.current.offsetLeft) {
      setValue('press');
      return;
    }
    if (position >= awardRef.current.offsetLeft) {
      setValue('awards');
      return;
    }
    if (position >= teamRef.current.offsetLeft) {
      setValue('team');
      return;
    }
    if (position >= contactRef.current.offsetLeft) {
      setValue('contact');
      return;
    }
    if (position >= cultureRef.current.offsetLeft) {
      setValue('culture');
      return;
    }
  }, [position]);

  useEffect(() => {
    if (value) {
      const element = document.getElementById(value);
      element?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start',
      });
    }
  }, [value]);

  useEffect(() => {
    if (isMobile) {
      let newP = swipeScroll;
      if (swipeScroll < 0) {
        newP = 0;
        setSwipeScroll(newP);
      }
      if (newP >= contactRef.current.offsetTop - distanceOriginal) {
        setValue('contact');
        return;
      }
      if (newP >= pressRef.current.offsetTop - distanceOriginal) {
        setValue('press');
        return;
      }
      if (newP >= awardRef.current.offsetTop - distanceOriginal) {
        setValue('awards');
        return;
      }
      if (newP >= teamRef.current.offsetTop - distanceOriginal) {
        setValue('team');
        return;
      }
      if (newP >= contactRef.current.offsetTop - distanceOriginal) {
        setValue('contact');
        return;
      }
      if (newP >= cultureRef.current.offsetTop - distanceOriginal) {
        setValue('culture');
        return;
      }
    }
  }, [swipeScroll]);

  return (
    <ScrollContainer
      customClass="about-scroll"
      onSwipe={(position) => setSwipeScroll(swipeScroll + position)}
    >
      <Stack
        flexGrow={0}
        position={'fixed'}
        left={0}
        top={0}
        zIndex={3}
        width={'fit-content'}
        sx={{
          display: {
            xs: 'none',
            md: 'flex',
          },
          transform: 'translateX(-20px)',
          background:
            'linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 104.37%)',
        }}
      >
        <AboutTabs
          value={value}
          onChange={(e, nvl) => handleChange(e, nvl, true)}
        />
      </Stack>
      <Stack
        position={'fixed'}
        left={0}
        top={0}
        zIndex={3}
        width={'100vw'}
        height={4}
        sx={{
          display: {
            xs: 'flex',
            md: 'none',
          },

          background:
            'linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 104.37%)',
        }}
      >
        <AboutTabHorizontal
          value={value}
          onChange={(e, nvl) => handleChange(e, nvl, true)}
        />
      </Stack>
      <div id="culture" ref={cultureRef}>
        <Culture />
      </div>
      <div id="team" ref={teamRef}>
        <Teams isMobile={isMobile} />
      </div>
      <div id="awards" ref={awardRef}>
        <Awards />
      </div>
      <div id="press" ref={pressRef}>
        <PressAndRecognition isMobile={isMobile} />
      </div>
      <Megazines />
      <div id="contact" ref={contactRef}>
        <ContactUs />
      </div>
    </ScrollContainer>
  );
}
