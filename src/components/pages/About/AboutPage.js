import { Box, Stack } from '@mui/material';
import { AboutTabs } from 'components/ukit/Tabs';
import { useState } from 'react';
import { theme } from 'theme';
import Awards from './Awards';
import Culture from './Culture';
import Teams from './Teams';

export default function AboutPage() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        background: theme.palette.common.black,
        height: 'calc(100vh - 84px)',
        overflowX: 'auto',
      }}
      position={'relative'}
      minWidth={'100vw'}
    >
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
      <Culture />
      <Teams />
      <Awards />
    </Box>
  );
}
