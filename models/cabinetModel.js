const mongoose = require('mongoose')

const db = process.env.MONGO_DB_NS

const cabinetSchema = mongoose.Schema({
  type: { type: String, required: true },
  weight: { type: Number, required: true },
  interiorPanels: { type: Number, required: true },
  doorPanels: { type: Number, required: true },
  mount: { type: Object, required: true },
  box: { type: String, required: true },
})

/**
 * Get all cabinets
 */

cabinetSchema.statics.getCabinets = async function () {
  const cabinets = await this.find({})

  return cabinets
}

const cabinetsDB = mongoose.connection.useDb(db)

module.exports = cabinetsDB.model('Cabinet', cabinetSchema)
