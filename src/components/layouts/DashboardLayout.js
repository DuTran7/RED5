import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Navbar } from 'components/pages/Admin/Navbar';
import { Sidebar } from 'components/pages/Admin/Sidebar';
import { theme } from 'theme';
import { getSession, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import Head from 'next/head';
import { debounce } from 'lodash';

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 280,
  },
}));

export const DashboardLayout = (props) => {
  const { enqueueSnackbar } = useSnackbar();
  const { children } = props;
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter();
  const [session] = useSession();

  const checkLogged = async () => {
    const _session = await getSession();
    console.log(_session);
    if (new Date().getTime() < _session?.user?.expiredToken) {
      return;
    } else {
      enqueueSnackbar('Session was expired. Please login and try again', {
        variant: 'error',
      });
      router.push('/admin/login');

      if (!_session) {
        return;
      }
    }
    return;
  };
  useEffect(() => {
    checkLogged();
  });

  // useEffect(() => {
  //   console.log(session);
  // }, [session]);
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <DashboardLayoutRoot>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%',
            background: '#fbfbfb',
          }}
        >
          {children}
        </Box>
      </DashboardLayoutRoot>
      <Navbar onSidebarOpen={() => setSidebarOpen(true)} />
      <Sidebar onClose={() => setSidebarOpen(false)} open={isSidebarOpen} />
    </>
  );
};
