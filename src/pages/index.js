import DefaultLayout from 'components/layouts/DefaultLayput';

export default function Home() {
  return <DefaultLayout>ádasd</DefaultLayout>;
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
