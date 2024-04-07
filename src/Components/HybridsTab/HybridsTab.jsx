const HybridsTab = () => {
  // const buildDesc = isHybrid
  //   ? `Hybrid ${panels * panelType.positions}MX with ${
  //       panelType.hybridPositions
  //     }${panelType.type}`
  //   : `${panelType.type}${panels * panelType.positions} ${
  //       isAddon ? 'Addon' : 'Complete'
  //     }`

  // const positions = isHybrid
  //   ? panels * panelType.positions + 16
  //   : panels * panelType.positions

  // const buildWeight = isHybrid
  //     ? data.panels.find((pnl) => pnl.type === 'MX').weight * panels +
  //       panelType.weight * 1 +
  //       cabinet.weight +
  //       config.weight +
  //       (maxPanels - panels - 1) * panelBlank.weight +
  //       box
  //     : panelType.weight * panels +
  //       cabinet.weight +
  //       config.weight +
  //       (maxPanels - panels) * panelBlank.weight +
  //       box

  // useEffect(() => {
  //   let opts = []
  //   if (isHybrid) {
  //     let i =
  //       panelType.type === 'DP' ? cabinet.maxPanels - 2 : cabinet.maxPanels - 1
  //     let j = panelType.type === 'DP' ? 1 : 0
  //     for (i; i > j; i--) {
  //       opts.push({
  //         panels: i,
  //         positions: panelType.positions * i + panelType.hybridPositions,
  //       })
  //     }
  //   } else {
  //     let i = isAddon ? cabinet.maxPanels + 1 : cabinet.maxPanels
  //     for (i; i > 0; i--) {
  //       opts.push({
  //         panels: i,
  //         positions: panelType.positions * i,
  //       })
  //     }
  //   }
  //   setOptions(opts)
  // }, [panelType, isHybrid, isAddon])

  return <div>TODO</div>
}
export default HybridsTab
