import { Box, Sheet, Button, List, ListItem, ListItemButton, Typography, IconButton, Drawer, Input } from '@mui/joy';
import { Link, useLocation } from 'react-router-dom';
import { Copyright, Menu as MenuIcon } from 'lucide-react';
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
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Typography 
                level="body-sm" 
                sx={{ 
                  color: 'neutral.300',
                  '&:hover': { color: 'neutral.100' }
                }}
              >
                Home
              </Typography>
            </Link>
            <Link to="/meal-planner" style={{ textDecoration: 'none' }}>
              <Typography 
                level="body-sm" 
                sx={{ 
                  color: 'neutral.300',
                  '&:hover': { color: 'neutral.100' }
                }}
              >
                Meal Planner
              </Typography>
            </Link>
            <Link to="/explore" style={{ textDecoration: 'none' }}>
              <Typography 
                level="body-sm" 
                sx={{ 
                  color: 'neutral.300',
                  '&:hover': { color: 'neutral.100' }
                }}
              >
                Explore Recipes
              </Typography>
            </Link>
            <Link to="/my-recipes" style={{ textDecoration: 'none' }}>
              <Typography 
                level="body-sm" 
                sx={{ 
                  color: 'neutral.300',
                  '&:hover': { color: 'neutral.100' }
                }}
              >
                Saved Recipes
              </Typography>
            </Link>
          </Box>
        </Box>

        {/* Support Section */}
        <Box>
          <Typography level="title-lg" sx={{ mb: 2, color: 'neutral.100' }}>Support</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Link to="/help-center" style={{ textDecoration: 'none' }}>
              <Typography 
                level="body-sm" 
                sx={{ 
                  color: 'neutral.300',
                  '&:hover': { color: 'neutral.100' }
                }}
              >
                Help Center
              </Typography>
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <Typography 
                level="body-sm" 
                sx={{ 
                  color: 'neutral.300',
                  '&:hover': { color: 'neutral.100' }
                }}
              >
                Contact Us
              </Typography>
            </Link>
            <Link to="/privacy" style={{ textDecoration: 'none' }}>
              <Typography 
                level="body-sm" 
                sx={{ 
                  color: 'neutral.300',
                  '&:hover': { color: 'neutral.100' }
                }}
              >
                Privacy Policy
              </Typography>
            </Link>
            <Link to="/cookie-policy" style={{ textDecoration: 'none' }}>
              <Typography 
                level="body-sm" 
                sx={{ 
                  color: 'neutral.300',
                  '&:hover': { color: 'neutral.100' }
                }}
              >
                Cookie Policy
              </Typography>
            </Link>
            <Link to="/account-settings" style={{ textDecoration: 'none' }}>
              <Typography 
                level="body-sm" 
                sx={{ 
                  color: 'neutral.300',
                  '&:hover': { color: 'neutral.100' }
                }}
              >
                Account Settings
              </Typography>
            </Link>
          </Box>
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
        <Typography level="body-xs" sx={{ color: 'neutral.400' }} startDecorator={<Copyright size={12} />}>
          {new Date().getFullYear()} <Typography fontWeight={"bold"}>Week<Typography sx={{
            color: 'primary.600'
          }}>eater</Typography></Typography>. All rights reserved.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Link to="/privacy" style={{ textDecoration: 'none' }}>
            <Typography level="body-xs" sx={{ color: 'neutral.400', '&:hover': { color: 'neutral.100' } }}>
              Privacy policy
            </Typography>
          </Link>
          <Link to="/terms" style={{ textDecoration: 'none' }}>
            <Typography level="body-xs" sx={{ color: 'neutral.400', '&:hover': { color: 'neutral.100' } }}>
              Terms of use
            </Typography>
          </Link>
          <Link to="/cookies" style={{ textDecoration: 'none' }}>
            <Typography level="body-xs" sx={{ color: 'neutral.400', '&:hover': { color: 'neutral.100' } }}>
              Cookie policy
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