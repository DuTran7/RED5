import DefaultLayout from 'components/layouts/DefaultLayput';
import HomePage from 'components/pages/Home/HomePage';

export default function Home() {
  return (
    <DefaultLayout>
      <HomePage
        chapterList={[
          {
            chapNo: 'chapter 1',
            name: 'Okkio Coffee',
            image: '/imgs/okkio.png',
          },
          {
            chapNo: 'chapter 2',
            name: `Libe' Flagship`,
            image: '/imgs/okkio.png',
          },
          {
            chapNo: 'chapter 3',
            name: 'Anh Coffee Roastery',
            image: '/imgs/anhcoffee.png',
          },
          {
            chapNo: 'chapter 4',
            name: 'Showtime Coffee',
            image: '/imgs/showtimecoffee.png',
          },
          {
            chapNo: 'chapter 5',
            name: 'Okkio Coffee',
            image: '/imgs/okkio.png',
          },
          {
            chapNo: 'chapter 6',
            name: `Libe' Flagship`,
            image: '/imgs/okkio.png',
          },
          {
            chapNo: 'chapter 7',
            name: 'Anh Coffee Roastery',
            image: '/imgs/anhcoffee.png',
          },
          {
            chapNo: 'chapter 8',
            name: 'Showtime Coffee',
            image: '/imgs/showtimecoffee.png',
          },
          {
            chapNo: 'chapter 5',
            name: 'Okkio Coffee',
            image: '/imgs/okkio.png',
          },
          {
            chapNo: 'chapter 6',
            name: `Libe' Flagship`,
            image: '/imgs/okkio.png',
          },
          {
            chapNo: 'chapter 7',
            name: 'Anh Coffee Roastery',
            image: '/imgs/anhcoffee.png',
          },
          {
            chapNo: 'chapter 8',
            name: 'Showtime Coffee',
            image: '/imgs/showtimecoffee.png',
          },
        ]}
      />
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {},
  };
}
