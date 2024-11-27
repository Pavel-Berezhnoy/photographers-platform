import { IconButton } from '@mui/material';
import { useRef, ChangeEvent } from 'react';
import AttachFileIcon from '@mui/icons-material/AttachFile';

interface CreateFileProps {
  onChangeFiles: (files: FileList) => void
}

function CreateFile({ onChangeFiles }: CreateFileProps) {
  const fileInput = useRef<HTMLInputElement>(null);
  const triggerFileInputHandle = () => {
    fileInput.current?.click();
  };
  const selectFileHandle = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) onChangeFiles(e.target.files);
  };
  return (
    <IconButton
      sx={(theme) => ({
        color: theme.palette.text.secondary,
        background: 'linear-gradient(96.92deg, #FF2A77 34.43%, rgba(255, 0, 168, 0.89) 112.95%)',
      })}
      onClick={triggerFileInputHandle}
    >
      <input
        ref={fileInput}
        type="file"
        multiple
        accept="image/*"
        name="file"
        style={{ display: 'none' }}
        onChange={selectFileHandle}
      />
      <AttachFileIcon />
    </IconButton>
  );
}

export default CreateFile;
