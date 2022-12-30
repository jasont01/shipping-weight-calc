import {
  Box,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
} from '@mui/material'
import Main from './Main'
import Header from './Components/Header'
import Shipment from './Components/Shipment'

const theme = createTheme({
  palette: {
    primary: {
      main: '#00649d',
    },
  },
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ backgroundColor: '#efefef', height: '100vh' }}>
        <Header />
        <Container maxWidth='lg' sx={{ mt: 8 }}>
          <Main />
          <Shipment />
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
