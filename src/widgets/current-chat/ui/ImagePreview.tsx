import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { MediaImage } from '../style/currentChat';

interface ImagePreviewProps {
  image: File,
  fileIndex: number,
  onDeleteImage: (fileIndex: number) => void
}

function ImagePreview({ image, fileIndex, onDeleteImage }: ImagePreviewProps) {
  const deleteImageHandle = () => {
    onDeleteImage(fileIndex);
  };
  return (
    <Box key={image.lastModified} sx={{ position: 'relative', overflow: 'hidden' }}>
      <IconButton
        sx={({ palette }) => ({
          position: 'absolute',
          right: '0',
          top: '0',
          padding: '0',
          backgroundColor: palette.primary.main,
          borderRadius: '0',
          borderTopRightRadius: '.71rem',
          opacity: '.7',
        })}
        onClick={deleteImageHandle}
      >
        <CloseIcon sx={(theme) => ({ color: theme.palette.text.secondary })} />
      </IconButton>
      <MediaImage
        style={{ objectFit: 'cover' }}
        src={URL.createObjectURL(image)}
        alt=""
      />
    </Box>
  );
}

export default ImagePreview;
