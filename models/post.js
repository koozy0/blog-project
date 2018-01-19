const mongoose = require('mongoose');

// Schema Definition
const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  images: [{ type: String }], // or id to image??
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  timestamp: { type: Date, default: Date.now },
  edited: Date
});

const Post = module.exports = mongoose.model('Post', postSchema);
