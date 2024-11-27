import {
  DialogActions,
  ImageListItem, useMediaQuery, useTheme,
} from '@mui/material';
import { AttachedFiles, AttachedFilesContent, FilesList } from '../style/attachedFiles';
import AppDialogTitle from '../../../app-components/app-dialog-title';

interface AttachedFilesDialogProps {
  open: boolean,
  onClose: () => void,
  files?: string[]
}

function AttachedFilesDialog({ open, onClose, files = [] }: AttachedFilesDialogProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const imageList = [
    'https://www.pngall.com/wp-content/uploads/5/Cool-Model-Man.png',
    'https://asset1.modelmanagement.com/mm-eyJ0Ijp7InIiOnsibCI6/IjE2MDAiLCJoIjoiNTEy/In19LCJpZCI6ImkxMjE4/MDE5NiIsImYiOiJqcGci/fQ;;.jpg',
    'https://www.apetogentleman.com/wp-content/uploads/2018/06/male-models-marlon.jpg',
    'https://www.pngall.com/wp-content/uploads/5/Model-Man-PNG-Image-File.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAvAaPUYIRACtqsLTDbMjJ_JklKzY1flytMQ&usqp=CAU',
    'https://hips.hearstapps.com/harpersbazaaruk.cdnds.net/15/37/original/original-david-gandy-jpg-5d012f79.jpg?resize=480:*',
  ];
  return (
    <AttachedFiles fullScreen={isMobile} open={open} onClose={onClose}>
      <AppDialogTitle title="Вложения" onClose={onClose} />
      <AttachedFilesContent>
        <FilesList
          cols={3}
          rowHeight={320}
        >
          {imageList.map((img) => (
            <ImageListItem key={img} sx={{ overflow: 'hidden', borderRadius: '.71rem' }}>
              <img
                style={{ height: '100%' }}
                src={img}
                alt="attached-img"
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </FilesList>
      </AttachedFilesContent>
      <DialogActions sx={{ padding: '3rem 0' }} />
    </AttachedFiles>
  );
}

export default AttachedFilesDialog;
