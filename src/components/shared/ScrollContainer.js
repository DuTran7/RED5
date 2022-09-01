import { Box } from '@mui/material';
import { theme } from 'theme';

export default function ScrollContainer({ children, height, ...other }) {
  console.log(height);
  return (
    <Box
      {...other}
      className="scroll-horizontal"
      sx={{
        display: 'flex',
        background: theme.palette.common.black,
        overflowY: 'hidden',
        overflowX: 'scroll',
        height: height || 'calc(100vh - 84px)',
      }}
      position={'relative'}
      minWidth={'100vw'}
    >
      {children}
    </Box>
  );
}
