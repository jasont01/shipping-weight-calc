import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const Dropdown = ({ label, maxPanels, value, onChange, panelPositions }) => {
  const [options, setOptions] = useState([
    { panels: value, positions: panelPositions * value },
  ])

  useEffect(() => {
    let opts = []

    for (let i = maxPanels; i > 0; i--) {
      opts.push({
        panels: i,
        positions: panelPositions * i,
      })
    }

    setOptions(opts)
  }, [maxPanels, panelPositions])

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='select-label'>{label}</InputLabel>
        <Select
          labelId='select-label'
          value={value}
          label={label}
          size={'small'}
          onChange={(e) => onChange(e.target.value)}
        >
          {options.map((option) => (
            <MenuItem key={option.positions} value={option.panels}>
              {option.positions}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default Dropdown
