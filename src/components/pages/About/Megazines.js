import { Backdrop, Box, Button, Stack } from '@mui/material';
import Image from 'next/image';
import { theme } from 'theme';
import ImageGallery from 'react-image-gallery';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

export default function Megazines() {
  const listImg = [
    '/imgs/magazines/Frame.png',
    '/imgs/magazines/Frame-1.png',
    '/imgs/magazines/Frame-2.png',
    '/imgs/magazines/Frame-3.png',
    '/imgs/magazines/Frame-4.png',
    '/imgs/magazines/Frame-5.png',
    '/imgs/magazines/Frame-6.png',
    '/imgs/magazines/Frame-7.png',
    '/imgs/magazines/Frame-8.png',
    '/imgs/magazines/Frame-9.png',
    '/imgs/magazines/Frame-10.png',
  ];
  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];
  const a = listImg.map((e) => ({
    original: e,
    thumbnail: e,
  }));
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        background: theme.palette.common.black,
        height: {
          xs: 'auto',
          md: 'calc(100vh - 84px)',
        },
        overflowX: 'auto',
        overflowY: 'hidden',
      }}
      minWidth={'100vw'}
    >
      <Stack
        minWidth={{
          xs: '100vw',
          md: 'calc(100vw - 80px)',
        }}
        p={{
          xs: '80px 16px',
          md: '64px 120px 100px 140px',
        }}
        direction={'row'}
        flexWrap={'wrap'}
        alignItems={'center'}
        justifyContent={'flex-start'}
        alignContent={'center'}
        columnGap={3}
        rowGap={3}
        height={'100%'}
        sx={{
          overflowX: 'auto',
          overflowY: 'hidden',
        }}
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
              zIndex: 4,
            }}
            onClick={handleClose}
          >
            <CloseIcon
              sx={{
                fill: '#ffffff',
                fontSize: '40px',
                opacity: '0.5',
              }}
            />
          </Button>
          {/* <Stack onClick={(e) => e.preventDefault()}> */}
          <ImageGallery
            showPlayButton={false}
            showFullscreenButton={false}
            showNav={false}
            thumbnailPosition={'bottom'}
            items={a}
          />
          {/* </Stack> */}
        </Backdrop>

        {listImg &&
          listImg.map((e, i) => (
            <Stack
              flexBasis={{
                xs: '45.1%',
                md: 100 / (listImg?.length / 1.5) + '%',
              }}
              key={i}
              onClick={handleToggle}
              sx={{
                cursor: 'pointer',
              }}
            >
              <img
                src={e}
                key={i}
                width={'100%'}
                height={'auto'}
                alt={'loading'}
              />
            </Stack>
          ))}
      </Stack>
    </Box>
  );
}
