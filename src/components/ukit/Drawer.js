import { Drawer } from '@mui/material';
import { styled } from '@mui/material/styles';
import { theme } from 'theme';

export const StyledDrawerLeft = styled(
  ({ widthCustom, visible, onClose, children }) => (
    <Drawer
      anchor={'left'}
      open={visible}
      onClose={onClose}
      height={'auto'}
      sx={{
        '& .MuiDrawer-paper': {
          background: theme.palette.common.white,
          borderLeft: '1px solid ' + theme.palette.primary.main,
          position: 'absolute',
          top: {
            xs: '89px',
            sm: '73px',
            md: '85px',
            lg: '85px',
          },
          minWidth: widthCustom || {
            // xs: `calc(100vw - 47px)`,
            // sm: 'calc(100vw - 47px)',
            // md: `calc(100vw - ${60 * 3}px - ${160 * 4}px)`,
            // lg: `calc(100vw - ${60 * 3}px - ${195 * 4}px)`,
            xs: `calc(100vw / 3)`,
            sm: 'calc(100vw / 3)',
            md: `calc(100vw / 3)`,
            // lg: `calc(100vw/3*1)`,
            lg: `calc(100vw / 3)`,
          },
        },
      }}
    >
      {children}
    </Drawer>
  )
)(({}) => ({}));
export const StyledDrawerRight = styled(
  ({ widthCustom, visible, onClose, children }) => (
    <Drawer
      anchor={'right'}
      open={visible}
      onClose={onClose}
      height={'auto'}
      sx={{
        '& .MuiPaper-root': {
          background: theme.palette.common.white,
          top: {
            xs: '89px',
            sm: '73px',
            md: '85px',
            lg: '85px',
          },
          width: widthCustom || {
            xs: 'calc(100vw - 48px - 1px)',
            sm: 'calc(100vw - 95px - 1px)',
            md: 'calc(60px + 60px + 60px + calc(calc(100vw - calc(100vw / 3) - 60px - 60px - 60px)) / 4 + 1px)',
            lg: 'calc(60px + 60px + 60px + calc(calc(100vw - calc(100vw / 3) - 60px - 60px - 60px)) / 4 + 1px)',
          },
        },
      }}
    >
      {children}
    </Drawer>
  )
)(({}) => ({}));

export const StyledDrawerTop = styled(
  ({ visible, onClose, customElement, children, ...other }) => (
    <Drawer
      {...other}
      variant={'temporary'}
      className={'drawer-top-container'}
      anchor={'top'}
      open={visible}
      onClose={onClose}
      height={'auto'}
      sx={{
        // boxShadow: 'none',
        '& .MuiDrawer-paper': {
          padding: '40px 16px',
          position: 'absolute',
          background: theme.palette.common.white,
          top: {
            xs: '134px',
            sm: '119px',
            md: '146px',
            lg: '166px',
          },
        },
        '&.drawer-top-container .MuiBackdrop-root': {
          top: {
            xs: '134px',
            sm: '119px',
            md: '146px',
            lg: '166px',
          },
        },
      }}
    >
      {children}
    </Drawer>
  )
)(({}) => ({}));
