import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function PersonInfo({ src, name, position, isMobile }) {
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
      >
        <Image
          src={src}
          width={mobile ? 343 : 360}
          height={480}
          alt={'staff'}
        />
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
