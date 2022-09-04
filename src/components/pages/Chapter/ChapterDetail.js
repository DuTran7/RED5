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
import ScrollContainer from 'components/shared/ScrollContainer';
import HardCoverVertical from './HardCoverVertical';
import HardCoverHorizontal from './HardCoverHorizontal';
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
    <ScrollContainer height={'100vh'}>
      <HardCoverVertical chapter={chapter} />
      <HardCoverHorizontal chapter={chapter} />
      <ShortInfoChapter chapter={chapter} />
      <DescriptionChapter chapter={chapter} />
      <Stack
        direction={{
          xs: 'column',
          md: 'row',
        }}
        columnGap={2}
        p={{
          xs: 2,
          md: 0,
        }}
        rowGap={4}
      >
        {chapter?.album?.map((p, i) => (
          <PhotosCard key={i} photos={p} />
        ))}
      </Stack>
    </ScrollContainer>
  );
}
