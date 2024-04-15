import data from '../data.json'
import { Panel, Cabinet, Config, Mount } from '../tests/enums'

const DEFAULT_STATE = {
  panelType: data.panels[Panel.MX],
  panelCount: data.cabinets[Panel.MX].maxPanels,
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
  isHybrid: false,
  isUpgrade: false,
}

export default DEFAULT_STATE
