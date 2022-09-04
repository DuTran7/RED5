import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Stack,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import { useSession } from 'next-auth/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { theme } from 'theme';
import { HEADER_KEY, ROUTER } from 'utils/constants';
import { Red5 } from './icons';
const Logo = ({ width, height, onClick }) => (
  <Link
    href={{
      pathname: '/',
    }}
  >
    <a>
      <Red5
        viewBox="0 0 60 36"
        sx={{
          fontSize: '60px',
        }}
      />
    </a>
  </Link>
);

const Header = (props) => {
  const router = useRouter();
  const session = useSession();
  const [itemSelected, setItemSelected] = React.useState(HEADER_KEY.HOME);

  const navigateOn = (item) => {
    switch (item) {
      case HEADER_KEY.HOME:
        router.push('/');
        break;
      case HEADER_KEY.ABOUT:
        router.push(ROUTER.ABOUT);
        break;
    }
  };

  React.useEffect(() => {
    switch (router.asPath) {
      case '/':
        setItemSelected(HEADER_KEY.HOME);
        break;
      case '/' + HEADER_KEY.ABOUT:
        setItemSelected(HEADER_KEY.ABOUT);
        break;
    }
  }, [router.query]);

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background:
          ' linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)',
        borderRadius: 0,
        zIndex: 3,
      }}
      elevation={3}
    >
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        height={'84px'}
        p={3}
        px={{
          xs: '16px',
          md: '24px',
        }}
        alignItems={'center'}
      >
        <Logo onClick={() => setItemSelected(HEADER_KEY.HOME)} />
        <BottomNavigation
          showLabels
          sx={{
            justifyContent: 'flex-end',
            '& .MuiButtonBase-root': {
              paddingX: {
                xs: '0',
                md: '12px',
              },
              alignItems: {
                xs: 'flex-end',
                md: 'center',
              },
            },
            '& .MuiBottomNavigationAction-label .MuiTypography-root': {
              color: theme.palette.common.white,
              opacity: 0.5,
            },
            background: '#00000000',
            '& .MuiBottomNavigationAction-label.Mui-selected .MuiTypography-root':
              {
                color: theme.palette.primary.main,
                opacity: 1,
              },
          }}
          value={itemSelected}
          onChange={(event, newValue) => {
            setItemSelected(newValue);
            navigateOn(newValue);
          }}
        >
          <BottomNavigationAction
            label={<Typography variant="body1">Projects</Typography>}
            value={HEADER_KEY.HOME}
          />
          <BottomNavigationAction
            label={<Typography variant="body1">About</Typography>}
            value={HEADER_KEY.ABOUT}
          />
        </BottomNavigation>
      </Stack>
    </Paper>
  );
};

export default Header;
