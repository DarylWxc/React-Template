// import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./index.css";
import { createTheme, ThemeProvider, CssBaseline, Box, Stack } from "@mui/material";
import SideMenu from "pages/dashboard/components/SideMenu";
import AppNavBar from "pages/dashboard/components/AppNavBar";
import Header from "pages/dashboard/components/Header";
const theme = createTheme({
  palette: {
    secondary: {
      main: "#f50057",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{display: 'flex'}}
      >
        <SideMenu />
        <AppNavBar/>
        <Box component="main" sx={{overflow: 'auto'}}>
          <Stack
            spacing={2}
            sx={{
              alignItems: 'center',
              mx: 3,
              pb: 5,
              mt: {xs: 8, md: 0},
            }}
          >
            <Header />
            <Box sx={{width: '100%', maxWidth:{sm: '100%', md: '1700px'}}}>
              <Outlet />
            </Box>
          </Stack>
        </Box>
      </Box>
      {/* <div>
        <Typography sx={{bgcolor:"primary.light"}} variant="h5">This is My Personal Template!!!</Typography>
        <Container component="main" maxWidth="xs">
          <Outlet />
        </Container>
      </div> */}
    </ThemeProvider>
  );
}

export default App;
