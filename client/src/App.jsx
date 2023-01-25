import { useState, useEffect } from 'react'
import { getData } from './api/dataAPI'
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
import { useBuildContext } from './hooks/useBuildContext'

const theme = createTheme({
  palette: {
    primary: {
      main: '#00649d',
    },
  },
})

const App = () => {
  const { dispatch } = useBuildContext()
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState(0)

  useEffect(() => {
    if (!loading) return
    getData().then((data) => {
      dispatch({ type: 'SET_DATA', payload: data })
      setLoading(false)
    })
  }, [dispatch, loading])

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
