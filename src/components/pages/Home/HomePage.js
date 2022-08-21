import { Box, Stack, Typography } from '@mui/material';
import ChapterCarousel from 'components/ukit/Carousel';
import Image from 'next/image';
import { useState } from 'react';
import { theme } from 'theme';
import ChapterCard from './ChapterCard';

export default function HomePage(props) {
  const { chapterList } = props;
  const [chapters, setChapters] = useState(chapterList);
  return (
    <Stack direction={'row'} overflow={'none none'}>
      <ChapterCarousel>
        {chapters?.map((c, i) => (
          <Box
            key={i}
            borderRight={'1px solid'}
            borderColor={theme.palette.divider}
            overflow={'none auto'}
            // minWidth={'200px'}
          >
            <ChapterCard chapNo={++i} name={c?.name} image={c?.image} />
          </Box>
        ))}
      </ChapterCarousel>
    </Stack>
  );
}
