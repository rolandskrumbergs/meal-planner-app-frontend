import { Box, Button, Card, CardContent, Container, Grid, Typography, Chip, Stack, CardOverflow, AspectRatio } from '@mui/joy';
import { Clock5, Lightbulb, NotebookText, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const recipeCategories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Vegetarian', 'Quick'];

const recipeData = [
  {
    id: 1,
    title: 'Mediterranean Salad',
    image: '/mediterranean-salad.png',
    rating: 4.4,
    time: '15 mins',
    description: 'Fresh vegetables, feta cheese, olives, and a light vinaigrette dressing.',
    tags: ['Vegetarian', 'Quick', 'Easy']
  },
  {
    id: 2,
    title: 'Avocado Toast',
    image: '/avocado-toast.png',
    rating: 4.1,
    time: '7 mins',
    description: 'Whole grain toast topped with mashed avocado, cherry tomatoes, and a sprinkle of salt and pepper.',
    tags: ['Vegetarian', 'Vegan', 'Easy']
  },
  {
    id: 3,
    title: 'Grilled Chicken Bowl',
    image: '/grilled-chicken.png',
    rating: 4.5,
    time: '25 mins',
    description: 'Grilled chicken breast with roasted vegetables and quinoa for a balanced meal.',
    tags: ['High Protein', 'Dairy Free', 'Medium']
  }
];

export const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ bgcolor: 'background.surface', pt: { xs: 4, md: 8 }, pb: { xs: 6, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid xs={12} md={6}>
              <Typography level="h1" sx={{ mb: 2, fontSize: { xs: '2rem', md: '3rem' } }}>
                Plan Your Meals,
                <br />
                Simplify Your Life
              </Typography>
              <Typography level="body-lg" sx={{ mb: 4, color: 'text.secondary' }}>
                Create weekly meal plans, discover new recipes tailored to your preferences, and never worry about what to cook again!
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button
                  component={Link}
                  to="/start-planning"
                  size="lg"
                  color="primary"
                >
                  Start Planning
                </Button>
                <Button
                  component={Link}
                  to="/explore"
                  size="lg"
                  variant="outlined"
                >
                  Explore Recipes
                </Button>
              </Stack>
            </Grid>
            <Grid xs={12} md={6}>
              <Box
                component="img"
                src="/hero-image.png"
                alt="Delicious meal"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 'xl',
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Recipe Suggestions Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Typography level="h2" sx={{ textAlign: 'center', mb: 1 }}>
          Recipe Suggestions
        </Typography>
        <Typography level="body-md" sx={{ textAlign: 'center', mb: 4, color: 'text.secondary' }}>
          Need inspiration? Here are some recipes you might enjoy.
        </Typography>
        
        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
          useFlexGap
          justifyContent="center"
          sx={{ mb: 4 }}
        >
          {recipeCategories.map((category) => (
            <Chip
              key={category}
              variant={category === 'All' ? 'solid' : 'soft'}
              color={category === 'All' ? 'primary' : 'neutral'}
              size="lg"
            >
              {category}
            </Chip>
          ))}
        </Stack>

        <Grid container spacing={3} sx={{ mb: 6 }}>
          {recipeData.map((recipe) => (
            <Grid key={recipe.id} xs={12} sm={6} md={4}>
              <Card 
                variant="outlined" 
                sx={{ 
                  height: '100%', 
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <CardOverflow>
                  <AspectRatio ratio="16/9">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      loading="lazy"
                    />
                  </AspectRatio>
                </CardOverflow>
                <CardContent sx={{ 
                  flexGrow: 1, 
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                    <Typography level="title-md">{recipe.title}</Typography>
                    <Typography level="body-sm" startDecorator={<Star size={14}/>}>{recipe.rating}</Typography>
                  </Box>
                  <Typography 
                    level="body-sm" 
                    sx={{ 
                      mb: 2,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    {recipe.description}
                  </Typography>
                  <Stack 
                    direction="row" 
                    spacing={1} 
                    flexWrap="wrap" 
                    useFlexGap 
                    sx={{ mt: 'auto' }}
                  >
                    {recipe.tags.map((tag) => (
                      <Chip key={tag} size="sm" variant="soft">
                        {tag}
                      </Chip>
                    ))}
                  </Stack>
                </CardContent>
                <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
                  <Box sx={{ display: 'flex', gap: 1, p: 1, alignItems: 'center' }}>
                    <Typography level="body-xs" sx={{ flexGrow: 1 }} startDecorator={<Clock5 size={16} />}>{recipe.time}</Typography>
                    <Button size="sm">Add to Plan</Button>
                  </Box>
                </CardOverflow>
              </Card>
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ textAlign: 'center', pt: 4 }}>
          <Button
            component={Link}
            to="/recipes"
            variant="outlined"
            size="lg"
          >
            Browse more recipes
          </Button>
        </Box>
      </Container>

      {/* Features Section */}
      <Box sx={{ bgcolor: 'background.level1', py: { xs: 4, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography level="h2" sx={{ textAlign: 'center', mb: 1 }}>
            Why use <Typography fontWeight={"bold"}>Week<Typography sx={{
            color: 'primary.600'
          }}>eater</Typography></Typography>?
          </Typography>
          <Typography level="body-md" sx={{ textAlign: 'center', mb: 6, color: 'text.secondary' }}>
            Our platform makes meal planning simple, efficient, and personalized to your preferences.
          </Typography>

          <Grid container spacing={4}>
            <Grid xs={12} md={4}>
              <Card variant="soft">
                <CardContent sx={{ textAlign: 'center' }}>
                  <Box sx={{ mb: 2 }}><NotebookText /></Box>
                  <Typography level="title-lg" sx={{ mb: 2 }}>
                    Personalized Planning
                  </Typography>
                  <Typography>
                    Create meal plans tailored to your dietary preferences, allergies, and cooking skills.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={12} md={4}>
              <Card variant="soft">
                <CardContent sx={{ textAlign: 'center' }}>
                  <Box sx={{ mb: 2 }}><Clock5 /></Box>
                  <Typography level="title-lg" sx={{ mb: 2 }}>
                    Save Time
                  </Typography>
                  <Typography>
                    No more wondering what to cook. Plan your meals ahead and spend less time on daily decisions.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={12} md={4}>
              <Card variant="soft">
                <CardContent sx={{ textAlign: 'center' }}>
                  <Box sx={{ mb: 2 }}><Lightbulb /></Box>
                  <Typography level="title-lg" sx={{ mb: 2 }}>
                    Discover New Ideas
                  </Typography>
                  <Typography>
                    Explore new recipes that match your taste preferences and dietary needs.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Final CTA Section */}
      <Box 
        sx={{ 
          bgcolor: 'primary.softBg',
          py: { xs: 6, md: 10 },
          textAlign: 'center'
        }}
      >
        <Container maxWidth="sm">
          <Typography level="h2" sx={{ mb: 2 }}>
            Ready to simplify your meal planning?
          </Typography>
          <Typography sx={{ mb: 4, color: 'text.secondary' }}>
            Join thousands of users who have transformed their cooking routine with <Typography fontWeight={"bold"}>Week<Typography sx={{
            color: 'primary.600'
          }}>eater</Typography></Typography>.
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              component={Link}
              to="/signup"
              size="lg"
              color="primary"
            >
              Sign Up Free
            </Button>
            <Button
              component={Link}
              to="/explore"
              size="lg"
              variant="outlined"
            >
              Explore Recipes
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};