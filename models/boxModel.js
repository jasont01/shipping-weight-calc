const mongoose = require('mongoose')

const db = process.env.MONGO_DB_NS

const boxSchema = mongoose.Schema({
  size: { type: String, required: true },
  part: { type: String, required: true },
  weight: { type: Number, required: true },
})

/**
 * Get all boxes
 */

boxSchema.statics.getBoxes = async function () {
  const boxes = await this.find({})

  return boxes
}

const boxesDB = mongoose.connection.useDb(db)

module.exports = boxesDB.model('Box', boxSchema)
