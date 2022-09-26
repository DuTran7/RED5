import DefaultLayout from 'components/layouts/DefaultLayput';
import HomePage from 'components/pages/Home/HomePage';
import { getChapters } from 'components/service/CategoryDetailService';
import { getAllCategories } from 'components/service/CategoryService';
import { useEffect, useState } from 'react';
const seo = {
  title: 'Home - Red5',
  description: `Red5studio is an Interior design firm based in Saigon, which specializes in residential, apartment, retail, hospitality, and commercial practices. We provide a full-service that starts from the concept development to the final construction. Red5studio was founded by Interior Designer Lai Chinh Truc`,
};
export default function Home({}) {
  const [chapters, setChapters] = useState([]);
  const updateData = async () => {
    const res = await getAllCategories();
    if (res.status === 200) {
      setChapters(res.data);
    }
  };
  useEffect(() => {
    updateData();
  }, []);
  return (
    <DefaultLayout seo={seo}>
      <HomePage chapterList={chapters} />
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  // const req = await getAllCategories();
  return {
    props: {
      // data: req?.data,
    },
  };
}
