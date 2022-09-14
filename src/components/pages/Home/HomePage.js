import { Box, Stack, Typography } from '@mui/material';
import ScrollContainer from 'components/shared/ScrollContainer';
import { ChapterCarousel } from 'components/ukit/Carousel';
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
    const slug =
      String(obj?.categories?.id) +
      '/' +
      String(obj?.categories?.description)?.split(' ').join('-');
    localStorage.setItem('CHAPTER', JSON.stringify(obj));
    router.push(ROUTER.CHAPTER + slug);
  };

  useEffect(() => {
    setChapters(props?.chapterList);
  }, [props?.chapterList]);
  return (
    <>
      <Box
        sx={{
          display: {
            xs: 'flex',
            md: 'none',
          },
          background: theme.palette.common.black,
          overflowY: 'hidden',
          overflowX: 'scroll',
          height: 'calc(100vh)',
          '& .slick-list': {
            // padding: '0 0 0 134px !important',
          },
        }}
        position={'relative'}
        minWidth={'100vw'}
      >
        <ChapterCarousel>
          {chapters?.map((c, i) => (
            <Box
              key={i}
              borderRight={'1px solid'}
              borderColor={theme.palette.divider}
              overflow={'none auto'}
              onClick={() => navigateToChapterDetail(c)}
              // minWidth={'200px'}
            >
              <ChapterCard
                data={c}
                chapNo={++i}
                name={c?.categories?.description}
                image={c?.albums?.[0].name}
              />
            </Box>
          ))}
        </ChapterCarousel>
      </Box>
      <Box
        sx={{
          display: {
            xs: 'none',
            md: 'flex',
          },
        }}
      >
        <ScrollContainer>
          {chapters?.map((c, i) => (
            <Box
              key={i}
              borderRight={'1px solid'}
              borderColor={theme.palette.divider}
              overflow={'auto hidden'}
              minWidth={'241px'}
              onClick={() => navigateToChapterDetail(c)}
              sx={{
                '&:hover': {
                  cursor: 'pointer',
                },
              }}
            >
              <ChapterCard
                data={c}
                chapNo={++i}
                name={c?.categories?.description}
                image={c?.albums?.[0].name}
              />
            </Box>
          ))}
        </ScrollContainer>
      </Box>
    </>
  );
}
