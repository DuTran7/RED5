import ChapterDetail from 'components/pages/Chapter/ChapterDetail';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Chapter() {
  const router = useRouter();
  const [chapter, setChapter] = useState({});
  useEffect(() => {
    const chapterInfo = router.query.chapter;
    chapterInfo && setChapter(chapterInfo);
  }, [router?.query?.chapter]);
  return (
    <>
      <ChapterDetail />
    </>
  );
}
