import { memo } from 'react';
import { ListItem } from '@mui/material';
import { NavLink, NavListWrapper } from '../styles/navList';
import { menuList } from '../constants/navList';

interface NavListProps {
  activeItem: string,
  onChangePage: (path: string) => void
}

function NavList({ activeItem, onChangePage }: NavListProps) {
  return (
    <NavListWrapper>
      {menuList.map((navItem) => (
        <ListItem
          sx={{ padding: '0' }}
          key={navItem.label}
          onClick={() => onChangePage(navItem.path)}
        >
          <NavLink
            className={`${activeItem === navItem.path && 'active'}`}
            to={navItem.path}
          >
            {navItem.label}
          </NavLink>
        </ListItem>
      ))}
    </NavListWrapper>
  );
}

export default memo(NavList);
