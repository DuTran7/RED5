import { ThemeProvider } from '@mui/material/styles';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { Provider as NextAuthProvider } from 'next-auth/client';
import { SnackbarProvider } from 'notistack';
import { isMobile, isAndroid, isChrome, isDesktop } from 'react-device-detect';
// import 'semantic-ui-css/semantic.min.css';
import StyledGlobalStyles from 'components/ukit/GlobalStyles';
import { useEffect, useState } from 'react';
import { theme } from 'theme';
import { PAYPAL_CLIENT_ID } from 'utils/constants';
import '../../styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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

    if (isDesktop) {
      const scrollContainer =
        document.getElementsByClassName('scroll-horizontal');

      // scrollContainer.addEventListener('wheel', (evt) => {
      //   evt.preventDefault();
      //   scrollContainer.scrollLeft += evt.deltaY;
      // });

      for (let item of scrollContainer) {
        item.addEventListener('wheel', (evt) => {
          evt.preventDefault();
          item.scrollLeft += evt.deltaY * 7;
          // item.scrollLeft += 500;
          // console.log('wheel', evt);
        });

        // item.addEventListener('', (e) => {

        // })
      }
      return () => {
        for (let item of scrollContainer) {
          item.removeEventListener('wheel', (evt) => {
            evt.preventDefault();
          });
        }
      };
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
