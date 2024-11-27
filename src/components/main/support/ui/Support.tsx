import { memo } from 'react';
import { Box, Typography } from '@mui/material';
import { ImageContainer, SupportWrapper } from '../styles/support';

function Support() {
  return (
    <SupportWrapper>
      <Box color={(theme) => theme.palette.text.secondary}>
        <Typography
          sx={{
            backgroundColor: '#A61568',
            borderRadius: '10px',
            padding: '0 8px',
            display: 'inline-block',
          }}
          fontSize="3rem"
          lineHeight="3.57rem"
        >
          Общайтесь
        </Typography>
        <Typography fontSize="3rem" lineHeight="3.57rem">
          с фотографами и моделями
        </Typography>
        <Typography
          fontSize="1.14rem"
          lineHeight="1.78rem"
          marginTop="30px"
        >
          Не бойтесь задавать любые вопросы, если вам что-то
          <br />
          непонятно. Уточняйте детали заказа и желания.
          <br />
          Желаем удачи!
        </Typography>
      </Box>
      <ImageContainer>
        <img src="./assets/support.png" alt="" />
      </ImageContainer>
    </SupportWrapper>
  );
}

export default memo(Support);
