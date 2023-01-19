const mongoose = require('mongoose')

const db = process.env.MONGO_DB_NS

const panelSchema = mongoose.Schema({
  type: { type: String, required: true },
  weight: { type: Number, required: true },
  positions: Number,
  suffix: String,
  pannelSize: Number,
  interiorOnly: Boolean,
  hidden: Boolean,
})

/**
 * Get all panels
 */

panelSchema.statics.getPanels = async function () {
  const panels = await this.find({})

  return panels
}

const panelsDB = mongoose.connection.useDb(db)

module.exports = panelsDB.model('Panel', panelSchema)
