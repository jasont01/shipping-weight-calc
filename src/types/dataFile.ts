import { PanelType, Cabinet, Mount } from './types'

type Config = { type: string; weight: number; suffix: string }
export type Pallet = { desc: string; part: string; weight: number }
type Box = { size: string; part: string; weight: number }

export type Accessory = { desc: string; part: string; weight: number }
export type AccessoryGroup = { type: string; items: Accessory[] }

export default interface DataFile {
  panels: PanelType[]
  hybrids: PanelType[]
  cabinets: Cabinet[]
  config: Config[]
  mount: Mount[]
  accessories: AccessoryGroup[]
  pallets: Pallet[]
  boxes: Box[]
}
