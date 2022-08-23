import { Box, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { theme } from 'theme';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ROUTER } from 'utils/constants';
import Image from 'next/image';
import LegendBox from './LegendBox';
import ShortInfoChapter from './ShortInfoChapter';
import DescriptionChapter from './DescriptionChapter';
import PhotosCard from './PhotosCard';
import Awards from '../About/Awards';
export default function ChapterDetail() {
  const router = useRouter();
  const [chapter, setChapter] = useState({});

  useEffect(() => {
    const name = router.query.chapter;
    if (name) setChapter({ ...chapter, name });
    // if (name) setChapter(...chapter, name);
  }, [router.query]);

  // fetch data
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('CHAPTER'));
    setChapter({ ...chapter, ...data });
  }, []);
  return (
    <Box
      sx={{
        display: 'flex',
        background: theme.palette.common.black,
        overflowX: 'auto',
        height: '100vh',
      }}
      position={'relative'}
      minWidth={'100vw'}
    >
      <Stack
        width={'80px'}
        flexGrow={0}
        position={'sticky'}
        zIndex={3}
        borderRight={'1px solid ' + theme.palette.divider}
        left={0}
        top={0}
        sx={{
          background: theme.palette.common.black,
        }}
      >
        <Stack
          width={'100%'}
          height={'80px'}
          justifyContent={'center'}
          alignItems={'center'}
          borderBottom={'1px solid ' + theme.palette.divider}
          onClick={() => router.push('/')}
          sx={{
            '&:hover': {
              background: 'rgba(255, 255, 255, 0.1)',
              cursor: 'pointer',
            },
          }}
        >
          <CloseIcon
            sx={{
              fontSize: '40px',
              color: theme.palette.common.white,
            }}
          />
        </Stack>
        <Stack
          width={'80px'}
          height={'100%'}
          position={'relative'}
          borderRight={'1px solid ' + theme.palette.divider}
          sx={{
            background: theme.palette.common.black,
          }}
        >
          <Typography
            variant={'h4'}
            color={'text.primary'}
            sx={{
              position: 'absolute',
              left: '50%',
              transformOrigin: '-2% 68%',
              transform: 'rotate(90deg)',
            }}
            width={'max-content'}
          >
            {chapter?.name}
          </Typography>
        </Stack>
      </Stack>
      <ShortInfoChapter chapter={chapter} />
      <DescriptionChapter chapter={chapter} />
      <Stack direction={'row'} columnGap={2}>
        {chapter?.album?.map((p, i) => (
          <PhotosCard key={i} photos={p} />
        ))}
      </Stack>
    </Box>
  );
}
