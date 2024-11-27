import { useMediaQuery, useTheme } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Wrapper } from '../style/chatsView';
import ChatList from '../../../components/chats/chat-list';
import CurrentChat from '../../../widgets/current-chat';
import { useStore } from '../../../app/store';

function ChatsView() {
  const {
    chatStore: {
      fetchChatList, getChatList, getCurrentChat, clearChatList,
    },
  } = useStore();

  useEffect(() => {
    fetchChatList();
    return () => clearChatList();
  }, [clearChatList, fetchChatList]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Wrapper className="wrapper">
      <ChatList chats={getChatList} />
      {!isMobile && getCurrentChat && <CurrentChat />}
    </Wrapper>
  );
}

export default observer(ChatsView);
