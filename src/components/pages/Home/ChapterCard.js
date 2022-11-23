import { Box, Stack, Typography } from '@mui/material';
import { theme } from 'theme';
import { IMAGE_SOURCE } from 'utils/constants';

export default function ChapterCard({
  chapNo,
  name,
  image,
  onClick,
  data,
  shouldBlur,
}) {
  return (
    <Stack
      height={'calc(100vh - 84px)'}
      sx={{
        background: theme.palette.common.black,
        filter: shouldBlur ? 'blur(15px)' : '',
        transition: 'ease-out all .3s',
        '&:hover': {
          backgroundImage: image
            ? `linear-gradient(#00000066, #00000066), url(${
                IMAGE_SOURCE + image
              })`
            : 'none',
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
          variant={'h2'}
          color={'text.primary'}
          sx={{
            position: 'absolute',
            left: '50%',
            transformOrigin: '-2% 68%',
            transform: 'rotate(90deg)',
            '&:hover': {
              cursor: 'pointer',
              // color: theme.palette.primary.main,
            },
          }}
          width={'max-content'}
          onClick={() => onClick?.(data)}
        >
          {name}
        </Typography>
      </Stack>
    </Stack>
  );
}
