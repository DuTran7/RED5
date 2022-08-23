import { Stack, Typography } from '@mui/material';
import Image from 'next/image';

export default function PhotosCard({ photos, width }) {
  return (
    <Stack rowGap={2}>
      <img src={photos?.src} height={'476px'} alt={'loading...'} />
      <Typography variant={'body1'} color={'text.secondary'}>
        {photos?.description}
      </Typography>
    </Stack>
  );
}
