import { useState, useCallback } from 'react';
import { Box, Button } from '@mui/material';
import { observer } from 'mobx-react-lite';
import AppProfile from '../../../app-components/app-profile';
import MoreDialog from '../../../app-components/app-profile-more-dialog';
import { useStore } from '../../../app/store';

function MyProfileView() {
  const [toggleMoreDialog, setToggleMoreDialog] = useState(false);
  const { profileStore: { getCurrentProfileToView } } = useStore();
  const toggleMoreDialogHandle = useCallback(() => {
    setToggleMoreDialog((prevState) => !prevState);
  }, []);
  return (
    <>
      <MoreDialog
        open={toggleMoreDialog}
        about={getCurrentProfileToView?.about}
        link={getCurrentProfileToView?.link}
        phone={getCurrentProfileToView?.phone}
        onClose={toggleMoreDialogHandle}
      />
      {getCurrentProfileToView && (
        <AppProfile
          profile={getCurrentProfileToView}
          addMedia
          actions={(
            <Box display="flex" gap=".71rem">
              <Button color="secondary" onClick={toggleMoreDialogHandle}>Больше</Button>
            </Box>
          )}
        />
      )}
    </>
  );
}

export default observer(MyProfileView);
