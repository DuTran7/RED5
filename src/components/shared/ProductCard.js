import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { theme } from 'theme';

export default function ProductCard({ item, onClick }) {
  const [onMouseE, setOnMouseE] = useState(false);
  const styleImg = {
    border: '1px solid',
    borderColor: theme.palette.primary.main,
    borderRadius: '4px',
  };
  return (
    <Stack
      direction={'column'}
      onMouseEnter={() => setOnMouseE(true)}
      onMouseLeave={() => setOnMouseE(false)}
      rowGap={'20px'}
      onClick={onClick}
      justifyContent={'flex-start'}
      alignContent={'start'}
      minHeight={{
        xs: '426px',
        md: '385px',
        lg: '527px',
      }}
      pb={'20px'}
      sx={{
        display: 'flex !important',
        borderRadius: '4px',
        borderBottom: {
          xs: 'none',
        },
        borderColor: theme.palette.primary.main,
        '&:hover': {
          cursor: 'pointer',
        },
      }}
    >
      <img src={item?.src || '/imgs/no-img.png'} width={'100%'} style={{ ...styleImg }} />
      <Stack textAlign={'center'} justifyContent={'center'}>
        <Typography variant="h4" color={onMouseE && theme.palette.primary.main}>
          {item?.name}
        </Typography>
        <Typography
          variant={'subtitle2'}
          color={onMouseE && theme.palette.primary.main}
        >
          {item?.description}
        </Typography>
      </Stack>
    </Stack>
  );
}
