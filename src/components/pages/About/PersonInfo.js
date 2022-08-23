import { Stack, Typography } from '@mui/material';
import Image from 'next/image';

export default function PersonInfo({ src, name, position }) {
  return (
    <Stack justifyContent={'center'} alignItems={'center'}>
      <Stack position={'relative'} width={360} height={480}>
        <Image src={src} width={360} height={480} alt={'staff'} />
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
