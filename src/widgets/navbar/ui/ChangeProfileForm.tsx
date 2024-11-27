import { memo, useRef, ChangeEvent } from 'react';
import {
  Typography,
  Box,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  MenuItem,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useFormik } from 'formik';
import { AccountType, IProfile } from '../../../constants/types/profile.d';
import { ChangeProfileDialog, ImageContainer, ProfileInput } from '../styles/changeProfileForm';
import { scheme } from '../validation/profileForm';
import { changeProfile, uploadAvatar } from '../../../services/api/http/profileApi';
import { useStore } from '../../../app/store';
import AppDialogTitle from '../../../app-components/app-dialog-title';
import { accountTypesToView } from '../../../constants';

interface ChangeProfileFormProps {
  open: boolean,
  onClose: () => void,
  profile: IProfile
}

interface IProfileForm {
  name: string,
  sur_name: string,
  avatar: File | string,
  user_type: AccountType,
  email: string,
  location: string,
  about: string,
  phone: string,
  link: string,
}

function ChangeProfileForm({ open, onClose, profile }: ChangeProfileFormProps) {
  const fileInput = useRef<HTMLInputElement>(null);
  const { profileStore } = useStore();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const profileForm = useFormik<IProfileForm>({
    enableReinitialize: true,
    initialValues: {
      name: profile.name,
      avatar: profile.avatar,
      sur_name: profile.sur_name,
      user_type: profile.user_type,
      email: profile.email,
      location: profile.location,
      about: profile.about,
      phone: profile.phone,
      link: profile.link,
    },
    validationSchema: scheme,
    validateOnChange: false,
    onSubmit: async (values) => {
      let avatarResponse;
      if (values.avatar instanceof File) {
        const avatarFormData = new FormData();
        avatarFormData.append('file', values.avatar);
        avatarResponse = await uploadAvatar({ data: avatarFormData });
      }
      const profileResponse = await changeProfile({
        data: {
          ...values,
          avatar: values.avatar instanceof File
            ? avatarResponse?.data.url || ''
            : values.avatar,
        },
      });
      if (profileResponse.status === 200) {
        profileStore.setCurrentProfile = profileResponse.data;
        onClose();
      }
    },
  });
  const selectFileHandle = () => {
    fileInput.current?.click();
  };
  return (
    <ChangeProfileDialog fullScreen={isMobile} open={open} onClose={onClose}>
      <form onSubmit={profileForm.handleSubmit} style={{ display: 'contents' }}>
        <AppDialogTitle title="Настройки профиля" onClose={onClose} />
        <DialogContent sx={{ margin: '1.57rem 0 1.57rem 1.57rem', maxWidth: '600px' }}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
          >
            <ImageContainer>
              {profileForm.values.avatar
                ? (
                  <img
                    src={profileForm.values.avatar instanceof File
                      ? URL.createObjectURL(profileForm.values.avatar)
                      : profileForm.values.avatar}
                    style={{ objectFit: 'cover' }}
                    alt="avatar"
                  />
                )
                : (
                  <AccountCircleIcon
                    sx={{
                      color: (theme) => theme.palette.text.secondary,
                      maxWidth: '10rem',
                      maxHeight: '10rem',
                      width: '100%',
                      height: '100%',
                    }}
                  />
                )}
            </ImageContainer>
            <Box display="flex" gap=".71rem" marginBottom="1rem">
              <input
                ref={fileInput}
                type="file"
                accept="image/*"
                name="file"
                style={{ display: 'none' }}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  if (e.target.files?.length) {
                    profileForm.setFieldValue('avatar', e.target.files?.[0]);
                  }
                }}
              />
              <Button
                disableElevation
                sx={{ borderRadius: '2px' }}
                color="secondary"
                onClick={selectFileHandle}
              >
                Изменить фото
              </Button>
              <Button
                disableElevation
                sx={{ borderRadius: '2px' }}
                color="secondary"
                onClick={() => profileForm.setFieldValue('avatar', '')}
              >
                Удалить
              </Button>
            </Box>
          </Box>
          <TextField
            sx={(theme) => ({
              paddingBottom: '.71rem',
              minHeight: '58px',
              maxWidth: '10rem',
              marginBottom: '4rem',
              color: theme.palette.text.secondary,
              '& .MuiInputBase-root, & .MuiSvgIcon-root': {
                backgroundColor: 'inherit',
                color: theme.palette.text.secondary,
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.secondary.main,
              },
            })}
            size="small"
            fullWidth
            name="user_type"
            value={profileForm.values.user_type}
            color="secondary"
            select
            onChange={profileForm.handleChange}
            error={!!profileForm.errors.user_type}
            helperText={profileForm.errors.user_type}
          >
            <MenuItem value={AccountType.MODEL}>{accountTypesToView[AccountType.MODEL]}</MenuItem>
            <MenuItem value={AccountType.PHOTO}>{accountTypesToView[AccountType.PHOTO]}</MenuItem>
          </TextField>
          <Box display="flex" gap="3.57rem" width="100%">
            <Box paddingBottom="1.14rem" width="100%">
              <Typography component="label">Имя</Typography>
              <ProfileInput
                color="secondary"
                fullWidth
                name="name"
                size="small"
                value={profileForm.values.name}
                onChange={profileForm.handleChange}
                error={!!profileForm.errors.name}
                helperText={profileForm.errors.name}
              />
            </Box>
            <Box paddingBottom="1.14rem" width="100%">
              <Typography component="label">Фамилия</Typography>
              <ProfileInput
                color="secondary"
                fullWidth
                name="sur_name"
                size="small"
                value={profileForm.values.sur_name}
                onChange={profileForm.handleChange}
                error={!!profileForm.errors.sur_name}
                helperText={profileForm.errors.sur_name}
              />
            </Box>
          </Box>
          <Box display="flex" gap="3.57rem" width="100%">
            <Box paddingBottom="1.14rem" width="100%">
              <Typography component="label">Электронная почта</Typography>
              <ProfileInput
                color="secondary"
                fullWidth
                name="email"
                size="small"
                value={profileForm.values.email}
                onChange={profileForm.handleChange}
                error={!!profileForm.errors.email}
                helperText={profileForm.errors.email}
              />
            </Box>
            <Box paddingBottom="1.14rem" width="100%">
              <Typography component="label">Номер телефона</Typography>
              <ProfileInput
                color="secondary"
                fullWidth
                name="phone"
                size="small"
                value={profileForm.values.phone}
                onChange={profileForm.handleChange}
                error={!!profileForm.errors.phone}
                helperText={profileForm.errors.phone}
              />
            </Box>
          </Box>
          <Box display="flex" gap="3.57rem" width="100%">
            <Box paddingBottom="1.14rem" width="100%">
              <Typography component="label">Ссылка профиля</Typography>
              <ProfileInput
                color="secondary"
                fullWidth
                name="link"
                size="small"
                value={profileForm.values.link}
                onChange={profileForm.handleChange}
                error={!!profileForm.errors.link}
                helperText={profileForm.errors.link}
              />
            </Box>
            <Box paddingBottom="1.14rem" width="100%">
              <Typography component="label">Местоположение</Typography>
              <ProfileInput
                color="secondary"
                fullWidth
                name="location"
                size="small"
                value={profileForm.values.location}
                onChange={profileForm.handleChange}
                error={!!profileForm.errors.location}
                helperText={profileForm.errors.location}
              />
            </Box>
          </Box>
          <Box display="flex" gap="3.57rem" width="100%">
            <Box paddingBottom="1.14rem" width="100%">
              <Typography component="label">Обо мне</Typography>
              <ProfileInput
                color="secondary"
                fullWidth
                multiline
                rows={6}
                name="about"
                size="small"
                value={profileForm.values.about}
                onChange={profileForm.handleChange}
                error={!!profileForm.errors.about}
                helperText={profileForm.errors.about}
              />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions sx={{ paddingBottom: '2.5rem', justifyContent: 'center' }}>
          <Button
            sx={{ padding: '.75rem 2.5rem', fontSize: '1rem' }}
            color="secondary"
            type="submit"
            disableElevation
          >
            Сохранить
          </Button>
        </DialogActions>
      </form>
    </ChangeProfileDialog>
  );
}

export default memo(ChangeProfileForm);
