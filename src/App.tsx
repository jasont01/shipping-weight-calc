import { useState, useEffect } from 'react'
import {
  Box,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  CircularProgress,
} from '@mui/material'

import Tabs from './Components/Tabs/Tabs'
import Header from './Components/Header'
import Shipment from './Components/Shipment/Shipment'

import BuildContextProvider from './context/BuildContext'
import ShipmentContextProvider from './context/ShipmentContext'

const theme = createTheme({
  palette: {
    primary: {
      main: '#00649d',
    },
  },
})

// TODO  mobile layout

const App = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(false)
  }, [])

  const Spinner = () => (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        top: '15vh',
      }}
    >
      <CircularProgress />
    </Box>
  )

  const Content = () => (
    <Container maxWidth='md' sx={{ mt: 8 }}>
      <Tabs />
      <Shipment />
    </Container>
  )

  return (
    <BuildContextProvider>
      <ShipmentContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box>
            <Header />
            {loading ? <Spinner /> : <Content />}
          </Box>
        </ThemeProvider>
      </ShipmentContextProvider>
    </BuildContextProvider>
  )
}

export default App
