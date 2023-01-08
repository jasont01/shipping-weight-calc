import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const Dropdown = ({ label, items, value, onChange }) => {
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
            <MenuItem key={idx} value={item}>
              {item.type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default Dropdown
