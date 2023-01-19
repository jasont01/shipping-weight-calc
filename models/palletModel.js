const mongoose = require('mongoose')

const db = process.env.MONGO_DB_NS

const palletSchema = mongoose.Schema({
  desc: { type: String, required: true },
  part: { type: String, required: true },
  weight: { type: Number, required: true },
})

/**
 * Get all pallets
 */

palletSchema.statics.getPallets = async function () {
  const pallets = await this.find({})

  return pallets
}

const palletsDB = mongoose.connection.useDb(db)

module.exports = palletsDB.model('Pallet', palletSchema)
