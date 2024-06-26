import { useState, useEffect } from 'react'
import { Box, Typography, Paper, Tooltip } from '@mui/material'

import { useShipmentContext } from '../../hooks/useShipmentContext'

const Summary = () => {
  const { state } = useShipmentContext()
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (!state.items) return

    setTotal(state.items.reduce((sum, item) => sum + item.weight * item.qty, 0))
  }, [state.items])

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
      <Paper sx={{ px: 4, py: 5, display: 'flex' }}>
        <Typography sx={{ fontSize: 'x-large', display: 'flex', mr: 1 }}>
          Shipment Weight:
        </Typography>
        <Tooltip title={total.toFixed(1)} arrow>
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
            {Math.round(total / 5) * 5}
          </Typography>
        </Tooltip>
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
