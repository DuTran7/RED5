// import { Image } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import { getAllPress } from 'components/service/PressService';
import {
  getAllRecognitions,
  getRecognitionsByPress,
} from 'components/service/RecognitionsService';
import { LogoCarousel } from 'components/ukit/Carousel';
import Image from 'next/image';
import { cloneElement, useEffect, useState } from 'react';
import { theme } from 'theme';
import { IMAGE_SOURCE } from 'utils/constants';
import {
  DesignBoomIcon,
  ElleDecorationIcon,
  Icon6,
  OfficeSnapshotsIcon,
  RetailDesignBlogIcon,
  VietceteraIcon,
} from '../../shared/icons';
import AddressList from './AddressList';
export default function PressAndRecognition({ isMobile }) {
  const [indexSelected, setIndexSelected] = useState(-1);
  const [pressSelected, setPressSelected] = useState(null);
  const [pressList, setPressList] = useState([]);
  const [recognition, setRecognition] = useState([]);
  const listLogo = [
    <RetailDesignBlogIcon
      key={'retail'}
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
      key={'boom'}
      viewBox="0 0 180 80"
      sx={{
        fontSize: '80px',
        width: 'fit-content !important',
      }}
    />,
    <VietceteraIcon
      key={'vietcetera'}
      viewBox="0 0 143 80"
      sx={{
        fontSize: '80px',
        width: 'fit-content !important',
      }}
    />,
    <ElleDecorationIcon
      key={'ElleDecorationIcon'}
      viewBox="0 0 120 80"
      sx={{
        fontSize: '80px',
        width: 'fit-content !important',
      }}
    />,
    <OfficeSnapshotsIcon
      key={'OfficeSnapshotsIcon'}
      viewBox="0 0 125 80"
      sx={{
        fontSize: '80px',
        width: 'fit-content !important',
      }}
    />,

    <Icon6
      key={'Icon6'}
      viewBox="0 0 80 80"
      sx={{
        fontSize: '80px',
        width: 'fit-content !important',
      }}
    />,
    <RetailDesignBlogIcon
      key={'RetailDesignBlogIcon'}
      viewBox="0 0 80 80"
      sx={{
        fontSize: '80px',
        width: 'fit-content !important',
      }}
    />,
    <DesignBoomIcon
      key={'DesignBoomIcon'}
      viewBox="0 0 180 80"
      sx={{
        fontSize: '80px',
        width: 'fit-content !important',
      }}
    />,
    <VietceteraIcon
      key={'VietceteraIcon'}
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
          '& img': {
            filter: isActive ? 'brightness(1)' : 'brightness(0.5)',
            '&:hover': {
              filter: 'brightness(1)',
            },
          },
          // '& .MuiSvgIcon-root': {
          //   opacity: isActive ? 1 : 0.5,
          //   '&:hover': {
          //     opacity: 1,
          //   },
          // },
        }}
      >
        {children}
      </Box>
    );
  };

  const handleClickLogo = (data, index) => {
    setIndexSelected(index);
    setPressSelected(data);
  };

  const updateData = async () => {
    const res = await getAllPress();
    const res1 = await getAllRecognitions();
    if (res?.status === 200) {
      setPressList(res.data);
    }
    if (res1?.status === 200) {
      setRecognition(res1.data);
    }
  };
  useEffect(() => {
    if (pressSelected === null) {
      updateData();
    }
  }, [pressSelected]);

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100%',
        background: theme.palette.common.black,
        '& .slick-slide img': {
          maxHeight: {
            xs: '60px',
            md: '80px',
          },
        },
      }}
      className={'press-list'}
      minWidth={{
        xs: '100vw',
        md: 'calc(100vw - 80px)',
      }}
    >
      <Stack
        width={'100vw'}
        height={'100%'}
        justifyContent={'center'}
        rowGap={3}
        p={{
          xs: '80px 16px',
          md: '0px 120px 0',
        }}
      >
        <Typography
          variant={'h2'}
          fontSize={{
            xs: '40px',
            md: '52px',
          }}
          color={'text.primary'}
          mr={'55px'}
        >
          {`Press & Recognition`}
        </Typography>
        <Stack
          width={'100%'}
          sx={{
            background:
              'linear-gradient(180deg, rgb(0 0 0) 0%, #1c1c1c61 100%)',
            padding: '0 20px',
            '& .slick-slide': {
              // width: 'fit-contesnt !important',
              // marginRight: 3,
            },
          }}
        >
          <LogoCarousel>
            {pressList?.map((el, i) => (
              <StyledIcon
                key={i}
                sx={{
                  minWidth: '180px',
                  // maxWidth: '180px',
                }}
                isActive={indexSelected === i}
              >
                <img
                  onClick={(e) => {
                    handleClickLogo(el, i);
                  }}
                  src={IMAGE_SOURCE + el?.name}
                  style={{
                    // fontSize: '80px',
                    // maxWidth: '180px',
                    // width: 'fit-content !important',
                    margin: '0 auto',
                  }}
                />
              </StyledIcon>
            ))}
          </LogoCarousel>
        </Stack>
        <AddressList
          isMobile={isMobile}
          data={recognition}
          press={pressSelected}
        />
      </Stack>
    </Box>
  );
}
