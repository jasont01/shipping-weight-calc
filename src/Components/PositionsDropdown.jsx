import { useState, useEffect } from 'react'
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material'
import { useBuildContext } from '../hooks/useBuildContext'

const Dropdown = () => {
  const { panels, panelType, size, config, dispatch } = useBuildContext()

  const [options, setOptions] = useState([
    { panels: panels, positions: panelType.positions * panels },
  ])

  const [maxPanels, setMaxPanels] = useState(
    size.interiorPanels + size.doorPanels
  )

  useEffect(() => {
    let panelCount = size.interiorPanels

    panelCount += panelType?.interiorOnly
      ? null
      : size.doorPanels + config.extraPanels

    panelCount = Math.floor(panelCount / (panelType?.panelSize || 1))

    if (panels > panelCount)
      dispatch({ type: 'SET_PANELS', payload: panelCount })

    setMaxPanels(panelCount)
  }, [panelType, size, config, panels, dispatch])

  useEffect(() => {
    let opts = []

    for (let i = maxPanels; i > 0; i--) {
      opts.push({
        panels: i,
        positions: panelType.positions * i,
      })
    }

    setOptions(opts)
  }, [maxPanels, panelType.positions])

  return (
    <FormControl size='sm' sx={{ m: 1 }}>
      <Box sx={{ minWidth: 80 }}>
        <FormControl fullWidth>
          <InputLabel id='panels-select-label'>Positions</InputLabel>
          <Select
            labelId='panels-select-label'
            value={panels}
            label='Positions'
            size={'small'}
            onChange={(e) =>
              dispatch({ type: 'SET_PANELS', payload: e.target.value })
            }
          >
            {options.map((option) => (
              <MenuItem key={option.positions} value={option.panels}>
                {option.positions}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </FormControl>
  )
}

export default Dropdown
