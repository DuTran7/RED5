import { Box, Stack } from '@mui/material';
import ScrollContainer from 'components/shared/ScrollContainer';
import { AboutTabs } from 'components/ukit/Tabs';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { theme } from 'theme';
import Awards from './Awards';
import ContactUs from './ContactUs';
import Culture from './Culture';
import Megazines from './Megazines';
import PressAndRecognition from './PressAndRecognition';
import Teams from './Teams';

export default function AboutPage() {
  const router = useRouter();
  const [value, setValue] = useState('culture');

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  useEffect(() => {
    if (value) {
      const element = document.getElementById(value);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [value]);
  return (
    <ScrollContainer>
      <Stack
        flexGrow={0}
        position={'sticky'}
        left={0}
        top={0}
        width={'fit-content'}
        sx={{
          background:
            'linear-gradient(180deg, rgb(0 0 0 / 99%) 0%, #000000 100%)',
        }}
      >
        <AboutTabs value={value} onChange={handleChange} />
      </Stack>
      <div id="culture">
        <Culture />
      </div>
      <Teams />
      <div id="awards">
        <Awards />
      </div>
      <div id="press">
        <PressAndRecognition />
      </div>
      <Megazines />
      <div id="contact">
        <ContactUs />
      </div>
    </ScrollContainer>
  );
}
