import { List, ListItem, ListItemButton } from '@mui/joy';
import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
  onItemClick?: () => void;
}

const Navigation = ({ onItemClick }: NavigationProps) => {
  const location = useLocation();
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Meal planner', path: '/meal-planner' },
    { label: 'My recipes', path: '/my-recipes' },
    { label: 'Explore', path: '/explore' },
  ];

  return (
    <List
      role="menubar"
      orientation="horizontal"
      sx={{
        display: 'flex',
        gap: 2,
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      {navItems.map((item) => (
        <ListItem role="none" key={item.path}>
          <ListItemButton
            role="menuitem"
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
            onClick={onItemClick}
            sx={{
              fontWeight: location.pathname === item.path ? 'bold' : 'normal',
              color: location.pathname === item.path ? 'primary.500' : 'neutral.500',
              borderRadius: 'md',
              ...(location.pathname === item.path && {
                bgcolor: 'primary.50',
              }),
            }}
          >
            {item.label}
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default Navigation;
