import { Drawer } from '@mui/material';

export default function DrawerTwoLevel(visible, children, onClose) {
  return (
    <Drawer
      anchor={'left'}
      open={visible}
      onClose={onClose}
      sx={{
        '& .MuiPaper-root': {
          top: {
            xs: '89px',
            sm: '73px',
            md: '85px',
            lg: '85px',
          },
          width: {
            xs: `calc(100vw - 47px)`,
            sm: 'calc(100vw - 47px)',
            lg: `calc(100vw - ${60 * 3}px - ${198 * 4}px)`,
          },
        },
      }}
    >
      {children}
    </Drawer>
  );
}
