import { AppBar, Box, Stack, Toolbar, Typography } from '@mui/material';
import BlogDrawer from 'components/drawer/BlogDrawer';
import { TextBook12 } from 'components/ukit/Typography';
import { theme } from 'theme';
import React from 'react';
const Tittle = ({ title }) => {
  const [nevigateBlogsVisible, setNevigateBlogsVisible] = React.useState(false);
  const closeAllDrawer = () => {
    setNevigateBlogsVisible(false);
  };
  return (
    <Stack>
      <AppBar
        component="nav"
        sx={{
          background: theme.palette.common.white,
          boxShadow: 'none',
          // zIndex: 999999999999,
          top: '86px',
        }}
      >
        <Box
          sx={{
            background: '#FFFCF6',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            borderBottom: '1px solid #BA442E',
            borderLeft: '1px solid #BA442E',
            justifyContent: { xs: 'space-between', md: 'none' },
          }}
        >
          <TextBook12
            sx={{
              marginLeft: {
                xs: '16px',
                md: '40px',
              },
            }}
          >
            {title}
          </TextBook12>
          {/* <Box sx={{ display: { md: 'none' } }}>
            <h1 onClick={() => setNevigateBlogsVisible(true)}>ALl NEW</h1>
          </Box> */}
        </Box>
      </AppBar>

      {/* <Box
        sx={{
          background: '#FFFCF6',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid #BA442E',
          justifyContent: { xs: 'space-between', md: 'none' },
        }}
      >
        <TextBook12 sx={{ marginLeft: '40px' }}>{title}</TextBook12>
        {/* <Box sx={{ display: { md: 'none' } }}>
          <h1 onClick={() => setNevigateBlogsVisible(true)}>ALl NEW</h1>
      //  </Box>
      </Box> */}

      {/* <Toolbar
        disableGutters
        sx={{
          border: '1px solid',
          borderColor: theme.palette.primary.main,
          height: 'auto',
          minHeight: '0 !important',
        }}
      >
        {nevigateBlogsVisible && (
          <BlogDrawer
            visible={nevigateBlogsVisible}
            closeAllDrawer={closeAllDrawer}
          />
        )}
      </Toolbar> */}
    </Stack>
  );
};

export default Tittle;
