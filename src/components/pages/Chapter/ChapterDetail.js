import { Box, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { theme } from 'theme';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { CLASS_CUSTOM, ROUTER } from 'utils/constants';
import Image from 'next/image';
import LegendBox from './LegendBox';
import ShortInfoChapter from './ShortInfoChapter';
import DescriptionChapter from './DescriptionChapter';
import PhotosCard from './PhotosCard';
import Awards from '../About/Awards';
import ScrollContainer from 'components/shared/ScrollContainer';
import HardCoverVertical from './HardCoverVertical';
import HardCoverHorizontal from './HardCoverHorizontal';
import { getChapterDetail } from 'components/service/CategoryDetailService';
export default function ChapterDetail({ data }) {
  const router = useRouter();

  const [chapter, setChapter] = useState(data);
  const [isShowBackToTop, setIsShowBackToTop] = useState(false);

  const getConditionToShowArrow = (chapter) => {
    const hasAlbums = chapter?.albums?.length > 0;
    const hasDescription = !!chapter?.detailCategory?.description?.trim();
    return hasAlbums || hasDescription;
  };

  const handleClickContainer = (event) => {};

  // useEffect(() => {
  //   const name = router.query.chapter;
  //   if (name) setChapter({ ...chapter, name });
  // }, [router.query]);

  // fetch data
  useEffect(() => {
    // const _data = JSON.parse(localStorage.getItem('CHAPTER'));
    // const params = router.query?.slug || [];
    // const isSameId =
    //   String(chapter?.detailCategory?.name) === params[1]?.split('-').join(' ');
    // console.log(_data);
    // console.log(chapter);
    // console.log(chapter?.detailCategory?.name);
    // if (
    //   String(_data?.detailCategory?.name) &&
    //   params[1]?.split('-').join(' ') &&
    //   !isSameId
    // ) {
    //   const getChapter = async (id) => {
    //     return id ? await getChapterDetail(id) : null;
    //   };
    //   getChapter(params[0]).then((res) => {
    //     setChapter({ ...res?.data });
    //   });
    // } else {
    //   setChapter({ ...chapter, ..._data });
    // }
    setChapter(data);
  }, [data]);

  useEffect(() => {
    const scrollContainer = document.getElementsByClassName(
      CLASS_CUSTOM.CURSOL_CUSTOM
    );

    for (let item of scrollContainer) {
      item.addEventListener('click', (evt) => {
        evt.preventDefault();
        // item.scrollLeft += 5;
        item.scrollTo({
          left: (item.scrollLeft += 1000),
          behavior: 'smooth',
        });
        // console.log('wheel', evt);
      });
    }

    return () => {
      for (let item of scrollContainer) {
        item.removeEventListener('click', (evt) => {
          evt.preventDefault();
          // item.scrollLeft += 500;
        });
      }
    };
  }, [chapter]);

  return (
    <>
      {isShowBackToTop && (
        <Typography
          variant={'body1'}
          color={'text.primary'}
          minWidth={'90px'}
          sx={{
            textDecoration: 'underline',
          }}
          position="absolute"
          right={24}
          bottom={24}
          zIndex={3}
        >
          <a href="#chapter-detail-top">Back to top</a>
        </Typography>
      )}
      <ScrollContainer
        height={'100vh'}
        customClass={
          getConditionToShowArrow(chapter) ? CLASS_CUSTOM.CURSOL_CUSTOM : ''
        }
        onClick={handleClickContainer}
        onScroll={(e) => {
          setIsShowBackToTop(
            e?.target?.scrollLeft > 200 || e.target.scrollTop > 200
          );
        }}
      >
        <div id="chapter-detail-top"></div>

        <HardCoverVertical name={chapter?.detailCategory?.name} />
        <HardCoverHorizontal name={chapter?.detailCategory?.name} />
        <ShortInfoChapter data={chapter?.detailCategory} hasMore={false} />
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
          {chapter?.albums?.map((p, i) => (
            <PhotosCard key={i} photos={p} />
          ))}
        </Stack>
      </ScrollContainer>
    </>
  );
}
