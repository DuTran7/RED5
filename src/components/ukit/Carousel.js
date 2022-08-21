import { Box } from '@mui/material';
import Slider from 'react-slick';

export default function ChapterCarousel({ children }) {
  const settings = {
    className: 'center',
    infinite: false,
    centerPadding: '60px',
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 7.2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5.5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5.1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}
