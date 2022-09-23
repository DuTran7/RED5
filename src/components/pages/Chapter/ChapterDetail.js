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
import { getChapterDetail } from 'components/service/CategoryDetailService';
export default function ChapterDetail({ data }) {
  const router = useRouter();

  const [chapter, setChapter] = useState(data);

  const getConditionToShowArrow = (chapter) => {
    const hasAlbums = chapter?.albums?.length > 0;
    const hasDescription = !!chapter?.detailCategory?.description.trim();
    return hasAlbums || hasDescription;
  };

  // useEffect(() => {
  //   const name = router.query.chapter;
  //   if (name) setChapter({ ...chapter, name });
  // }, [router.query]);

  // fetch data
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('CHAPTER'));
    const params = router.query?.slug || [];
    const isSameId =
      String(data?.detailCategory?.name) === params[1]?.split('-').join(' ');
    if (
      String(data?.detailCategory?.name) &&
      params[1]?.split('-').join(' ') &&
      !isSameId
    ) {
      const getChapter = async (id) => {
        return id ? await getChapterDetail(id) : null;
      };
      getChapter(params[0]).then((res) => {
        setChapter({ ...res?.data });
      });
    } else {
      setChapter({ ...chapter, ...data });
    }
  }, [router.query.slug]);

  return (
    <ScrollContainer height={'100vh'}>
      <HardCoverVertical name={chapter?.detailCategory?.name} />
      <HardCoverHorizontal name={chapter?.detailCategory?.name} />
      <ShortInfoChapter
        data={chapter?.detailCategory}
        hasMore={getConditionToShowArrow(chapter)}
      />
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
  );
}
