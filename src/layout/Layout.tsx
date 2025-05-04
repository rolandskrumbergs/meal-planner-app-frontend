import { Box, Sheet, Button, List, ListItem, ListItemButton, Typography, IconButton, Drawer, Input } from '@mui/joy';
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
            MealPlan
          </Typography>
          <Typography level="body-sm" sx={{ mb: 2, color: 'neutral.300' }}>
            Your personal meal planning assistant that makes cooking simple and enjoyable.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton variant="plain" size="sm" sx={{ color: 'neutral.300', '&:hover': { color: 'neutral.100' } }}>
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </IconButton>
            <IconButton variant="plain" size="sm" sx={{ color: 'neutral.300', '&:hover': { color: 'neutral.100' } }}>
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </IconButton>
            <IconButton variant="plain" size="sm" sx={{ color: 'neutral.300', '&:hover': { color: 'neutral.100' } }}>
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
            </IconButton>
          </Box>
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