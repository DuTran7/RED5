import ChapterDetail from 'components/pages/Chapter/ChapterDetail';
import { getChapterDetail } from 'components/service/CategoryDetailService';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IMAGE_SOURCE } from 'utils/constants';

export default function Chapter({ chapterInfo, seo }) {
  return (
    <>
      <NextSeo {...seo} />
      <ChapterDetail data={chapterInfo} />
    </>
  );
}
export async function getStaticProps({ params }) {
  const id = params?.slug?.[0];
  // Call an external API endpoint to get posts
  const res = await getChapterDetail(id);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  const detailCategory = res?.data?.detailCategory;
  const seoConfig = {
    title: detailCategory?.name,
    description:
      detailCategory?.description?.split('<cap>')?.[0] +
        ' ' +
        detailCategory?.description?.split('<cap>')?.[1] || '',
    openGraph: {
      type: 'website',
      title: 'Albums',
      images: res?.data?.albums?.map((img) => ({
        url: IMAGE_SOURCE + img?.name,
        width: 800,
        height: 600,
        alt: img?.description,
      })),
    },
  };
  return {
    props: {
      // posts,
      chapterInfo: res?.data,
      seo: seoConfig,
    },
  };
}
export async function getStaticPaths(b) {
  return {
    paths: [{ params: { slug: ['1', 'some thing'] } }],
    fallback: 'blocking', // can also be true or 'blocking'
  };
}
