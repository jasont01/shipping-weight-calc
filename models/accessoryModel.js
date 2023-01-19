const mongoose = require('mongoose')

const db = process.env.MONGO_DB_NS

const accessorySchema = mongoose.Schema({
  type: { type: String, required: true },
  items: Array,
})

/**
 * Get all accessories
 */

accessorySchema.statics.getAccessories = async function () {
  const accessories = await this.find({})

  return accessories
}

const accessoriesDB = mongoose.connection.useDb(db)

module.exports = accessoriesDB.model('Accessory', accessorySchema)
