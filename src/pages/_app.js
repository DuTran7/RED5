import { ThemeProvider } from '@mui/material/styles';
import { Provider as NextAuthProvider } from 'next-auth/client';
import { SnackbarProvider } from 'notistack';
import { isMobile } from 'react-device-detect';
// import 'semantic-ui-css/semantic.min.css';
import StyledGlobalStyles from 'components/ukit/GlobalStyles';
import { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { theme } from 'theme';
import '../../styles/globals.css';

import 'swiper/css';
import 'swiper/css/free-mode';

import { useRouter } from 'next/router';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();
  const [clientType, setClientType] = useState(null);
  const [classCommon, setClassCommon] = useState(null);
  useEffect(() => {
    if (window.navigator.userAgent.match(/Macintosh/)) {
      setClassCommon('mac-os');
    } else {
      setClassCommon('chrome');
    }

    if (isMobile) {
      setClientType('mobile');
    }
  }, [router.asPath]);
  return (
    <NextAuthProvider session={session}>
      <StyledGlobalStyles />
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          maxSnack={3}
          autoHideDuration={1500}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <div className={classCommon + ' ' + clientType}>
            <Component {...pageProps} isMobile={isMobile} />
          </div>
        </SnackbarProvider>
      </ThemeProvider>
    </NextAuthProvider>
  );
}

export default MyApp;
