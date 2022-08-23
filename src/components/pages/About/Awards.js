import { Box, Stack, Typography } from '@mui/material';
import { CenterCarousel, ChapterCarousel } from 'components/ukit/Carousel';
import Image from 'next/image';
import { useState } from 'react';
import { theme } from 'theme';

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
    <Box
      sx={{
        display: 'flex',
        background: theme.palette.common.black,
        '& .slick-track': {
          display: 'flex',
          alignItems: 'flex-end',
        },
        '& .slick-active, & .slick-slide': {
          opacity: '0.25',
          '.award-item': {
            // width: '400px !important',
            '& img': {
              width: '357px !important',
              height: '357px !important',
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
              width: '400px !important',
              height: '400px !important',
            },
          },
        },
      }}
      minWidth={'calc(100vw - 80px)'}
    >
      <Stack width={'100vw'} justifyContent={'center'} p={10} sx={{}}>
        <CenterCarousel>
          {awards &&
            awards?.map((e, i) => (
              <Box
                className={'award-item'}
                key={i}
                sx={{
                  display: 'flex !important',
                  width: '400px !important',
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
    </Box>
  );
}
