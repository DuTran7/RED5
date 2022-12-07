import { Box, Stack, Typography } from '@mui/material';
import ScrollContainer from 'components/shared/ScrollContainer';
import { ChapterCarousel } from 'components/ukit/Carousel';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { theme } from 'theme';
import { KEY_ROUTER, ROUTER } from 'utils/constants';
import ChapterCard from './ChapterCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import { debounce } from 'lodash';

export default function HomePage(props) {
  const router = useRouter();
  const { chapterList, isWheel } = props;
  const [chapters, setChapters] = useState(chapterList || []);
  const [scrolling, setScrolling] = useState(false);
  const navigateToChapterDetail = (obj, index) => {
    const slug =
      String(obj?.categories?.id) +
      '/' +
      String(obj?.categories?.description)?.split(' ').join('-');
    localStorage.setItem('CHAPTER', JSON.stringify({ ...obj, index }));
    router.push(ROUTER.CHAPTER + slug);
  };

  const handleOnScrollPage = () => {
    setScrolling(true);
    debounce(() => {
      setScrolling(false);
    }, 350)();
  };
  useEffect(() => {
    setChapters(props?.chapterList);
  }, [props?.chapterList]);

  useEffect(() => {
    const oldChapter = localStorage.getItem('CHAPTER');
    if (oldChapter) {
      const index = JSON.parse(oldChapter)?.index || 0;
      const element = document.getElementById('chapter-' + --index);
      const melement = document.getElementById('mchapter-' + --index);
      element?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start',
      });
      melement?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start',
      });
      setTimeout(() => {
        localStorage.removeItem('CHAPTER');
      }, 500);
    }
  }, [chapters]);
  return (
    <Box
      sx={{
        overflow: 'hidden',
      }}
    >
      {chapters?.length === 0 && (
        <Box
          sx={{
            background: theme.palette.common.black,
            overflowY: 'hidden',
            overflowX: 'hidden',
            height: 'calc(100vh)',
            '& .slick-list': {
              // padding: '0 0 0 134px !important',
            },
          }}
          position={'relative'}
          width={'100vw'}
          p={5}
        >
          <Typography variant={'h3'} color={'text.primary'}>
            Chapters are empty. Were are updating...
          </Typography>
        </Box>
      )}
      <Box
        sx={{
          display: {
            xs: 'flex',
            md: 'none',
          },
          background: theme.palette.common.black,
          overflowY: 'hidden',
          overflowX: 'hidden',
          height: 'calc(100vh)',
          '& .slick-list': {
            // padding: '0 0 0 134px !important',
          },
        }}
        position={'relative'}
        width={'100vw'}
      >
        <Swiper
          loop={true}
          slidesPerView={1.5}
          freeMode={true}
          modules={[FreeMode]}

          // breakpoints={{
          //   640: {
          //     slidesPerView: 1.5,
          //   },
          //   768: {
          //     slidesPerView: 4.3,
          //   },
          //   1024: {
          //     slidesPerView: 6.2,
          //   },
          // }}
        >
          {chapters?.map((c, i) => (
            <SwiperSlide
              key={i}
              style={{
                '.swiper-slide': {
                  overflowY: 'hidden',
                },
              }}
            >
              <Box
                id={'mchapter-' + i}
                key={i}
                borderRight={'1px solid'}
                borderColor={theme.palette.divider}
                overflow={'none none'}
                onClick={() => navigateToChapterDetail(c, i)}
                // minWidth={'200px'}
              >
                <ChapterCard
                  shouldBlur={isWheel}
                  data={c}
                  chapNo={++i}
                  name={c?.categories?.description}
                  image={c?.albums?.[0].name}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Box
        sx={{
          display: {
            xs: 'none',
            md: 'flex',
          },
        }}
      >
        <ScrollContainer onScroll={handleOnScrollPage}>
          {chapters?.map((c, i) => (
            <Box
              id={'chapter-' + i}
              key={i}
              borderRight={'1px solid'}
              borderColor={theme.palette.divider}
              overflow={'auto hidden'}
              minWidth={'241px'}
              onClick={() => navigateToChapterDetail(c, i)}
              sx={{
                height: 'calc(100vh - 84px)',
                '&:hover': {
                  cursor: 'pointer',
                },
              }}
            >
              <ChapterCard
                shouldBlur={scrolling}
                data={c}
                chapNo={++i}
                name={c?.categories?.description}
                image={c?.albums?.[0].name}
              />
            </Box>
          ))}
        </ScrollContainer>
      </Box>
    </Box>
  );
}
