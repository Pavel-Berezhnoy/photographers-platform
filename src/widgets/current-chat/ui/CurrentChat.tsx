import { Box, IconButton, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import { observer } from 'mobx-react-lite';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import {
  ActionsArea, MediaArea, MessagesArea, SendMessageForm, Wrapper,
} from '../style/currentChat';
import CreateFile from './CreateFile';
import ImagePreview from './ImagePreview';
import Message from './Message';
import { useStore } from '../../../app/store';
import ChatHeader from './ChatHeader';
import { MessageTypes } from '../../../constants/types/chat.d';
import AppLoadingComponent from '../../../app-components/app-loading-component';

interface ChatFormTypes {
  text: string,
  files: Array<File>,
}

function CurrentChat() {
  const {
    chatStore: {
      getChatMessages,
      getCurrentChat,
      fetchMessages,
      createNewChat,
      createMessage,
    },
    profileStore: { getCurrentProfile },
  } = useStore();
  const chatForm = useFormik<ChatFormTypes>({
    initialValues: {
      text: '',
      files: [],
    },
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (values) => {
      const messageData = new FormData();
      messageData.append('content', values.text);
      values.files.forEach((file) => messageData.append('files[]', file));
      messageData.append('type', MessageTypes.MESSAGE);
      messageData.append('sender', `${getCurrentChat?.first_user.id || 0}`);
      messageData.append('recipient', `${getCurrentChat?.second_user.id}`);

      if (getCurrentChat?.id && getCurrentChat?.id === -1) {
        const newChat = await createNewChat(getCurrentChat.second_user.id);
        createMessage(newChat?.id || 0, messageData);
      }
      createMessage(getCurrentChat?.id || 0, messageData);
    },
  });

  useEffect(() => {
    if (getCurrentChat?.id && getCurrentChat?.id !== -1) {
      fetchMessages(getCurrentChat.id);
    }
  }, [fetchMessages, getCurrentChat?.id]);

  const selectFilesHandle = (files: FileList) => {
    if (chatForm.values.files.length + files.length > 10) {
      const existFiles: File[] = Array.from(chatForm.values.files);
      for (let i = chatForm.values.files.length, fileIndex = 0; i < 10; i += 1, fileIndex += 1) {
        existFiles.push(files[fileIndex]);
      }
      chatForm.setFieldValue('files', existFiles);
    } else {
      chatForm.setFieldValue('files', [
        ...chatForm.values.files,
        ...Array.from(files),
      ]);
    }
  };
  const deleteFileHandle = (fileIndex: number) => {
    const filesForDelete = [...chatForm.values.files];
    filesForDelete.splice(fileIndex, 1);
    chatForm.setFieldValue('files', filesForDelete);
  };

  return (
    <Wrapper>
      <AppLoadingComponent isLoading={!getCurrentChat}>
        <ChatHeader />
        <MessagesArea>
          <Box
            component="ul"
            sx={{
              overflow: 'auto',
              flex: '1',
              height: '100%',
              padding: '0 2rem',
            }}
          >
            {getChatMessages.map((message) => (
              <Message
                key={message.id}
                message={message}
                isMyMessage={getCurrentProfile?.id === getCurrentChat?.first_user.id}
              />
            ))}
          </Box>
          <ActionsArea>
            <SendMessageForm onSubmit={chatForm.handleSubmit}>
              <CreateFile onChangeFiles={selectFilesHandle} />
              <TextField
                sx={(theme) => ({
                  '& .MuiInputBase-root': {
                    background: 'linear-gradient(114.17deg, rgba(255, 174, 204, 0.3075) 12.81%, rgba(255, 208, 236, 0.3) 107.92%)',
                    color: theme.palette.text.secondary,
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none !important',
                  },
                })}
                type="text"
                placeholder="Введите текст сообщения"
                size="small"
                name="text"
                multiline
                maxRows={4}
                color="secondary"
                fullWidth
                onChange={chatForm.handleChange}
              />
              <IconButton
                type="submit"
                sx={(theme) => ({
                  color: theme.palette.text.secondary,
                  background: 'linear-gradient(96.92deg, #FF2A77 34.43%, rgba(255, 0, 168, 0.89) 112.95%)',
                })}
              >
                <SendIcon />
              </IconButton>
            </SendMessageForm>
            <IconButton sx={(theme) => ({
              color: theme.palette.text.secondary,
              background: 'linear-gradient(96.92deg, #FF2A77 34.43%, rgba(255, 0, 168, 0.89) 112.95%)',
            })}
            >
              <AddIcon />
            </IconButton>
          </ActionsArea>
          {chatForm.values.files.length > 0 && (
            <MediaArea>
              {chatForm.values.files.map((file, index) => (
                <ImagePreview
                  key={file.lastModified}
                  image={file}
                  fileIndex={index}
                  onDeleteImage={deleteFileHandle}
                />
              ))}
            </MediaArea>
          )}
        </MessagesArea>
      </AppLoadingComponent>
    </Wrapper>
  );
}

export default observer(CurrentChat);
