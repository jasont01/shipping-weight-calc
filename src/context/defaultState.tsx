import data from '../data.json'
import { Panel, Cabinet, Config, Mount, Hybrid } from '../enums'

const DEFAULT_STATE = {
  panelType: data.panels[Panel.MX],
  panelCount: data.cabinets[Panel.MX].maxPanels,
  hybridType: data.hybrids[Hybrid.DP],
  hybridPanels: 1,
  cabinet: data.cabinets[Cabinet.Large],
  config: data.config[Config.Kiosk],
  mount: data.mount[Mount.Wall],
  qty: 1,
  accessories: [
    ...data.cabinets.map((cab) => ({ ...cab.wallboard, qty: 0 })),
    { ...data.stand, qty: 0 },
    ...data.accessories.map((item) => ({ ...item, qty: 0 })),
  ],
  isAddon: false,
  isUpgrade: false,
}

export default DEFAULT_STATE
