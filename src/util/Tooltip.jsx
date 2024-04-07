import { Tooltip } from '@mui/material'

const TooltipWrapper = ({ msg, placement, children }) => {
  return (
    <Tooltip title={msg} arrow placement={placement}>
      <span>{children}</span>
    </Tooltip>
  )
}
export default TooltipWrapper
