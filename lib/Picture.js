const mongoose = require('mongoose');

const PictureSchema = new mongoose.Schema({
  fileName: String,
  filePath: String
});

module.exports = mongoose.models.Picture || mongoose.model('Picture', PictureSchema)