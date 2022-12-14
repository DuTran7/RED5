import CloseIcon from '@mui/icons-material/Close';
import { Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { theme } from 'theme';

export default function HardCoverHorizontal({ name }) {
  const router = useRouter();
  return (
    <Stack
      width={'100vw'}
      direction={'row'}
      // flexGrow={0}
      position={'fixed'}
      zIndex={3}
      borderBottom={'1px solid ' + theme.palette.divider}
      // left={0}
      // top={0}
      sx={{
        background: theme.palette.common.black,
        display: {
          xs: 'flex',
          md: 'none',
        },
      }}
      onClick={(evt) => {
        evt.preventDefault();
      }}
    >
      <Stack
        width={'100%'}
        height={'80px'}
        borderRight={'1px solid ' + theme.palette.divider}
        justifyContent={'center'}
        alignItems={'flex-start'}
        pl={3}
        alignContent={'center'}
        sx={{
          background: theme.palette.common.black,
        }}
      >
        <Typography
          variant={'h4'}
          color={'text.primary'}
          fontSize={'24px'}
          sx={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
          }}
          width={'calc(100vw - 114px)'}
          title={name}
        >
          {name}
        </Typography>
      </Stack>
      <Stack
        width={'80px'}
        height={'80px'}
        minWidth={'80px'}
        justifyContent={'center'}
        alignItems={'center'}
        borderRight={'1px solid ' + theme.palette.divider}
        onClick={(evt) => {
          evt.preventDefault();
          router.push({ pathname: '/' });
        }}
        flexShrink={0}
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
            opacity: 0.5,
            color: theme.palette.common.white,
          }}
        />
      </Stack>
    </Stack>
  );
}
