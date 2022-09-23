import { Box } from '@mui/material';
import { theme } from 'theme';

export default function ScrollContainer({
  children,
  height,
  customClass = '',
  ...other
}) {
  return (
    <Box
      {...other}
      className={'scroll-horizontal ' + customClass}
      sx={{
        display: {
          xs: 'block',
          md: 'flex',
        },
        background: theme.palette.common.black,
        overflowY: {
          xs: 'overlay',
          md: 'hidden',
        },
        overflowX: 'overlay',
        height: height || 'calc(100vh)',
      }}
      position={'relative'}
      minWidth={{
        xs: 'none',
        md: '100vw',
      }}
    >
      {children}
    </Box>
  );
}
