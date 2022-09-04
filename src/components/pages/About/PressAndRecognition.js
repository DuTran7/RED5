import { Box, Stack, Typography } from '@mui/material';
import { LogoCarousel } from 'components/ukit/Carousel';
import Image from 'next/image';
import { cloneElement, useState } from 'react';
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
  const [indexSelected, setIndexSelected] = useState(-1);
  const listLogo = [
    <RetailDesignBlogIcon
      viewBox="0 0 80 80"
      sx={{
        fontSize: '80px',
        opacity: 0.5,
        width: 'fit-content !important',
        '&:hover, &:active': {
          opacity: 1,
        },
      }}
    />,

    <DesignBoomIcon
      viewBox="0 0 180 80"
      sx={{
        fontSize: '80px',
        width: 'fit-content !important',
      }}
    />,
    <VietceteraIcon
      viewBox="0 0 143 80"
      sx={{
        fontSize: '80px',
        width: 'fit-content !important',
      }}
    />,
    <ElleDecorationIcon
      viewBox="0 0 120 80"
      sx={{
        fontSize: '80px',
        width: 'fit-content !important',
      }}
    />,
    <OfficeSnapshotsIcon
      viewBox="0 0 125 80"
      sx={{
        fontSize: '80px',
        width: 'fit-content !important',
      }}
    />,

    <Icon6
      viewBox="0 0 80 80"
      sx={{
        fontSize: '80px',
        width: 'fit-content !important',
      }}
    />,
    <RetailDesignBlogIcon
      viewBox="0 0 80 80"
      sx={{
        fontSize: '80px',
        width: 'fit-content !important',
      }}
    />,
    <DesignBoomIcon
      viewBox="0 0 180 80"
      sx={{
        fontSize: '80px',
        width: 'fit-content !important',
      }}
    />,
    <VietceteraIcon
      viewBox="0 0 143 80"
      sx={{
        fontSize: '80px',
        width: 'fit-content !important',
      }}
    />,
  ];
  // const listLogo = [
  //   '/icons/blackberry.svg',
  //   '/icons/blackberry-1.svg',
  //   '/icons/blackberry-2.svg',
  //   '/icons/blackberry-3.svg',
  //   '/icons/blackberry-4.svg',
  //   '/icons/blackberry-5.svg',
  // ];
  const StyledIcon = ({ children, isActive, ...other }) => {
    return (
      <Box
        {...other}
        sx={{
          '& .MuiSvgIcon-root': {
            opacity: isActive ? 1 : 0.5,
            '&:hover': {
              opacity: 1,
            },
          },
        }}
      >
        {children}
      </Box>
    );
  };
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
            background:
              'linear-gradient(180deg, rgb(0 0 0) 0%, #1c1c1c61 100%)',
            padding: '0 20px',
          }}
        >
          <LogoCarousel>
            {listLogo &&
              listLogo?.map((el, i) => (
                <StyledIcon
                  onClick={() => setIndexSelected(i)}
                  key={i}
                  isActive={indexSelected === i}
                >
                  {el}
                </StyledIcon>
              ))}
          </LogoCarousel>
        </Stack>
        <AddressList />
      </Stack>
    </Box>
  );
}
