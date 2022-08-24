import { Box, Stack } from '@mui/material';
import Image from 'next/image';
import { theme } from 'theme';

export default function Megazines() {
  const listImg = [
    '/imgs/magazines/Frame.png',
    '/imgs/magazines/Frame-1.png',
    '/imgs/magazines/Frame-2.png',
    '/imgs/magazines/Frame-3.png',
    '/imgs/magazines/Frame-4.png',
    '/imgs/magazines/Frame-5.png',
    '/imgs/magazines/Frame-6.png',
    '/imgs/magazines/Frame-7.png',
    '/imgs/magazines/Frame-8.png',
    '/imgs/magazines/Frame-9.png',
    '/imgs/magazines/Frame-10.png',
  ];
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
        minWidth={'calc(100vw - 80px)'}
        p={'64px 120px 100px 140px'}
        direction={'row'}
        flexWrap={'wrap'}
        alignItems={'center'}
        justifyContent={'flex-start'}
        columnGap={3}
        rowGap={3}
        height={'100%'}
        sx={{
          overflowX: 'auto',
          overflowY: 'hidden',
        }}
      >
        {listImg &&
          listImg.map((e, i) => (
            <Stack flexBasis={'12.2%'}>
              <img src={e} key={i} width={200} height={250} alt={'loading'} />
            </Stack>
          ))}
      </Stack>
    </Box>
  );
}
