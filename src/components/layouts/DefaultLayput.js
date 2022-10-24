import { Box } from '@mui/system';
import Header from 'components/shared/Header';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

const DefaultLayout = ({ children, showFooter = true, seo }) => {
  return (
    <>
      <NextSeo {...seo} />
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
