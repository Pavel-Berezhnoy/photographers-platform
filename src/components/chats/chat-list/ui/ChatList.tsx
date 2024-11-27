import {
  Box, Typography, Divider, List,
} from '@mui/material';
import { observer } from 'mobx-react-lite';
import { IChat } from '../../../../constants/types/chat.d';
import { Wrapper } from '../style/chatList';
import ChatItem from './ChatItem';

interface ChatListProps {
  chats: IChat[]
}

function ChatList({ chats }: ChatListProps) {
  return (
    <Wrapper>
      <Box sx={{ padding: '1.5rem 1.71rem' }}>
        <Typography variant="h3" fontWeight="600" fontSize="1rem">CANIE CHAT</Typography>
      </Box>
      <Divider
        sx={(theme) => ({ backgroundColor: theme.palette.text.secondary, opacity: '.5' })}
        orientation="horizontal"
      />
      <List sx={{ overflow: 'auto', flex: '1' }}>
        {chats.map((chat) => <ChatItem key={chat.id || 'new'} chatItem={chat} />)}
      </List>
    </Wrapper>
  );
}

export default observer(ChatList);
