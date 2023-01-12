import { useState, useEffect } from 'react'
import { Box, Typography, Paper } from '@mui/material'
import { useShipmentContext } from '../hooks/useShipmentContext'

const Summary = () => {
  const { items } = useShipmentContext()
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (!items) return

    setTotal(
      Math.round(items.reduce((sum, item) => sum + item.weight * item.qty, 0))
    )
  }, [items])

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
      <Paper sx={{ px: 4, py: 5, display: 'flex' }}>
        <Typography sx={{ fontSize: 'x-large', display: 'flex', mr: 1 }}>
          Total Shipment Weight:
        </Typography>
        <Typography
          sx={{
            fontSize: 'xx-large',
            fontWeight: 'Bold',
            mx: 1,
            outline: 'solid',
            outlineColor: '#00649d',
            offset: -5,
            position: 'relative',
            bottom: '.2em',
            px: 1,
          }}
        >
          {total}
        </Typography>
        <Typography
          sx={{ fontSize: 'large', position: 'relative', top: '.3em' }}
        >
          lbs
        </Typography>
      </Paper>
    </Box>
  )
}
export default Summary
