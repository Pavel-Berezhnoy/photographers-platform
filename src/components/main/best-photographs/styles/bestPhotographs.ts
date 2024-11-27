import { Box, styled, Typography } from '@mui/material';

export const Wrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginTop: '1.62rem',
  '@media (max-width: 1290px)': {
    flexDirection: 'column',
    alignItem: 'center',
  },
});

export const TextWrapper = styled(Box)(({ theme }) => ({
  color: theme.palette.text.secondary,
  width: '100%',
  maxWidth: '655px',
}));

export const Title = styled(Typography)({
  fontSize: '4.57rem',
  fontWeight: '500',
  textTransform: 'uppercase',
  lineHeight: '5.5rem',
  marginBottom: '12px',
  '@media (max-width: 992px)': {
    '&': {
      fontSize: '4.57rem',
      lineHeight: '5.5rem',
    },
  },
  '@media (max-width: 767px)': {
    '&': {
      fontSize: '3.8rem',
      lineHeight: '3.8rem',
    },
  },
});

export const Subtitle = styled(Typography)({
  fontSize: '1.42rem',
  fontWeight: '300',
  lineHeight: '1.71rem',
  maxWidth: '384px',
  color: '#DDDDDD',
});

export const ImagesContainer = styled(Box)({
  position: 'relative',
  width: '100%',
  maxWidth: '620px',
  minHeight: '503px',
  height: '100%',
  '@media (max-width: 1290px)': {
    marginTop: '4rem',
  },
});

export const ImageContainer = styled(Box)({
  position: 'absolute',
  filter: 'drop-shadow(4px 0px 4px rgba(0, 0, 0, 0.43))',
  maxHeight: '503px',
  maxWidth: '543px',
  height: '100%',
  width: '100%',
  cursor: 'pointer',
  transition: '.3s',
  overflow: 'hidden',
  borderRadius: '1rem',
});

export const ImageContent = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  padding: '.71rem 1rem',
  width: '100%',
  borderRadius: '1.57rem',
}));

export const BestPhotographersBadge = styled(Box)(({ theme }) => ({
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.secondary.main,
  borderRadius: '5px',
  padding: '1rem 1.57rem',
  position: 'absolute',
  zIndex: '10',
  top: '10px',
  left: '0',
}));
