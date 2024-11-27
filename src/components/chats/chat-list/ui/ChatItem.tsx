import { observer } from 'mobx-react-lite';
import { ListItem, useTheme, useMediaQuery } from '@mui/material';
import { IChat } from '../../../../constants/types/chat.d';
import { useStore } from '../../../../app/store';
import { ChatItemButton, ChatItemLink } from '../style/chatList';
import ChatItemContent from './ChatItemContent';

interface ChatItemProps {
  chatItem: IChat,
}

function ChatItem({ chatItem }: ChatItemProps) {
  const { chatStore } = useStore();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const selectCurrentChatHandle = () => {
    chatStore.setCurrentChat = chatItem;
  };
  return (
    <ListItem sx={{ display: 'flex', padding: '0' }}>
      {isMobile
        ? (
          <ChatItemLink to={`/canie-chat/${chatItem.id}`}>
            <ChatItemButton>
              <ChatItemContent
                avatar={chatItem.second_user.avatar}
                name={chatItem.second_user.name}
                surName={chatItem.second_user.sur_name}
                link={chatItem.second_user.link}
              />
            </ChatItemButton>
          </ChatItemLink>
        )
        : (
          <ChatItemButton onClick={selectCurrentChatHandle}>
            <ChatItemContent
              avatar={chatItem.second_user.avatar}
              name={chatItem.second_user.name}
              surName={chatItem.second_user.sur_name}
              link={chatItem.second_user.link}
            />
          </ChatItemButton>
        )}
    </ListItem>
  );
}

export default observer(ChatItem);
