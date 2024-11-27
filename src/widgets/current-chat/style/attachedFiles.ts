import {
  Dialog, DialogContent, ImageList, styled,
} from '@mui/material';

export const AttachedFiles = styled(Dialog)({
  '& .MuiPaper-root': {
    background: 'linear-gradient(114.17deg, #5B2338 12.81%, #4A1D38 107.92%)',
    backdropFilter: 'blur(20px)',
    borderRadius: '1.42rem',
    maxWidth: '1150px',
    width: '100%',
  },
});

export const AttachedFilesContent = styled(DialogContent)({
  padding: '0 9rem',
  '@media (max-width: 585px)': {
    padding: '0 2rem',
  },
});

export const FilesList = styled(ImageList)({
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 260px)) !important',
  display: 'grid',
  justifyContent: 'center',
  gap: '1rem !important',
  padding: '2rem 0',
});
