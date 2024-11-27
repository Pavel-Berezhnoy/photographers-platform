import React, { memo, useState } from 'react';
import {
  Box, Typography, useMediaQuery, useTheme,
} from '@mui/material';
import {
  BestPhotographersBadge,
  ImageContent,
  ImagesContainer,
  Subtitle,
  TextWrapper,
  Title,
  ImageContainer,
  Wrapper,
} from '../styles/bestPhotographs';

function BestPhotographs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [photographersList, setPhotographersList] = useState([
    {
      title: 'Amela Jey',
      description: 'Живу фотографиями!',
      img: './assets/best-photographers-3.png',
    },
    {
      title: 'Sofi Briges',
      description: 'Делаю фото в самых сложных сценах!',
      img: './assets/best-photographers-2.png',
    },
    {
      title: 'Bob Evans',
      description: 'Я являюсь лучшим свадебным фотографом в РнД',
      img: './assets/best-photographers-1.png',
    },
  ]);
  const activeImageHandle = (index: number) => {
    setPhotographersList((prevList) => {
      const copiedList = [...prevList];
      const splicedValue = copiedList.splice(index, 1);
      copiedList.unshift(...splicedValue);
      return copiedList;
    });
  };
  return (
    <Wrapper>
      <TextWrapper>
        <Title variant="h3">
          <svg viewBox="0 0 8 3.7">
            <text x="3.2" y="1" textAnchor="middle" fontSize=".7" fontWeight="bold" fill="#fff" strokeWidth=".015" fontFamily="Arial, sans-serif">Найди своего —</text>
            <text x="2.45" y="1.8" textAnchor="middle" fontSize=".7" fontWeight="bold" fill="none" strokeWidth=".015" stroke="#ffffff" fontFamily="Arial, sans-serif">идеального</text>
            <text x="2.7" y="2.7" textAnchor="middle" fontSize=".7" fontWeight="bold" fill="none" strokeWidth=".015" stroke="#ffffff" fontFamily="Arial, sans-serif">партнера для</text>
            <text x="2.6" y="3.6" textAnchor="middle" fontSize=".7" fontWeight="bold" fill="none" strokeWidth=".015" stroke="#ffffff" fontFamily="Arial, sans-serif">фотосъемки</text>
          </svg>
        </Title>
        <Subtitle variant="h5">
          Присоединяйтесь к нашей большой семье творческих людей уже сегодня!
        </Subtitle>
      </TextWrapper>
      <ImagesContainer>
        <BestPhotographersBadge>
          <Typography variant="h3" fontSize="1.42rem" fontWeight="bold">
            Лучшие фотографы месяца
          </Typography>
        </BestPhotographersBadge>
        {photographersList.map((photographer, index) => (
          <ImageContainer
            key={photographer.title}
            sx={{
              zIndex: 5 + index,
              right: `${isMobile ? index - 4 + index + 0.5 : (index * 4) - 4}rem`,
              transform: `scale(${0.8 + (index / 10)})`,
            }}
            onClick={() => activeImageHandle(index)}
          >
            <img style={{ objectFit: 'cover' }} src={photographer.img} alt="" />
            <Box sx={{
              position: 'absolute',
              bottom: '22px',
              padding: '0 2rem',
              width: '100%',
            }}
            >
              <ImageContent>
                <Typography variant="h3" fontSize="1.42rem" fontWeight="bold">
                  {photographer.title}
                </Typography>
                <Typography fontSize="1rem">
                  {photographer.description}
                </Typography>
              </ImageContent>
            </Box>
          </ImageContainer>
        ))}
      </ImagesContainer>
    </Wrapper>
  );
}

export default memo(BestPhotographs);
