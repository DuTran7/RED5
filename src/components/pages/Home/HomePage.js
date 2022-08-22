import { Box, Stack, Typography } from '@mui/material';
import ChapterCarousel from 'components/ukit/Carousel';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { theme } from 'theme';
import { KEY_ROUTER, ROUTER } from 'utils/constants';
import ChapterCard from './ChapterCard';

export default function HomePage(props) {
  const router = useRouter();
  const { chapterList } = props;
  const [chapters, setChapters] = useState(chapterList);
  const navigateToChapterDetail = (obj) => {
    const slug = String(obj.name)?.split(' ').join('-');
    localStorage.setItem('CHAPTER', JSON.stringify(obj));
    router.push(ROUTER.CHAPTER + slug);
  };
  useEffect(() => {
    console.log(chapters);
    setChapters(props?.chapterList);
  }, [props?.chapterList]);
  return (
    <Stack direction={'row'}>
      <ChapterCarousel>
        {chapters?.map((c, i) => (
          <Box
            key={i}
            borderRight={'1px solid'}
            borderColor={theme.palette.divider}
            overflow={'none auto'}
            // minWidth={'200px'}
          >
            <ChapterCard
              data={c}
              chapNo={++i}
              name={c?.name}
              image={c?.image}
              onClick={navigateToChapterDetail}
            />
          </Box>
        ))}
      </ChapterCarousel>
    </Stack>
  );
}
