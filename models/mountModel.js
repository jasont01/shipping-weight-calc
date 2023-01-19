const mongoose = require('mongoose')

const db = process.env.MONGO_DB_NS

const mountSchema = mongoose.Schema({
  type: { type: String, required: true },
  accessoryType: String,
})

/**
 * Get all mounts
 */

mountSchema.statics.getMounts = async function () {
  const mounts = await this.find({})

  return mounts
}

const mountsDB = mongoose.connection.useDb(db)

module.exports = mountsDB.model('Mount', mountSchema)
