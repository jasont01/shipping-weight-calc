import { useState } from 'react'
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
  const [tab, setTab] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Header />
        <Container maxWidth='lg' sx={{ mt: 8 }}>
          <Main tab={tab} setTab={setTab} />
          <Shipment setTab={setTab} />
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
