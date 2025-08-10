import {
  Box,
  Sheet,
  Button,
  Typography,
  IconButton,
  Drawer,
  Menu,
  MenuButton,
  MenuItem,
  Divider,
  Dropdown,
} from '@mui/joy';
import { Link, useNavigate } from 'react-router-dom';
import {
  Menu as MenuIcon,
  User,
  Settings,
  LogOut,
  CircleUserIcon,
} from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import Navigation from './Navigation';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { login, logout, getUserInfo } = useAuth();

  const userInfo = getUserInfo();

  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleAuthClick = async () => {
    if (!userInfo) {
      await login();
    }
  };

  const handleLogout = async () => {
    await logout();
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <Sheet
      variant="outlined"
      sx={{
        p: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 0,
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        position: 'sticky',
        top: 0,
        zIndex: 1100,
        bgcolor: 'background.surface',
        backdropFilter: 'blur(6px)',
      }}
    >
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Typography level="h4" sx={{ fontWeight: 'bold' }}>
          Easy
          <Typography
            sx={{
              color: 'primary.600',
            }}
          >
            eater
          </Typography>
        </Typography>
      </Link>

      <Box
        sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}
      >
        <Navigation />
        {userInfo ? (
          <Dropdown>
            <MenuButton
              slots={{ root: IconButton }}
              slotProps={{ root: { variant: 'plain' } }}
            >
              <CircleUserIcon />
            </MenuButton>
            <Menu sx={{ zIndex: 1200 }}>
              <MenuItem onClick={handleProfileClick}>
                <User size={16} style={{ marginRight: '8px' }} />
                Profile
              </MenuItem>
              <MenuItem onClick={() => navigate('/account-settings')}>
                <Settings size={16} style={{ marginRight: '8px' }} />
                Account settings
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleLogout} color="danger">
                <LogOut size={16} style={{ marginRight: '8px' }} />
                Log out
              </MenuItem>
            </Menu>
          </Dropdown>
        ) : (
          <Button variant="solid" size="md" onClick={handleAuthClick}>
            Login
          </Button>
        )}
      </Box>

      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <IconButton
          variant="plain"
          color="neutral"
          onClick={handleDrawerToggle}
          aria-label="Open menu"
        >
          <MenuIcon />
        </IconButton>
      </Box>

      <Drawer
        variant="plain"
        size="sm"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        anchor="right"
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-content': {
            p: 2,
            gap: 2,
            display: 'flex',
            flexDirection: 'column',
          },
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Navigation onItemClick={handleDrawerToggle} />
          {userInfo ? (
            <>
              <Button
                variant="soft"
                size="md"
                sx={{ mt: 2 }}
                onClick={handleProfileClick}
                startDecorator={<User size={16} />}
              >
                Profile
              </Button>
              <Button
                variant="soft"
                size="md"
                onClick={() => navigate('/account-settings')}
                startDecorator={<Settings size={16} />}
              >
                Account settings
              </Button>
              <Button
                variant="soft"
                color="danger"
                size="md"
                onClick={handleLogout}
                startDecorator={<LogOut size={16} />}
              >
                Log out
              </Button>
            </>
          ) : (
            <Button
              variant="solid"
              size="md"
              sx={{ mt: 2 }}
              onClick={handleAuthClick}
            >
              Login
            </Button>
          )}
        </Box>
      </Drawer>
    </Sheet>
  );
};

export default Header;
