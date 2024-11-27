import {
  Typography, DialogContent, Box, useTheme, useMediaQuery,
} from '@mui/material';
import { memo } from 'react';
import { More } from '../style/moreDialog';
import AppDialogTitle from '../../app-dialog-title';

interface MoreDialogProps {
  open: boolean,
  onClose: () => void,
  link?: string,
  about?: string,
  phone?: string,
}

function MoreDialog({
  open, onClose, about, link, phone,
}: MoreDialogProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <More fullScreen={isMobile} open={open} onClose={onClose}>
      <AppDialogTitle title="Подробные данные" onClose={onClose} />
      <DialogContent sx={{ margin: '1.57rem 0 1.57rem 1.57rem', paddingRight: '5rem' }}>
        <Box paddingBottom="1.14rem">
          <Typography
            sx={{ color: (theme) => theme.palette.text.secondary, paddingBottom: '.71rem' }}
            fontWeight="700"
            fontSize="1.14rem"
          >
            Ссылка профиля
          </Typography>
          <Box sx={(theme) => ({
            borderRadius: '.71rem',
            border: '1px solid',
            borderColor: theme.palette.secondary.main,
            paddingBottom: '.71rem',
            padding: '1rem',
          })}
          >
            <Typography
              component="span"
              sx={() => ({
                color: (theme) => theme.palette.text.secondary,
              })}
            >
              {link || '-'}
            </Typography>
          </Box>
        </Box>
        <Box paddingBottom="1.14rem">
          <Typography
            sx={{ color: (theme) => theme.palette.text.secondary, paddingBottom: '.71rem' }}
            fontWeight="700"
            fontSize="1.14rem"
          >
            Телефон
          </Typography>
          <Box sx={(theme) => ({
            borderRadius: '.71rem',
            border: '1px solid',
            borderColor: theme.palette.secondary.main,
            paddingBottom: '.71rem',
            padding: '1rem',
          })}
          >
            <Typography
              component="span"
              sx={() => ({
                color: (theme) => theme.palette.text.secondary,
              })}
            >
              {phone || '-'}
            </Typography>
          </Box>
        </Box>
        <Box paddingBottom="1.14rem">
          <Typography
            sx={{ color: (theme) => theme.palette.text.secondary, paddingBottom: '.71rem' }}
            fontWeight="700"
            fontSize="1.14rem"
          >
            Обо мне
          </Typography>
          <Box sx={(theme) => ({
            borderRadius: '.71rem',
            border: '1px solid',
            borderColor: theme.palette.secondary.main,
            paddingBottom: '.71rem',
            padding: '1rem',
          })}
          >
            <Typography
              component="span"
              sx={() => ({
                color: (theme) => theme.palette.text.secondary,
              })}
            >
              {about || '-'}
            </Typography>
          </Box>
        </Box>
      </DialogContent>
    </More>
  );
}

export default memo(MoreDialog);
