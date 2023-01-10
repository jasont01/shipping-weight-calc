import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material'

const Dropdown = ({ label, items, value, onChange }) => {
  return (
    <Box sx={{ minWidth: 100 }}>
      <FormControl fullWidth>
        <InputLabel id='select-label'>{label}</InputLabel>
        <Select
          labelId='select-label'
          value={value}
          label={label}
          size={'small'}
          onChange={(e) => onChange(e.target.value)}
          sx={{ textTransform: 'capitalize' }}
        >
          {items.map((item, idx) => (
            <MenuItem
              key={idx}
              value={item}
              sx={{ textTransform: 'capitalize' }}
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
