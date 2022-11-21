import { Box } from '@mui/system';
import Header from 'components/shared/Header';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

const DefaultLayout = ({ children, showFooter = true, seo }) => {
  return (
    <>
      <NextSeo {...seo} />
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Box>
        <Header />
        <Box
          sx={{
            overflowX: 'scroll',
          }}
        >
          {children}
        </Box>
        {/* {showFooter && <Footer />} */}
      </Box>
    </>
  );
};

export default DefaultLayout;
