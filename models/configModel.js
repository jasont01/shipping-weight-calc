const mongoose = require('mongoose')

const db = process.env.MONGO_DB_NS

const configSchema = mongoose.Schema({
  type: { type: String, required: true },
  weight: { type: Number, required: true },
  extraPanels: Number,
  suffix: String,
})

/**
 * Get all configs
 */

configSchema.statics.getConfigs = async function () {
  const configs = await this.find({})

  return configs
}

const configsDB = mongoose.connection.useDb(db)

module.exports = configsDB.model('Config', configSchema)
