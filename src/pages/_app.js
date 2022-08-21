import { ThemeProvider } from '@mui/material/styles';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { Provider as NextAuthProvider } from 'next-auth/client';
import { useRouter } from 'next/router';
import { SnackbarProvider } from 'notistack';
import { isMobile, isAndroid, isChrome } from 'react-device-detect';
// import 'semantic-ui-css/semantic.min.css';
import StyledGlobalStyles from 'components/ukit/GlobalStyles';
import { useEffect, useState } from 'react';
import { theme } from 'theme';
import { PAYPAL_CLIENT_ID } from 'utils/constants';
import '../../styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [clientType, setClientType] = useState(null);
  const [classCommon, setClassCommon] = useState(null);
  const router = useRouter();

  useEffect(() => {
    console.log('Macintosh', window.navigator.userAgent.match(/Macintosh/));
    console.log('Chrome', window.navigator.userAgent.match(/Chrome/));
    if (window.navigator.userAgent.match(/Macintosh/)) {
      setClassCommon('mac-os');
    } else {
      setClassCommon('chrome');
    }

    if (isMobile) {
      setClientType('mobile');
    }
  }, []);
  return (
    <NextAuthProvider session={session}>
      <StyledGlobalStyles />
      <ThemeProvider theme={theme}>
        <PayPalScriptProvider options={{ 'client-id': PAYPAL_CLIENT_ID }}>
          <SnackbarProvider
            maxSnack={3}
            autoHideDuration={1500}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <Component {...pageProps} />
          </SnackbarProvider>
        </PayPalScriptProvider>
      </ThemeProvider>
    </NextAuthProvider>
  );
}

export default MyApp;
