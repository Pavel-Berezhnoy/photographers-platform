import React, { useState } from 'react';
import { IconButton, ImageListItem } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { observer } from 'mobx-react-lite';
import DeleteConfirmDialog from './DeleteConfirmDialog';
import { useStore } from '../../../app/store';
import { IMedia } from '../../../constants/types/media.d';

interface ProfilePortfolioItemProps {
  img: IMedia
}

function ProfilePortfolioItem({ img }: ProfilePortfolioItemProps) {
  const [toggleDeletionForm, setToggleDeletionForm] = useState(false);
  const {
    usersStore: { removeMedia },
  } = useStore();

  const toggleDeletionFormHandle = () => setToggleDeletionForm((prevValue) => !prevValue);

  const confirmDeleteMediaHandle = async (mediaId: number) => {
    await removeMedia(mediaId);
    toggleDeletionFormHandle();
  };
  return (
    <>
      <DeleteConfirmDialog
        open={toggleDeletionForm}
        onConfirm={() => confirmDeleteMediaHandle(img.id)}
        onClose={toggleDeletionFormHandle}
      />
      <ImageListItem
        key={img.created_at}
        sx={{
          overflow: 'hidden',
          borderRadius: '.71rem',
          position: 'relative',
        }}
      >
        <IconButton
          sx={{
            position: 'absolute',
            right: '6px',
            top: '6px',
            color: (theme) => theme.palette.text.secondary,
          }}
          size="small"
          onClick={toggleDeletionFormHandle}
        >
          <CloseIcon />
        </IconButton>
        <img
          src={img.url}
          alt="portfolio-img"
          loading="lazy"
        />
      </ImageListItem>
    </>
  );
}

export default observer(ProfilePortfolioItem);
