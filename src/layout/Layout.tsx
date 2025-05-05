import { Box, Sheet, Button, List, ListItem, ListItemButton, Typography, IconButton, Drawer, Input } from '@mui/joy';
import { Link, useLocation } from 'react-router-dom';
import { Menu as MenuIcon } from 'lucide-react';
import { useState } from 'react';

const Navigation = ({ onItemClick }: { onItemClick?: () => void }) => {
  const location = useLocation();
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Meal planner', path: '/meal-planner' },
    { label: 'My recipes', path: '/my-recipes' },
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
              color: location.pathname === item.path ? 'primary.500' : 'neutral.500',
              borderRadius: 'md',
              ...(location.pathname === item.path && {
                bgcolor: 'primary.50',
              })
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
          Week<Typography sx={{
            color: 'primary.600'
          }}>eater</Typography>
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

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'neutral.800',
        py: 4,
        mt: 'auto',
        borderTop: '1px solid',
        borderColor: 'divider',
        color: 'neutral.100'
      }}
    >
      <Box
        sx={{
          maxWidth: '1200px',
          mx: 'auto',
          px: 3,
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 1fr',
            md: '1fr 1fr 1fr 1fr'
          },
          gap: 4
        }}
      >
        {/* Brand Section */}
        <Box>
          <Typography level="h4" sx={{ mb: 2, color: 'neutral.100' }}>
          Week<Typography sx={{
            color: 'primary.600'
          }}>eater</Typography>
          </Typography>
          <Typography level="body-sm" sx={{ mb: 2, color: 'neutral.300' }}>
            Your personal meal planning assistant that makes cooking simple and enjoyable.
          </Typography>
        </Box>

        {/* Quick Links Section */}
        <Box>
          <Typography level="title-lg" sx={{ mb: 2, color: 'neutral.100' }}>Quick Links</Typography>
          <List>
            <ListItem>
              <ListItemButton 
                component={Link} 
                to="/"
                sx={{ 
                  color: 'neutral.300',
                  '&:hover': { color: 'neutral.100' }
                }}
              >Home</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton 
                component={Link} 
                to="/meal-planner"
                sx={{ 
                  color: 'neutral.300',
                  '&:hover': { color: 'neutral.100' }
                }}
              >Meal Planner</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton 
                component={Link} 
                to="/explore"
                sx={{ 
                  color: 'neutral.300',
                  '&:hover': { color: 'neutral.100' }
                }}
              >Explore Recipes</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton 
                component={Link} 
                to="/my-recipes"
                sx={{ 
                  color: 'neutral.300',
                  '&:hover': { color: 'neutral.100' }
                }}
              >Saved Recipes</ListItemButton>
            </ListItem>
          </List>
        </Box>

        {/* Support Section */}
        <Box>
          <Typography level="title-lg" sx={{ mb: 2, color: 'neutral.100' }}>Support</Typography>
          <List>
            <ListItem>
              <ListItemButton 
                component={Link} 
                to="/help-center"
                sx={{ 
                  color: 'neutral.300',
                  '&:hover': { color: 'neutral.100' }
                }}
              >Help Center</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton 
                component={Link} 
                to="/contact"
                sx={{ 
                  color: 'neutral.300',
                  '&:hover': { color: 'neutral.100' }
                }}
              >Contact Us</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton 
                component={Link} 
                to="/privacy"
                sx={{ 
                  color: 'neutral.300',
                  '&:hover': { color: 'neutral.100' }
                }}
              >Privacy Policy</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton 
                component={Link} 
                to="/cookie-policy"
                sx={{ 
                  color: 'neutral.300',
                  '&:hover': { color: 'neutral.100' }
                }}
              >Cookie Policy</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton 
                component={Link} 
                to="/account-settings"
                sx={{ 
                  color: 'neutral.300',
                  '&:hover': { color: 'neutral.100' }
                }}
              >Account Settings</ListItemButton>
            </ListItem>
          </List>
        </Box>

        {/* Subscribe Section */}
        <Box>
          <Typography level="title-lg" sx={{ mb: 2, color: 'neutral.100' }}>Subscribe</Typography>
          <Typography level="body-sm" sx={{ mb: 2, color: 'neutral.300' }}>
            Stay up to date with recipe ideas and meal planning tips
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Input 
              size="sm"
              placeholder="Enter your email"
              sx={{ 
                flexGrow: 1,
                '--Input-decoratorChildHeight': '34px',
                '--Input-placeholderOpacity': 0.7,
                bgcolor: 'neutral.700',
                color: 'neutral.100',
                '&::placeholder': {
                  color: 'neutral.400'
                }
              }}
            />
            <Button 
              size="sm"
              sx={{
                bgcolor: 'primary.500',
                color: 'neutral.100',
                '&:hover': {
                  bgcolor: 'primary.600'
                }
              }}
            >Subscribe</Button>
          </Box>
        </Box>
      </Box>
      
      <Box sx={{ 
        maxWidth: '1200px', 
        mx: 'auto', 
        px: 3,
        mt: 4,
        pt: 2,
        borderTop: '1px solid',
        borderColor: 'neutral.700',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 2
      }}>
        <Typography level="body-xs" sx={{ color: 'neutral.400' }}>
          © {new Date().getFullYear()} MealPlan. All rights reserved.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Link to="/privacy">
            <Typography level="body-xs" sx={{ color: 'neutral.400', '&:hover': { color: 'neutral.100' } }}>
              Privacy Policy
            </Typography>
          </Link>
          <Link to="/terms">
            <Typography level="body-xs" sx={{ color: 'neutral.400', '&:hover': { color: 'neutral.100' } }}>
              Terms of Use
            </Typography>
          </Link>
          <Link to="/cookies">
            <Typography level="body-xs" sx={{ color: 'neutral.400', '&:hover': { color: 'neutral.100' } }}>
              Cookie Policy
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => { 
    return (
        <Box sx={{ 
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column'
        }}>
            <Header />
            <Box component="main" sx={{ flexGrow: 1 }}>
                {children}
            </Box>
            <Footer />
        </Box>
    );
}

export default Layout;