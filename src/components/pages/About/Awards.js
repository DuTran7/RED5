import CloseIcon from '@mui/icons-material/Close';
import { Backdrop, Box, Button, Stack, Typography } from '@mui/material';
import { getAllAwards } from 'components/service/AwardService';
import { CenterCarousel } from 'components/ukit/Carousel';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { isMobile } from 'react-device-detect';
import ImageGallery from 'react-image-gallery';
import { theme } from 'theme';
import { IMAGE_SOURCE } from 'utils/constants';

const StyledBox = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        background: theme.palette.common.black,
        '& .slick-list': {
          paddingLeft: {
            xs: '25% !important',
            sm: '0px !important',
            md: '0px !important',
          },
        },
        '& .slick-track': {
          display: 'flex',
          alignItems: 'flex-end',
        },
        '.award-item': {
          alignItems: 'center',
        },
        '& .slick-active, & .slick-slide': {
          padding: {
            xs: '0 8px',
            md: '0 40px',
          },
          opacity: '0.25',
          '.award-item': {
            // width: '400px !important',
            '& img': {
              width: {
                xs: '78vw !important',
                sm: '25vw !important',
                md: '20vw !important',
                lg: '23vw !important',
              },
              height: {
                xs: 'fit-content',
                md: 'fit-content',
              },
              // minHeight: '300px !important',
              // minWidth: '300px !important',
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
              width: {
                xs: '80vw !important',
                sm: '30vw !important',
                md: '22vw !important',
                lg: '25vw !important',
              },
              height: {
                xs: 'fit-content',
                md: 'fit-content',
              },
              // minHeight: '310px !important',
              // minWidth: '310px !important',
            },
          },
        },
      }}
      width={{
        xs: '100%',
        md: 'calc(100vw - 80px)',
      }}
    >
      {children}
    </Box>
  );
};

export default function Awards() {
  const [curIndex, setCurIndex] = useState(1);
  const [albumsSelected, setAlbumsSelected] = useState([]);
  const [awards, setAwards] = useState([]);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const updateData = async () => {
    const res = await getAllAwards();
    if (res?.status === 200) {
      setAwards(res.data);
    }
  };
  useEffect(() => {
    updateData();
  }, []);
  useEffect(() => {
    if (curIndex) {
      const awardSelected = awards?.find((e, i) => i === curIndex);
      if (awardSelected) {
        setAlbumsSelected(awardSelected?.albums);
      }
    }
  }, [curIndex, awards]);
  return (
    <StyledBox>
      <Stack
        width={'100%'}
        justifyContent={'flex-start'}
        alignContent={'center'}
        alignItems={'center'}
        p={{
          xs: '80px 0px',
          md: '64px 80px',
        }}
        rowGap={3}
        sx={{}}
      >
        <Backdrop
          sx={{
            color: '#fff',
            zIndex: (theme) => theme.zIndex.drawer + 1,
            background: '#000000',
          }}
          open={open}
          //   onClick={handleClose}
        >
          <Button
            sx={{
              position: 'absolute',
              right: '20px',
              top: '20px',
            }}
            onClick={handleClose}
          >
            <CloseIcon
              sx={{
                fill: '#ffffff',
                fontSize: '40px',
                opacity: '0.4',
              }}
            />
          </Button>
          {/* <Stack onClick={(e) => e.preventDefault()}> */}
          <ImageGallery
            showPlayButton={false}
            showFullscreenButton={false}
            showNav={false}
            thumbnailPosition={'bottom'}
            items={albumsSelected?.map((el) => ({
              original: IMAGE_SOURCE + el?.name,
              thumbnail: IMAGE_SOURCE + el?.name,
            }))}
          />
          {/* </Stack> */}
        </Backdrop>
        <Typography
          variant={'h2'}
          color={'text.primary'}
          mb={{
            xs: 0,
            md: 3,
          }}
        >
          Awards
        </Typography>
        <CenterCarousel
          onChange={(cur, next) => {
            setCurIndex(Math.floor(Math.abs(next)));
          }}
          curIndex={curIndex}
        >
          {awards &&
            awards?.map(({ award, albums }, i) => (
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
                  if (i === curIndex) {
                    handleToggle();
                  }
                }}
                textAlign={'center'}
              >
                <img
                  src={IMAGE_SOURCE + award?.name}
                  width={'800px'}
                  height={'800px'}
                  alt={'award'}
                />
                <Stack
                  justifyContent={'center'}
                  alignItems={'center'}
                  mt={'18px'}
                >
                  <Typography variant={'body1'} color={'text.primary'}>
                    {award?.title}
                  </Typography>
                  <Typography variant={'body1'} color={'text.primary'}>
                    Project: {award?.description}
                  </Typography>
                </Stack>
              </Box>
            ))}
        </CenterCarousel>
      </Stack>
    </StyledBox>
  );
}
