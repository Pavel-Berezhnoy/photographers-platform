import { memo } from 'react';
import { Box, Typography, Divider } from '@mui/material';
import Telegram from '../../../../assets/telegram.svg';
import Inst from '../../../../assets/inst.svg';
import Youtube from '../../../../assets/youtube.svg';

function Footer() {
  return (
    <Box color={(theme) => theme.palette.text.secondary}>
      <Box padding=".85rem 1.14rem" width="85%" display="flex" justifyContent="space-between" flexWrap="wrap">
        <Box marginBottom="2rem" padding="0 1rem">
          <Typography marginBottom="2.57rem" fontSize="1.71rem">CANIE ©</Typography>
          <Typography marginBottom=".85rem" fontSize="1.28rem">+7 928 270 22 58</Typography>
          <Typography fontSize="1.28rem">info@canie.ru</Typography>
        </Box>
        <Box marginBottom="2rem" padding="0 1rem">
          <Typography marginBottom="2.57rem" fontSize="1.28rem">О нас</Typography>
          <Typography marginBottom=".85rem" fontSize="1.14rem">Почему мы</Typography>
          <Typography marginBottom=".85rem" fontSize="1.14rem">Что нужно?</Typography>
          <Typography fontSize="1.14rem">Цена</Typography>
        </Box>
        <Box marginBottom="2rem" padding="0 1rem">
          <Typography marginBottom="2.57rem" fontSize="1.28rem">Помощь</Typography>
          <Typography marginBottom=".85rem" fontSize="1.14rem">Заявка</Typography>
          <Typography fontSize="1.14rem">Задать вопрос</Typography>
        </Box>
        <Box marginBottom="2rem" padding="0 1rem">
          <Typography marginBottom="2.57rem" fontSize="1.28rem">Документы</Typography>
          <Typography marginBottom=".85rem" fontSize="1.14rem">Политика конфиденциальности</Typography>
          <Typography fontSize="1.14rem">Реквизиты</Typography>
        </Box>
      </Box>
      <Divider sx={(theme) => ({
        height: '1px',
        backgroundColor: theme.palette.text.secondary,
        margin: '4.28rem 0 3.57rem',
      })}
      />
      <Box display="flex" justifyContent="space-between" padding="0 1.42rem">
        <Box display="flex" alignItems="center" flex="0 1 33.33%">
          <Box sx={{ maxWidth: '1.71rem', width: '100%', marginRight: '.71rem' }}><img src={Telegram} alt="" /></Box>
          <Typography fontSize="1.14rem">Написать в Telegram</Typography>
        </Box>
        <Box display="flex" alignItems="center" flex="0 1 33.33%">
          <Box sx={{ maxWidth: '1.71rem', width: '100%', marginRight: '.71rem' }}><img src={Inst} alt="" /></Box>
          <Typography fontSize="1.14rem">Перейти в Instagram</Typography>
        </Box>
        <Box display="flex" alignItems="center" flex="0 1 33.33%">
          <Box sx={{ maxWidth: '1.71rem', width: '100%', marginRight: '.71rem' }}><img src={Youtube} alt="" /></Box>
          <Typography fontSize="1.14rem">Перейти в YouTube</Typography>
        </Box>
      </Box>
      <Divider sx={(theme) => ({
        height: '1px',
        backgroundColor: theme.palette.text.secondary,
        margin: '3.57rem 0',
      })}
      />
      <Typography marginBottom="3.57rem">
        г. Ростов-на-Дону,
        <br />
        Пушкинская 113
      </Typography>
    </Box>
  );
}

export default memo(Footer);
