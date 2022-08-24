import { Box } from '@mui/system';
import Header from 'components/shared/Header';
import Head from 'next/head';

const DefaultLayout = ({ children, showFooter = true }) => {
  return (
    <Box>
      <Head></Head>
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
  );
};

export default DefaultLayout;
