import { Box, Typography, Input, Button } from '@mui/joy';
import { Link } from 'react-router-dom';
import { Copyright } from 'lucide-react';

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
        color: 'neutral.100',
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
            md: '1fr 1fr 1fr 1fr',
          },
          gap: 4,
        }}
      >
        {/* Brand Section */}
        <Box>
          <Typography level="h4" sx={{ mb: 2, color: 'neutral.100' }}>
            Easy
            <Typography
              sx={{
                color: 'primary.600',
              }}
            >
              eater
            </Typography>
          </Typography>
          <Typography level="body-sm" sx={{ mb: 2, color: 'neutral.300' }}>
            Your personal meal planning assistant that makes cooking simple and
            enjoyable.
          </Typography>
        </Box>

        {/* Quick Links Section */}
        <Box>
          <Typography level="title-lg" sx={{ mb: 2, color: 'neutral.100' }}>
            Quick Links
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Typography
                level="body-sm"
                sx={{
                  color: 'neutral.300',
                  '&:hover': { color: 'neutral.100' },
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
                  '&:hover': { color: 'neutral.100' },
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
                  '&:hover': { color: 'neutral.100' },
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
                  '&:hover': { color: 'neutral.100' },
                }}
              >
                Saved Recipes
              </Typography>
            </Link>
          </Box>
        </Box>

        {/* Support Section */}
        <Box>
          <Typography level="title-lg" sx={{ mb: 2, color: 'neutral.100' }}>
            Support
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Link to="/help-center" style={{ textDecoration: 'none' }}>
              <Typography
                level="body-sm"
                sx={{
                  color: 'neutral.300',
                  '&:hover': { color: 'neutral.100' },
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
                  '&:hover': { color: 'neutral.100' },
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
                  '&:hover': { color: 'neutral.100' },
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
                  '&:hover': { color: 'neutral.100' },
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
                  '&:hover': { color: 'neutral.100' },
                }}
              >
                Account Settings
              </Typography>
            </Link>
          </Box>
        </Box>

        {/* Subscribe Section */}
        <Box>
          <Typography level="title-lg" sx={{ mb: 2, color: 'neutral.100' }}>
            Subscribe
          </Typography>
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
                  color: 'neutral.400',
                },
              }}
            />
            <Button
              size="sm"
              sx={{
                bgcolor: 'primary.500',
                color: 'neutral.100',
                '&:hover': {
                  bgcolor: 'primary.600',
                },
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
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
          gap: 2,
        }}
      >
        <Typography
          level="body-xs"
          sx={{ color: 'neutral.400' }}
          startDecorator={<Copyright size={12} />}
        >
          {new Date().getFullYear()}{' '}
          <Typography fontWeight={'bold'}>
            Easy
            <Typography
              sx={{
                color: 'primary.600',
              }}
            >
              eater
            </Typography>
          </Typography>
          . All rights reserved.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Link to="/privacy" style={{ textDecoration: 'none' }}>
            <Typography
              level="body-xs"
              sx={{ color: 'neutral.400', '&:hover': { color: 'neutral.100' } }}
            >
              Privacy policy
            </Typography>
          </Link>
          <Link to="/terms" style={{ textDecoration: 'none' }}>
            <Typography
              level="body-xs"
              sx={{ color: 'neutral.400', '&:hover': { color: 'neutral.100' } }}
            >
              Terms of use
            </Typography>
          </Link>
          <Link to="/cookies" style={{ textDecoration: 'none' }}>
            <Typography
              level="body-xs"
              sx={{ color: 'neutral.400', '&:hover': { color: 'neutral.100' } }}
            >
              Cookie policy
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
