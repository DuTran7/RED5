import ChapterDetail from 'components/pages/Chapter/ChapterDetail';
import { getChapterDetail } from 'components/service/CategoryDetailService';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Chapter() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const updateData = async (id) => {
    console.log(id);
    const res = await getChapterDetail(id);
    if (res?.status === 200) {
      setData(res?.data);
    } else {
      alert('Chapter was wrong');
      router.push('/');
    }
  };
  useEffect(() => {
    const id = router.query.slug?.[0];
    if (id) updateData(id);
  }, [router.query.slug]);
  return (
    <>
      <ChapterDetail data={data} />
    </>
  );
}
