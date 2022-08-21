import { Box, Stack, Typography } from '@mui/material';
import { theme } from 'theme';

export default function ChapterCard({ chapNo, name, image }) {
  return (
    <Stack
      // width={'200px'}
      height={'calc(100vh - 84px)'}
      sx={{
        background: theme.palette.common.black,
        '&:hover': {
          cursor: 'pointer',
          backgroundImage: image ? `url(${image})` : 'none',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        },
      }}
      position={'relative'}
    >
      <Stack direction={'row'} justifyContent={'center'} pt={'24px'}>
        <Typography variant={'subtitle1'} color={'text.primary'}>
          {'Chapter ' + chapNo}
        </Typography>
      </Stack>
      <Stack
        direction={'column'}
        justifyContent={'start'}
        position={'relative'}
      >
        <Typography
          variant={'h3'}
          color={'text.primary'}
          sx={{
            position: 'absolute',
            left: '50%',
            transformOrigin: '-2% 68%',
            transform: 'rotate(90deg)',
          }}
          width={'max-content'}
        >
          {name}
        </Typography>
      </Stack>
    </Stack>
  );
}
