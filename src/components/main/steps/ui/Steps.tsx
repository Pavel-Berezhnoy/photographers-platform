import { memo } from 'react';
import { Box, Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import ProfiIcon from '../../../../assets/profi-icon.svg';
import {
  BlocksWrapper,
  Content,
  FindOrderItem, FindOrders, FindOrdersWrapper, MainGrid, TextWrapper,
} from '../style/steps';

function Steps() {
  return (
    <Box marginTop="16.14rem" marginLeft="1.42rem" sx={{ background: 'url("./assets/steps-bg.png")' }}>
      <Content>
        <BlocksWrapper>
          <Box sx={{
            background: '#150CE4',
            boxShadow: '0px 0px 101px 217px #150CE4',
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
            background: 'linear-gradient(99.03deg, #5F47A5 15.4%, #A186EC 119.74%)',
            borderRadius: '1.42rem',
            position: 'absolute',
            zIndex: '1',
            top: '-3.42rem',
            maxWidth: '450px',
            width: '100%',
            left: '-2.42rem',
            display: 'flex',
            gap: '10px',
          }}
          >
            <Box sx={{
              width: '100%', height: '5.42rem', minWidth: '5.42rem', maxWidth: '5.42rem',
            }}
            >
              <img src="./assets/canie-manager.png" alt="canie-manager.png" />
            </Box>
            <Box color={(theme) => theme.palette.text.secondary}>
              <Typography fontWeight="500" fontSize="1.07rem" lineHeight="2.07rem">@caniemanager</Typography>
              <Typography fontSize=".85rem" lineHeight="1.07rem">Будьте внимательны при вводе данных, так как при ошибке в букве или цифре вы можете потерять доступ к своему аккаунту!</Typography>
            </Box>
          </Box>
          <MainGrid>
            <Box
              color={(theme) => theme.palette.text.secondary}
              sx={{
                width: '100%',
                maxHeight: '470px',
                padding: '0 2.14rem',
                background: 'linear-gradient(165.85deg, rgba(255, 255, 255, 0.252) 5.96%, rgba(193, 193, 193, 0.252) 85.65%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(133, 108, 206, 1)',
                borderRadius: '1.71rem',
                gridRowStart: '1',
                gridRowEnd: '3',
              }}
            >
              <Typography marginTop="2rem" fontSize="1.42rem" lineHeight="3.07rem">1. Зарегистрируйтесь</Typography>
              <Box marginTop="1.42rem" display="flex">
                <Typography marginBottom="5px" marginLeft=".71rem">Электронная почта</Typography>
                <Typography sx={{ color: 'rgba(133, 108, 206, 1)', marginLeft: '.2rem' }}>*</Typography>
              </Box>
              <Box sx={{ background: 'rgba(103, 105, 157, 0.75)', borderRadius: '.71rem', padding: '.68rem .9rem' }}>
                <Typography>info@canie.ru</Typography>
              </Box>
              <Box marginTop="1.42rem" display="flex">
                <Typography marginBottom="5px" marginLeft=".71rem">Придумайте пароль</Typography>
                <Typography sx={{ color: 'rgba(133, 108, 206, 1)', marginLeft: '.2rem' }}>*</Typography>
              </Box>
              <Box sx={{ background: 'rgba(103, 105, 157, 0.75)', borderRadius: '.71rem', padding: '.68rem .9rem' }}>
                <Typography>*************</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" gap=".71rem">
                <Box flex="0 1 50%">
                  <Box marginTop="1.42rem" display="flex">
                    <Typography marginBottom="5px" marginLeft=".71rem">Имя</Typography>
                    <Typography sx={{ color: 'rgba(133, 108, 206, 1)', marginLeft: '.2rem' }}>*</Typography>
                  </Box>
                  <Box sx={{ background: 'rgba(103, 105, 157, 0.75)', borderRadius: '.71rem', padding: '.68rem .9rem' }}>
                    <Typography>Алексей</Typography>
                  </Box>
                </Box>
                <Box flex="0 1 50%">
                  <Box marginTop="1.42rem" display="flex">
                    <Typography marginBottom="5px" marginLeft=".71rem">Фамилия</Typography>
                    <Typography sx={{ color: 'rgba(133, 108, 206, 1)', marginLeft: '.2rem' }}>*</Typography>
                  </Box>
                  <Box sx={{ background: 'rgba(103, 105, 157, 0.75)', borderRadius: '.71rem', padding: '.68rem .9rem' }}>
                    <Typography>Прилученко</Typography>
                  </Box>
                </Box>
              </Box>
              <Box margin="3.42rem 0" display="flex" justifyContent="center">
                <Button
                  sx={(theme) => ({
                    borderRadius: '2rem',
                    backgroundColor: '#9177DB',
                    padding: '1.24rem 1.95rem',
                    '&.Mui-disabled': {
                      backgroundColor: '#9177DB',
                      opacity: '1',
                      color: theme.palette.text.secondary,
                    },
                  })}
                  disabled
                  variant="contained"
                >
                  Зарегистрироваться
                </Button>
              </Box>
            </Box>
            <Box
              color={(theme) => theme.palette.text.secondary}
              sx={{
                width: '100%',
                padding: '0 1rem 1.85rem',
                background: 'linear-gradient(165.85deg, rgba(255, 255, 255, 0.252) 5.96%, rgba(193, 193, 193, 0.252) 85.65%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(133, 108, 206, 1)',
                borderRadius: '1.71rem',
              }}
            >
              <Typography marginBottom="2.14rem" marginTop="1.42rem">2. Пополняйте портфолио</Typography>
              <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap="5px">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                  <Box
                    key={item}
                    sx={{
                      width: '5.14rem',
                      height: '5.71rem',
                      backgroundColor: 'rgba(103, 105, 157, 0.75)',
                      borderRadius: '.72rem',
                      display: 'flex',
                      justifyContent: 'center',
                      justifySelf: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <AddIcon />
                  </Box>
                ))}
              </Box>
            </Box>
            <Box
              color={(theme) => theme.palette.text.secondary}
              sx={{
                width: '100%',
                padding: '0 1rem 1.85rem',
                background: 'linear-gradient(165.85deg, rgba(255, 255, 255, 0.252) 5.96%, rgba(193, 193, 193, 0.252) 85.65%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(133, 108, 206, 1)',
                borderRadius: '1.71rem',
              }}
            >
              <Typography marginBottom="10px" fontSize="1rem" marginTop="1.42rem">4. Становитель профессионалом</Typography>
              <Box display="flex" justifyContent="center">
                <Box width="5.71rem" marginTop="2rem" marginBottom="1rem"><img src={ProfiIcon} alt="" /></Box>
              </Box>
            </Box>
          </MainGrid>
          <FindOrdersWrapper>
            <Typography marginBottom="10px" marginTop="1.42rem">2. Найдите подходящий Вам заказ или оформите собственный</Typography>
            <FindOrders>
              {[1, 2, 3, 4, 5].map((item) => (
                <FindOrderItem key={item}>
                  <CheckIcon />
                </FindOrderItem>
              ))}
            </FindOrders>
          </FindOrdersWrapper>
        </BlocksWrapper>
        <TextWrapper>
          <Typography fontSize="3.28rem" lineHeight="4.07rem">
            Как начать работать уже
          </Typography>
          <Typography
            sx={{ backgroundColor: '#8C75D3', borderRadius: '.71rem', display: 'inline-block' }}
            padding="0 .5rem"
            fontSize="3.28rem"
            lineHeight="4.07rem"
            marginTop=".4rem"
          >
            cегодня?
          </Typography>
          <Typography marginTop="1.42rem" fontSize="1.07rem" lineHeight="2rem">
            Пройдите 4 простых шага и подключайтесь к нашей семье!
          </Typography>
        </TextWrapper>
      </Content>
    </Box>
  );
}

export default memo(Steps);
