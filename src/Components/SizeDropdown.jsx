import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material'

const Dropdown = ({ label, items, value, onChange, panelSize }) => {
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
          {items.map((item, idx) => (
            <MenuItem
              key={idx}
              value={item}
              disabled={item.interiorPanels < panelSize}
            >
              {item.type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default Dropdown
