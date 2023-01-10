import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material'

const Dropdown = ({ label, items, value, onChange, maxPanels }) => {
  return (
    <Box sx={{ minWidth: 80 }}>
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
              disabled={item?.panelSize > maxPanels}
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
