import { Box, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { theme } from 'theme';
import PersonInfo from './PersonInfo';

export default function Teams() {
  const [teams, setTeams] = useState([
    {
      src: '/imgs/NV1.png',
      name: 'LAI CHINH truc',
      position: 'Founder',
    },
    {
      src: '/imgs/NV2.png',
      name: 'Nguyen vinh nhi',
      position: 'Interior design',
    },
    {
      src: '/imgs/NV3.png',
      name: 'Lai nguyen tin',
      position: 'interior design',
    },
    {
      src: '/imgs/NV3.png',
      name: 'tran quoc tuan',
      position: 'interior design',
    },
    {
      src: '/imgs/NV3.png',
      name: 'tran quoc thao',
      position: 'interior design',
    },
  ]);
  return (
    <Box
      sx={{
        display: 'flex',
        background: theme.palette.common.black,
        overflowY: 'hidden',
        overflowX: 'scroll',
        height: 'calc(100vh - 84px)',
      }}
      minWidth={'100vw'}
    >
      <Box
        sx={{
          display: 'flex',
          background: theme.palette.common.black,
        }}
        // minWidth={'calc(100vw - 80px)'}
        p={'120px 200px 0 160px'}
      >
        <Stack width={'690px'} height={'100%'} rowGap={3}>
          <Typography variant={'h2'} color={'text.primary'}>
            Are you looking for a tame and timid digital studio? Well keep
            looking.
          </Typography>
          <Typography variant={'h5'} color={'text.secondary'}>
            Red5studio is an Interior design firm based in Saigon, which
            specializes in residential, apartment, retail, hospitality, and
            commercial practices. We provide a full-service that starts from the
            concept development to the final construction. Red5studio was
            founded by Interior Designer Lai Chinh Truc
          </Typography>
        </Stack>
      </Box>
      <Box
        sx={{
          display: 'flex',
          background: theme.palette.common.black,
          columnGap: 15,
        }}
        pr={'160px'}
        borderRight={'1px solid ' + theme.palette.divider}
        // minWidth={'calc(100vw - 80px)'}
      >
        {teams &&
          teams?.map((e, i) => (
            <PersonInfo
              key={i}
              src={e?.src}
              name={e?.name}
              position={e?.position}
            />
          ))}
      </Box>
    </Box>
  );
}
