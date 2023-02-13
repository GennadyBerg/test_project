import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ImageLogoSignal } from '../Images';
import { Grid } from '@mui/material';

const drawerWidth = 240;
const navItems = ['HOME', 'FEATURES', 'GALLARY', 'VIDEO', 'PRICES', 'TESTIMONIALS', 'DOWNLOAD', 'CONTACT'];


function HeadBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Divider />
      <List>
        /*  selected item menu*/
        <div>
          <svg
            width="37px" height="2px">
            <path fill-rule="evenodd" fill="rgb(75, 202, 255)"
              d="M-0.000,-0.000 L36.1000,-0.000 L36.1000,1.999 L-0.000,1.999 L-0.000,-0.000 Z" />
          </svg>
        </div>

        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <Grid
              container
            >
              <Grid item sx={{ flexGrow: 1 }}
                display='flex'
                direction="row"
                alignItems="center"
                justifyContent="flex-start"
              >
                <ImageLogoSignal />
              </Grid>
              <Grid
                whiteSpace='nowrap'
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
              >
                <Grid item >
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { lg: 'none' } }}
                  >
                    <MenuIcon />
                  </IconButton>
                </Grid>
                <Grid item xs="8">
                  <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                    {navItems.map((item) => (
                      <Button key={item} sx={{ color: '#fff' }}>
                        {item}
                      </Button>
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />

        </Box>
      </Box>
    </>
  );
}

HeadBar.propTypes = {
  /*
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}

export { HeadBar }