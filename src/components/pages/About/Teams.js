import { Box, Stack, Typography } from '@mui/material';
import { getAllTeams } from 'components/service/TeamService';
import { useEffect, useState } from 'react';
import { theme } from 'theme';
import { IMAGE_SOURCE } from 'utils/constants';
import PersonInfo from './PersonInfo';

export default function Teams({ isMobile }) {
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
  const updateData = async () => {
    const res = await getAllTeams();
    if (res?.status === 200) {
      setTeams(res.data);
    }
  };
  useEffect(() => {
    updateData();
  }, []);
  return (
    <Box
      sx={{
        display: {
          xs: 'block',
          md: 'flex',
        },
        background: theme.palette.common.black,
        overflowY: 'hidden',
        overflowX: 'overlay',
        height: {
          xs: 'auto',
          md: 'calc(100vh)',
        },
      }}
      position={'relative'}
      minWidth={{
        xs: 'none',
        md: '100vw',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          background: theme.palette.common.black,
        }}
        // minWidth={'calc(100vw - 80px)'}
        p={{
          xs: '80px 16px',
          md: '15vw 200px 0 160px',
        }}
      >
        <Stack
          width={{
            xs: '100%',
            md: '50vw',
          }}
          height={'100%'}
          rowGap={3}
        >
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
          display: {
            xs: 'block',
            md: 'flex',
          },
          background: theme.palette.common.black,
          columnGap: 15,
          direction: {
            xs: 'column',
            md: 'row',
          },
        }}
        pr={{
          xs: 0,
          md: '160px',
        }}
        borderRight={{
          xs: 'none',
          md: '1px solid ' + theme.palette.divider,
        }}

        // minWidth={'calc(100vw - 80px)'}
      >
        {teams &&
          teams?.map((e, i) => (
            <PersonInfo
              key={i}
              isMobile={isMobile}
              src={e?.team?.name ? IMAGE_SOURCE + e?.team?.name : ''}
              name={e?.team?.actorName}
              position={e?.team?.title}
              data={e}
            />
          ))}
      </Box>
    </Box>
  );
}
