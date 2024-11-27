import { styled, Box } from '@mui/material';

export const AboutWrapper = styled(Box)({
  background: 'url("./assets/AboutBg.png")',
  width: '100%',
  marginTop: '3.85rem',
  padding: '6.85rem 0 2.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '@media (max-width: 767px)': {
    '&': {
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
  },
});

export const AboutItem = styled(Box)({
  marginBottom: '1.85rem',
  display: 'flex',
  alignItems: 'flex-start',
});

export const ItemImage = styled('img')({
  width: '3.2rem',
  height: '3.2rem',
  '@media (max-width: 585px)': {
    '&': {
      width: '2.4rem',
      height: '2.4rem',
    },
  },
});

export const ItemImageContainer = styled(Box)({
  background: 'linear-gradient(143.17deg, rgba(20, 255, 0, 0.22) 0.29%, rgba(255, 255, 255, 0.1) 80.85%)',
  backdropFilter: ' blur(20px)',
  padding: '1.42rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  marginRight: '2.28rem',
});

export const AboutTitle = styled(Box)({
  maxWidth: '347px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '2rem',
  fontSize: '46px',
  lineHeight: '58px',
  '@media (max-width: 767px)': {
    '&': {
      maxWidth: '100%',
      marginLeft: '0',
      marginBottom: '10.14rem',
      fontSize: '36px',
      lineHeight: '46px',
      order: '1',
    },
  },
});

export const SkillsBox = styled(Box)({
  backdropFilter: 'blur(20px)',
  border: '1px solid',
  borderImageSource: 'linear-gradient(120.72deg, #0C852C 0%, rgba(12, 133, 44, 0.16) 0.01%, rgba(63, 198, 90, 0.17) 71.91%)',
  borderRadius: '1.42rem',
  padding: '4.64rem 2.57rem 3.07rem',
  background: 'linear-gradient(165.85deg, rgba(255, 255, 255, 0.08) 5.96%, rgba(193, 193, 193, 0.08) 85.65%)',
  '@media (max-width: 585px)': {
    '&': {
      padding: '5.64rem 1.42rem 1.07rem',
    },
  },
});

export const AboutBox = styled(Box)({
  backgroundColor: '#32AE48',
  borderRadius: '10px',
  display: 'inline-block',
  variant: 'h3',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  padding: '0 12px',
  marginTop: '8px',
  '@media (max-width: 767px)': {
    '&': {
      alignSelf: 'flex-end',
    },
  },
});
