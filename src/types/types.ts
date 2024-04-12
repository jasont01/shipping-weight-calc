export type PanelType = {
  type: string
  weight: number
  positions: number
  suffix: string
  hidden?: boolean | undefined
}

export type Cabinet = {
  size: string
  weight: number
  maxPanels: number
  mount: { wall: string; stand: string }
  box: string
}

export type Mount = { type: string; accessoryType: string | null }

export type Accessory = {
  desc: string
  part: string
  weight: number
  qty: number
}
