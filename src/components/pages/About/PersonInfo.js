import { Stack, Typography } from '@mui/material';
import { ImageSlider } from 'components/ukit/Carousel';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { IMAGE_SOURCE } from 'utils/constants';

export default function PersonInfo({ src, name, position, isMobile, data }) {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(isMobile);
  }, [isMobile]);
  return (
    <Stack
      justifyContent={'center'}
      alignItems={'center'}
      mb={{
        xs: '80px',
        md: 0,
      }}
    >
      <Stack
        position={'relative'}
        width={{
          xs: 343,
          md: 360,
        }}
        height={480}
        sx={{
          '& .personal-albums': {
            display: 'none',
          },
          '&:hover': {
            '.personal-avatar': {
              display: data?.albums?.length > 0 ? 'none' : 'block',
            },
            '.personal-albums': {
              display: 'block',
            },
          },
        }}
      >
        <img
          className="personal-avatar"
          src={src}
          width={mobile ? 343 : 360}
          height={480}
          alt={'staff'}
        />
        <Stack className="personal-albums">
          <ImageSlider>
            {data?.albums?.map((el, i) => (
              <img
                key={i}
                src={IMAGE_SOURCE + el.name}
                width={mobile ? 350 : 367}
                height={480}
                alt={'staff'}
              />
            ))}
          </ImageSlider>
        </Stack>
        <Stack
          position={'absolute'}
          bottom={0}
          left={0}
          justifyContent={'center'}
          alignItems={'center'}
          width={'100%'}
        >
          <Typography
            variant={'body1'}
            textTransform={'uppercase'}
            color={'text.primary'}
          >
            {name}
          </Typography>
          <Typography
            variant={'body1'}
            textTransform={'capitalize'}
            color={'text.primary'}
          >
            {position}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
