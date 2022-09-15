import DefaultLayout from 'components/layouts/DefaultLayput';
import HomePage from 'components/pages/Home/HomePage';
import { getChapters } from 'components/service/CategoryDetailService';
import { getAllCategories } from 'components/service/CategoryService';
import { useEffect, useState } from 'react';

export default function Home({ data }) {
  const name = [
    'Showtime Coffee',
    'The Running Bean',
    'Dreamcape',
    'Asanoha',
    'September Coffee 2',
    'Bevel House',
    'Doors Apartment',
    'Sunday Apartment',
    'Hybird Bar',
    `Chi's Apartment`,
    'PNJ Concept',
    `Gang’s Apartment`,
    'September Coffee',
    '247 Home',
    'Yakisaki Resutaurant',
  ];
  const imgs = [
    {
      image: '/imgs/okkio.png',
      banner: '/imgs/okkio-banner.png',
      name: 'Okkio Coffee',
      design: 'Red5 Studio',
      construction: 'Red5studio + Ben Decor',
      client: `Libe'`,
      partner: 'Ben Decor, Jati Tile, Light Art',
      area: '243m2',
      location: '114 Nguyen Gia Tri, Binh Thanh District, Ho Chi Minh city',
      photo: 'Đỗ Sỹ',
      album: [
        {
          src: '/imgs/okkio/image 9.png',
          description: `The fitting part is a locker - because that's where people store their belongings and transform themselves.`,
        },
        {
          src: '/imgs/okkio/Okio2441 1.png',
          description: `The fitting part is a locker - because that's where people`,
        },
        {
          src: '/imgs/okkio/Okio4186 1.png',
          description: `The fitting part is a locker `,
        },
        {
          src: '/imgs/okkio/DSC04411 1.png',
          description: `The fitting part is a locker `,
        },
        {
          src: '/imgs/okkio/okio(day2)4540 1.png',
          description: `The fitting part is a locker - because that's where people store their belongings and transform themselves.`,
        },
        {
          src: '/imgs/okkio/okio(day2)4847 1.png',
          description: `The fitting part is a locker - because that's where people store their belongings and transform themselves.`,
        },
        {
          src: '/imgs/okkio/Okio0538 1.png',
          description: `The fitting part is a locker - because that's where people store their belongings and transform themselves.`,
        },
        {
          src: '/imgs/okkio/Okio1065 1.png',
          description: `The fitting part is a locker - because that's where people store their belongings and transform themselves.`,
        },
        {
          src: '/imgs/okkio/Okio3367 1.png',
          description: `The fitting part is a locker - because that's where people store their belongings and transform themselves.`,
        },
        {
          src: '/imgs/okkio/Okio4186 1.png',
          description: `The fitting part is a locker - because that's where people store their belongings and transform themselves.`,
        },
        {
          src: '/imgs/okkio/Okio0022 1.png',
          description: `The fitting part is a locker - because that's where people store their belongings and transform themselves.`,
        },
        {
          src: '/imgs/okkio/Okio0793 1.png',
          description: `The fitting part is a locker - because that's where people store their belongings and transform themselves.`,
        },
      ],
    },
    {
      chapNo: 'chapter 2',
      name: `Libe' Flagship`,
      image: '/imgs/anhcoffee.png',
      banner: '/imgs/libe-flaship-banner.png',
      design: 'Red5 Studio',
      construction: 'Red5studio + Ben Decor',
      client: `Libe'`,
      partner: 'Ben Decor, Jati Tile, Light Art',
      area: '243m2',
      location: '114 Nguyen Gia Tri, Binh Thanh District, Ho Chi Minh city',
      photo: 'Đỗ Sỹ',
      album: [
        {
          src: '/imgs/red5/ARe5_2915 5.png',
          description: `The fitting part is a locker - because that's where people store their belongings and transform themselves.`,
        },
        {
          src: '/imgs/red5/DSC06615 1.png',
          description: `The fitting part is a locker - because that's where people`,
        },
        {
          src: '/imgs/red5/DSC06648 1.png',
          description: `The fitting part is a locker `,
        },
        {
          src: '/imgs/red5/ARe5_2915 6.png',
          description: `The fitting part is a locker `,
        },
        {
          src: '/imgs/red5/ERe5_1341 1.png',
          description: `The fitting part is a locker - because that's where people store their belongings and transform themselves.`,
        },
        {
          src: '/imgs/red5/Re5_1067 1.png',
          description: `The fitting part is a locker - because that's where people store their belongings and transform themselves.`,
        },
        {
          src: '/imgs/red5/ARe5_2915 4.png',
          description: `The fitting part is a locker - because that's where people store their belongings and transform themselves.`,
        },
        {
          src: '/imgs/red5/ARe5_2915 3.png',
          description: `The fitting part is a locker - because that's where people store their belongings and transform themselves.`,
        },
        {
          src: '/imgs/red5/ARe5_2915 2.png',
          description: `The fitting part is a locker - because that's where people store their belongings and transform themselves.`,
        },
        {
          src: '/imgs/red5/image 2.png',
          description: `The fitting part is a locker - because that's where people store their belongings and transform themselves.`,
        },
        {
          src: '/imgs/red5/Re5_0010 1.png',
          description: `The fitting part is a locker - because that's where people store their belongings and transform themselves.`,
        },
        {
          src: '/imgs/red5/Re5_0801 1.png',
          description: `The fitting part is a locker - because that's where people store their belongings and transform themselves.`,
        },
      ],
    },
  ];
  let rs = [
    imgs[0],
    imgs[1],
    {
      image: '/imgs/showtimecoffee.png',
      banner: '/imgs/okkio-banner.png',
      name: 'Anh Coffee Roastery',
      design: 'Red5 Studio',
      construction: 'Red5studio + Ben Decor',
      client: `Libe'`,
      partner: 'Ben Decor, Jati Tile, Light Art',
      area: '243m2',
      location: '114 Nguyen Gia Tri, Binh Thanh District, Ho Chi Minh city',
      photo: 'Đỗ Sỹ',
    },
  ];
  for (let i = 0; i < name?.length; i++) {
    rs.push({
      image: '/imgs/showtimecoffee.png',
      banner: '/imgs/okkio-banner.png',
      name: name[i],
      design: 'Red5 Studio',
      construction: 'Red5studio + Ben Decor',
      client: `Libe'`,
      partner: 'Ben Decor, Jati Tile, Light Art',
      area: '243m2',
      location: '114 Nguyen Gia Tri, Binh Thanh District, Ho Chi Minh city',
      photo: 'Đỗ Sỹ',
    });
  }

  const [chapters, setChapters] = useState(rs);
  console.log(data);
  return (
    <DefaultLayout>
      <HomePage chapterList={data} />
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  const req = await getAllCategories();
  return {
    props: {
      data: req?.data,
    },
  };
}
