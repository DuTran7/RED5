import {
  Box,
  Divider,
  Drawer,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Selector as SelectorIcon } from './icons/selector';
import { ChartBar as ChartBarIcon } from './icons/chart-bar';
import { Cog as CogIcon } from './icons/cog';
import { Lock as LockIcon } from './icons/lock';
import { ShoppingBag as ShoppingBagIcon } from './icons/shopping-bag';
import { User as UserIcon } from './icons/user';
import { UserAdd as UserAddIcon } from './icons/user-add';
import { Users as UsersIcon } from './icons/users';
import { XCircle, XCircle as XCircleIcon } from './icons/x-circle';
import { NavItem } from './nav-item';
import { Red5 } from 'components/shared/icons';
import { signOut } from 'next-auth/client';
const items = [
  // {
  //   href: '/admin',
  //   // icon: <ChartBarIcon fontSize="small" />,
  //   title: 'Dashboard',
  // },
  {
    href: '/admin/award',
    // icon: <UsersIcon fontSize="small" />,
    title: 'Awards',
  },
  {
    href: '/admin/category',
    // icon: <ShoppingBagIcon fontSize="small" />,
    title: 'Categories',
  },
  {
    href: '/admin/detail-category',
    // icon: <UserIcon fontSize="small" />,
    title: 'Details Category',
  },
  {
    href: '/admin/press',
    // icon: <CogIcon fontSize="small" />,
    title: 'Press',
  },
  {
    href: '/admin/recognition',
    // icon: <LockIcon fontSize="small" />,
    title: 'Recognitions',
  },
  {
    href: '/admin/team',
    // icon: <UserAddIcon fontSize="small" />,
    title: 'Teams',
  },
  {
    href: '/admin',
    icon: <XCircle fontSize="small" />,
    title: 'Logout',
    onClick: () => {
      signOut();
    },
  },
];
export const Sidebar = (props) => {
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false,
  });

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          background: 'black',
        }}
      >
        <div>
          <Stack sx={{ p: 3 }} alignItems={'center'}>
            <NextLink href="/admin" passHref>
              <a>
                <Red5
                  viewBox="0 0 60 36"
                  sx={{
                    height: '1em',
                    width: '2em',
                    fontSize: '100px',
                  }}
                />
              </a>
            </NextLink>
          </Stack>
        </div>
        <Divider
          sx={{
            borderColor: '#2D3748',
            mb: 3,
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              onClick={item?.onClick}
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

Sidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
