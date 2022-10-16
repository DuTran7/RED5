import CloseIcon from '@mui/icons-material/Close';
import { Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { theme } from 'theme';

export default function HardCoverVertical({ name }) {
  const router = useRouter();
  return (
    <Stack
      width={'80px'}
      flexGrow={0}
      position={'sticky'}
      zIndex={3}
      borderRight={'1px solid ' + theme.palette.divider}
      left={0}
      top={0}
      sx={{
        background: theme.palette.common.black,
        display: {
          xs: 'none',
          md: 'flex',
        },
      }}
      onClick={(evt) => {
        evt.preventDefault();
      }}
    >
      <Stack
        width={'100%'}
        height={'80px'}
        justifyContent={'center'}
        alignItems={'center'}
        borderBottom={'1px solid ' + theme.palette.divider}
        onClick={(evt) => {
          evt.preventDefault();
          router.push({ pathname: '/' });
        }}
        sx={{
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.1)',
            cursor: 'pointer',
          },
        }}
      >
        <CloseIcon
          sx={{
            fontSize: '40px',
            color: theme.palette.common.white,
          }}
        />
      </Stack>
      <Stack
        width={'80px'}
        height={'100%'}
        position={'relative'}
        borderRight={'1px solid ' + theme.palette.divider}
        sx={{
          background: theme.palette.common.black,
        }}
      >
        <Typography
          variant={'h4'}
          color={'text.primary'}
          fontSize={'24px'}
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
