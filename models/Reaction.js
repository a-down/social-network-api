const { Schema, model } = require('mongoose');

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

reactionSchema
    .virtual('creationDate')
    .get(function () {
      return this.createdAt.toDateString()
    })

const Reaction = model('Reaction', reactionSchema)

module.exports = {Reaction, reactionSchema};