import { useState, useEffect } from 'react'
import {
  Box,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  CircularProgress,
} from '@mui/material'
import Main from './Main'
import Header from './Components/Header'
import Shipment from './Components/Shipment'
import { useDataContext } from './hooks/useDataContext'

//TODO: move data to db
import data from './data.json'

const theme = createTheme({
  palette: {
    primary: {
      main: '#00649d',
    },
  },
})

const App = () => {
  const { dispatch } = useDataContext()
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState(0)

  useEffect(() => {
    dispatch({ type: 'SET_DATA', payload: data })
    setLoading(false)
  }, [dispatch])

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
    <Container maxWidth='lg' sx={{ mt: 8 }}>
      <Main tab={tab} setTab={setTab} />
      <Shipment setTab={setTab} />
    </Container>
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Header />
        {loading ? <Spinner /> : <Content />}
      </Box>
    </ThemeProvider>
  )
}

export default App
