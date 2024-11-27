import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  TextField,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { ChangeEvent, useRef } from 'react';
import { useFormik } from 'formik';
import { MediaDialog } from '../styles/addMediaForm';
import { scheme } from '../validation';
import { uploadMedia } from '../../../services/api/http/mediaApi';
import AppDialogTitle from '../../app-dialog-title';
import { useStore } from '../../../app/store';

interface AddMediaFormProps {
  open: boolean,
  userId: number,
  onClose: () => void
}

interface MediaValues {
  file: '' | File
}

function AddMediaForm({ open, onClose, userId }: AddMediaFormProps) {
  const fileInput = useRef<HTMLInputElement>(null);
  const { usersStore: { fetchProfileMedias } } = useStore();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const formik = useFormik<MediaValues>({
    initialValues: {
      file: '',
    },
    validationSchema: scheme,
    onSubmit: async ({ file }, helpers) => {
      const imageFormData = new FormData();
      imageFormData.append('file', file);
      await uploadMedia({ data: imageFormData });
      helpers.resetForm();
      fetchProfileMedias(userId);
      onClose();
    },
  });
  const selectFileHandle = () => {
    fileInput.current?.click();
  };
  return (
    <MediaDialog fullScreen={isMobile} open={open} onClose={onClose}>
      <form style={{ display: 'contents' }} onSubmit={formik.handleSubmit}>
        <AppDialogTitle title="Добавить фото" onClose={onClose} />
        <DialogContent sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '4.85rem',
          flex: 'none',
        }}
        >
          <Box sx={{
            backgroundColor: '#fff',
            borderRadius: '.71rem',
            padding: '1.71rem',
            maxWidth: '640px',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '1.71rem',
          }}
          >
            <TextField
              fullWidth
              sx={{ minHeight: '58px' }}
              size="small"
              value={formik.values.file instanceof File ? formik.values.file?.name : ''}
              InputProps={{ readOnly: true }}
              error={!!formik.errors.file}
              helperText={formik.errors.file}
            />
            <input
              ref={fileInput}
              type="file"
              accept="image/*"
              name="file"
              style={{ display: 'none' }}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                formik.setFieldValue('file', e.target.files?.[0]);
              }}
            />
            <Button sx={{ padding: '.57rem 0' }} fullWidth color="secondary" onClick={selectFileHandle}>
              Выбрать файл
            </Button>
          </Box>
        </DialogContent>
        <DialogActions sx={{ marginTop: '4.85rem', paddingBottom: '2.5rem', justifyContent: 'center' }}>
          <Button
            sx={{ padding: '.75rem 2.5rem', fontSize: '1rem' }}
            color="secondary"
            type="submit"
            disableElevation
          >
            Добавить
          </Button>
        </DialogActions>
      </form>
    </MediaDialog>
  );
}

export default AddMediaForm;
