export interface PanelType {
  type: string
  weight: number
  positions: number
  suffix: string
  hidden?: boolean | undefined
}

export interface Cabinet {
  size: string
  weight: number
  maxPanels: number
  wallboard: Item
  box: Item
}

export interface Config {
  type: string
  weight: number
  suffix: string
}

export interface Item {
  desc: string
  part: string
  weight: number
}

export interface Accessory extends Item {
  qty: number
}

export default interface DataFile {
  panels: PanelType[]
  blank: { weight: number }
  hybrids: PanelType[]
  cabinets: Cabinet[]
  config: Config[]
  mount: string[]
  stand: Item & { box: Item }
  accessories: Item[]
  pallets: Item[]
}
