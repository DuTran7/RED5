import { Box } from '@mui/system';
import Header from 'components/shared/Header';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

const DefaultLayout = ({ children, showFooter = true, seo }) => {
  return (
    <>
      <NextSeo {...seo} />
      <Head>
        <link
          rel="shortcut icon"
          href="https://static.wixstatic.com/media/3dc6a9_effcf80643c7428396dde5d1fc3c254c~mv2.png/v1/fill/w_32%2Ch_32%2Clg_1%2Cusm_0.66_1.00_0.01/3dc6a9_effcf80643c7428396dde5d1fc3c254c~mv2.png"
        />
      </Head>
      <Box>
        <Header />
        <Box
          sx={{
            overflowX: {
              xs: 'hidden',
              md: 'scroll',
            },
            overflowY: 'hidden',
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
