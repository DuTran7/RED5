import { Box, Stack, Typography } from '@mui/material';
import { LogoCarousel } from 'components/ukit/Carousel';
import Image from 'next/image';
import { cloneElement } from 'react';
import { theme } from 'theme';
import {
  DesignBoomIcon,
  ElleDecorationIcon,
  Icon6,
  OfficeSnapshotsIcon,
  RetailDesignBlogIcon,
  VietceteraIcon,
} from '../../shared/icons';
import AddressList from './AddressList';
export default function PressAndRecognition() {
  const listLogo = [
    '/icons/blackberry.svg',
    '/icons/blackberry-1.svg',
    '/icons/blackberry-2.svg',
    '/icons/blackberry-3.svg',
    '/icons/blackberry-4.svg',
    '/icons/blackberry-5.svg',
  ];

  const listLogo2 = [
    <RetailDesignBlogIcon />,
    <RetailDesignBlogIcon />,
    <RetailDesignBlogIcon />,
    <RetailDesignBlogIcon />,
    <RetailDesignBlogIcon />,
    <RetailDesignBlogIcon />,
    <RetailDesignBlogIcon />,
    <RetailDesignBlogIcon />,
  ];
  return (
    <Box
      sx={{
        display: 'flex',
        background: theme.palette.common.black,
      }}
      minWidth={'calc(100vw - 80px)'}
    >
      <Stack width={'100vw'} height={'100%'} rowGap={3} p={'64px 120px 0'}>
        <Typography variant={'h2'} color={'text.primary'} mr={'55px'}>
          {`Press & Recognition`}
        </Typography>
        <Stack
          sx={{
            background: 'linear-gradient(180deg, rgb(0 0 0) 0%, #1c1c1c 100%)',
            padding: '0 20px',
          }}
        >
          <LogoCarousel>
            {/* {listLogo &&
              listLogo?.map((src, i) => (
                <img
                  src={src}
                  width={'fit-content !important'}
                  style={{
                    width: 'fit-content !important',
                  }}
                  height={'80px'}
                  key={i}
                  alt={'logo'}
                />
              ))} */}
            <RetailDesignBlogIcon
              viewBox="0 0 80 80"
              sx={{
                fontSize: '80px',
                width: 'fit-content !important',
              }}
            />
            <DesignBoomIcon
              viewBox="0 0 180 80"
              sx={{
                fontSize: '80px',
                width: 'fit-content !important',
              }}
            />
            <VietceteraIcon
              viewBox="0 0 143 80"
              sx={{
                fontSize: '80px',
                width: 'fit-content !important',
              }}
            />
            <ElleDecorationIcon
              viewBox="0 0 120 80"
              sx={{
                fontSize: '80px',
                width: 'fit-content !important',
              }}
            />
            <OfficeSnapshotsIcon
              viewBox="0 0 125 80"
              sx={{
                fontSize: '80px',
                width: 'fit-content !important',
              }}
            />
            <Icon6
              viewBox="0 0 80 80"
              sx={{
                fontSize: '80px',
                width: 'fit-content !important',
              }}
            />
            <RetailDesignBlogIcon
              viewBox="0 0 80 80"
              sx={{
                fontSize: '80px',
                width: 'fit-content !important',
              }}
            />
            <DesignBoomIcon
              viewBox="0 0 180 80"
              sx={{
                fontSize: '80px',
                width: 'fit-content !important',
              }}
            />
            <VietceteraIcon
              viewBox="0 0 143 80"
              sx={{
                fontSize: '80px',
                width: 'fit-content !important',
              }}
            />
          </LogoCarousel>
        </Stack>
        <AddressList />
      </Stack>
    </Box>
  );
}
