import { Box, Sheet, Button, List, ListItem, ListItemButton, Typography, IconButton, Drawer } from '@mui/joy';
import { Link, useLocation } from 'react-router-dom';
import { Menu as MenuIcon } from 'lucide-react';
import { useState } from 'react';

const Navigation = ({ onItemClick }: { onItemClick?: () => void }) => {
  const location = useLocation();
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Meal Planner', path: '/meal-planner' },
    { label: 'My Recipes', path: '/my-recipes' },
    { label: 'Explore', path: '/explore' }
  ];

  return (
    <List role="menubar" orientation="horizontal" sx={{ 
      display: 'flex', 
      gap: 2,
      flexDirection: { xs: 'column', md: 'row' }
    }}>
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
              color: location.pathname === item.path ? 'primary.500' : 'neutral.500'
            }}
          >
            {item.label}
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
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
        borderRight: 'none'
      }}
    >
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Typography level="h4" sx={{ fontWeight: 'bold' }}>
          MealPlan
        </Typography>
      </Link>
      
      <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
        <Navigation />
        <Button variant="solid" size="md">Login</Button>
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
            flexDirection: 'column'
          },
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Navigation onItemClick={handleDrawerToggle} />
          <Button variant="solid" size="md" sx={{ mt: 2 }}>Login</Button>
        </Box>
      </Drawer>
    </Sheet>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => { 
    return (
        <Box sx={{ minHeight: '100vh' }}>
            <Header />
            <Box component="main">
                {children}
            </Box>
        </Box>
    );
}

export default Layout;