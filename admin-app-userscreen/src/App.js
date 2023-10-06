import './App.css';
import NavBar from './Components/NavBar';
import Content from './Components/Content';
import { Box, Container, Stack } from '@mui/material';
import Menu from './Components/Menu';

function App() {
  return (
    <Box>
      <NavBar />
      <Container maxWidth='xl'>
        <Stack direction='row' spacing={2} justifyContent='space-between'>
          <Menu />
          <Content />
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
