import { memo } from 'react';
import { Box, Typography } from '@mui/material';
import {
  AboutWrapper, AboutItem, ItemImageContainer, AboutTitle, AboutBox, SkillsBox, ItemImage,
} from '../styles/about';
import ClipBoard from '../../../../assets/clipboard-text-search-outline.svg';
import Body from '../../../../assets/material-symbols_body-system-rounded.svg';
import People from '../../../../assets/fluent_people-star-16-filled.svg';
import FormattingParagraph from '../../../../assets/streamline_interface-text-formatting-paragraph.svg';

function About() {
  return (
    <AboutWrapper>
      <Box sx={{
        background: 'linear-gradient(165.85deg, rgba(255, 255, 255, 0.06) 5.96%, rgba(193, 193, 193, 0.06) 85.65%)',
        backdropFilter: 'blur(20px)',
        borderRadius: '1.42rem',
        padding: '2.85rem',
        maxWidth: '759px',
        width: '100%',
        position: 'relative',
        '@media (max-width: 767px)': {
          '&': {
            padding: '2.85rem 1rem',
            order: '2',
          },
        },
      }}
      >
        <Box sx={{
          background: '#00E33C',
          boxShadow: '0px 0px 131px 221px #00E33C',
          opacity: '.08',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '25.28rem',
          height: '19.71rem',
          borderRadius: '19rem',
        }}
        />
        <Box sx={{
          padding: '1.71rem 2rem',
          background: 'linear-gradient(99.03deg, #03691E 4.39%, #32AD47 59.94%)',
          borderRadius: '1.42rem',
          position: 'absolute',
          zIndex: '1',
          top: '-46px',
          maxWidth: '450px',
          width: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
        }}
        >
          <Box sx={{ width: '100%', height: '5.42rem', maxWidth: '5.42rem' }}>
            <img src="./assets/canie-manager.png" alt="canie-manager.png" />
          </Box>
          <Box marginLeft="10px" color={(theme) => theme.palette.text.secondary}>
            <Typography fontWeight="500" fontSize="1.07rem" lineHeight="2.07rem">@caniemanager</Typography>
            <Typography fontSize=".85rem" lineHeight="1.07rem">Мы стремимся к главным ресурсам в вашей жизни - экономия времени и денег. Нам доверяют более 10.000 тыс. людей с каждого уголка страны</Typography>
          </Box>
        </Box>
        <SkillsBox>
          <AboutItem>
            <ItemImageContainer>
              <ItemImage src={ClipBoard} alt="" />
            </ItemImageContainer>
            <Box color={(theme) => theme.palette.text.secondary}>
              <Typography fontWeight="500" fontSize="1.07rem" lineHeight="2.07rem" marginBottom="5px">
                Рейтинговая система
              </Typography>
              <Typography fontSize=".85rem" lineHeight="1.07rem">
                Мы предоставляем возможность оставлять отзывы
                {' '}
                <br />
                и оценки о пользователях, что поможет вам
                <br />
                {' '}
                выбрать подходящего партнера.
              </Typography>
            </Box>
          </AboutItem>
          <AboutItem>
            <ItemImageContainer>
              <ItemImage src={Body} alt="" />
            </ItemImageContainer>
            <Box color={(theme) => theme.palette.text.secondary}>
              <Typography fontWeight="500" fontSize="1.07rem" lineHeight="2.07rem" marginBottom="5px">
                Опыт не важен
              </Typography>
              <Typography fontSize=".85rem" lineHeight="1.07rem">
                Вам необязательно быть опытным профессионалом, чтобы
                {' '}
                <br />
                зарегистрироваться на платформе. Вы можете создать свое
                {' '}
                <br />
                первое портфолио здесь!
              </Typography>
            </Box>
          </AboutItem>
          <AboutItem>
            <ItemImageContainer>
              <ItemImage src={People} alt="" />
            </ItemImageContainer>
            <Box color={(theme) => theme.palette.text.secondary}>
              <Typography fontWeight="500" fontSize="1.07rem" lineHeight="2.07rem" marginBottom="5px">
                Расширенный поиск
              </Typography>
              <Typography fontSize=".85rem" lineHeight="1.07rem">
                Наш удобный инструмент поиска позволяет фильтровать
                {' '}
                <br />
                поиск по различным параметрам, таким как географическое
                {' '}
                <br />
                {' '}
                местоположение, стиль съемки, возраст и многое другое
              </Typography>
            </Box>
          </AboutItem>
          <AboutItem>
            <ItemImageContainer>
              <ItemImage src={FormattingParagraph} alt="" />
            </ItemImageContainer>
            <Box color={(theme) => theme.palette.text.secondary}>
              <Typography fontWeight="500" fontSize="1.07rem" lineHeight="2.07rem" marginBottom="5px">
                Удобный
              </Typography>
              <Typography fontSize=".85rem" lineHeight="1.07rem">
                Наш сервис имеет интуитивно понятный и удобный
                {' '}
                <br />
                {' '}
                интерфейс, который позволяет легко находить
                <br />
                {' '}
                и контактировать с партнерами.
              </Typography>
            </Box>
          </AboutItem>
        </SkillsBox>
      </Box>
      <AboutTitle color={(theme) => theme.palette.text.secondary}>
        <Typography fontSize="inherit" variant="h3" lineHeight="inherit">Сервис устроен</Typography>
        <AboutBox>
          легко и удобно
        </AboutBox>
        <Typography marginTop="10px" fontSize="16px" lineHeight="19px">
          Наша платформа предоставляет удобный и простой инструмент для поиска
          профессиональных моделей и талантливых фотографов по всей стране
        </Typography>
      </AboutTitle>
    </AboutWrapper>
  );
}

export default memo(About);
