import { Box, Stack, Typography } from '@mui/material';
import { CenterCarousel, ChapterCarousel } from 'components/ukit/Carousel';
import Image from 'next/image';
import { useState } from 'react';
import { theme } from 'theme';

const StyledBox = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        background: theme.palette.common.black,
        '& .slick-track': {
          display: 'flex',
          alignItems: 'flex-end',
        },
        '& .slick-active, & .slick-slide': {
          padding: '0 40px',
          opacity: '0.25',
          '.award-item': {
            // width: '400px !important',
            '& img': {
              width: '18vw !important',
              height: '18vw !important',
            },
          },
          '& .MuiTypography-root': {
            visibility: 'hidden',
          },
        },
        '& .slick-center': {
          opacity: '1',
          '& .MuiTypography-root': {
            visibility: 'unset',
          },
          '.award-item': {
            // width: '400px !important',
            '& img': {
              width: '20vw !important',
              height: '20vw !important',
            },
          },
        },
      }}
      width={'calc(100vw - 80px)'}
    >
      {children}
    </Box>
  );
};

export default function Awards() {
  const [slide, setSlide] = useState();
  const [awards, setAwards] = useState([
    {
      image: '/imgs/Award.png',
      name: 'THE BEST OF RETAIL DESIGN SILVER AWARD 2019',
      project: 'Nguyen Anh Tu',
    },
    {
      image: '/imgs/Award.png',
      name: 'THE BEST OF RETAIL DESIGN SILVER AWARD 2019',
      project: 'Nguyen Anh Tu',
    },
    {
      image: '/imgs/Award.png',
      name: 'THE BEST OF RETAIL DESIGN SILVER AWARD 2019',
      project: 'Nguyen Anh Tu',
    },
    {
      image: '/imgs/Award.png',
      name: 'THE BEST OF RETAIL DESIGN SILVER AWARD 2019',
      project: 'Nguyen Anh Tu',
    },
  ]);
  return (
    <StyledBox>
      <Stack
        width={'100%'}
        justifyContent={'flex-start'}
        alignContent={'center'}
        alignItems={'center'}
        p={'64px 80px'}
        rowGap={3}
        sx={{}}
      >
        <Typography variant={'h2'} color={'text.primary'} mb={3}>
          Awards
        </Typography>
        <CenterCarousel>
          {awards &&
            awards?.map((e, i) => (
              <Box
                className={'award-item'}
                key={i}
                sx={{
                  display: 'flex !important',
                  // width: '400px !important',
                  justifyContent: 'flex-end',
                  flexDirection: 'column',
                  //   padding: '0 40px',
                  margin: '0 !important',

                  '&:hover': {
                    cursor: 'pointer',
                    img: {
                      opacity: '0.8',
                    },
                  },
                }}
                onClick={() => {
                  //   alert(1);
                }}
                textAlign={'center'}
              >
                <Image
                  src={e.image}
                  width={'400px'}
                  height={'400px'}
                  alt={'award'}
                />
                <Stack justifyContent={'center'} alignItems={'center'}>
                  <Typography variant={'body1'} color={'text.primary'}>
                    {e?.name}
                  </Typography>
                  <Typography variant={'body1'} color={'text.primary'}>
                    Project: {e?.project}
                  </Typography>
                </Stack>
              </Box>
            ))}
        </CenterCarousel>
      </Stack>
    </StyledBox>
  );
}
