import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';

interface AppUserFavoriteButtonProps {
  inFavorite: boolean,
  onAddFavorite: () => void,
  onDeleteFavorite: () => void,
}

function AppUserFavoriteButton({
  inFavorite,
  onAddFavorite,
  onDeleteFavorite,
}: AppUserFavoriteButtonProps) {
  if (inFavorite) {
    return (
      <IconButton size="small" color="secondary" onClick={onDeleteFavorite}>
        <FavoriteIcon
          sx={{ width: '28px', height: '28px' }}
          color="secondary"
        />
      </IconButton>
    );
  }
  return (
    <IconButton size="small" color="secondary" onClick={onAddFavorite}>
      <FavoriteBorderIcon
        sx={{ width: '28px', height: '28px' }}
        color="secondary"
      />
    </IconButton>
  );
}

export default AppUserFavoriteButton;
