import { Box, Stack } from '@mui/material';
import ScrollContainer from 'components/shared/ScrollContainer';
import { AboutTabHorizontal, AboutTabs } from 'components/ukit/Tabs';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { theme } from 'theme';
import Awards from './Awards';
import ContactUs from './ContactUs';
import Culture from './Culture';
import Megazines from './Megazines';
import PressAndRecognition from './PressAndRecognition';
import Teams from './Teams';

export default function AboutPage({ isMobile }) {
  const router = useRouter();
  const [value, setValue] = useState('culture');

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

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
  return (
    <ScrollContainer>
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
        <AboutTabs value={value} onChange={handleChange} />
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
        <AboutTabHorizontal value={value} onChange={handleChange} />
      </Stack>
      <div id="culture">
        <Culture />
      </div>
      <div id="team">
        <Teams isMobile={isMobile} />
      </div>
      <div id="awards">
        <Awards />
      </div>
      <div id="press">
        <PressAndRecognition isMobile={isMobile} />
      </div>
      <Megazines />
      <div id="contact">
        <ContactUs />
      </div>
    </ScrollContainer>
  );
}
