const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // match: '/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/'
    },
    thoughts: [
      {type: Schema.Types.ObjectId, ref: 'Thought'}
    ],
    friends: [
      {type: Schema.Types.ObjectId, ref: 'User'}
    ]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema
  .virtual('friendCount')
  .get(() => { return `${this.friends}` })
  .set( friends => this.set(friends.length))

const User = model('User', userSchema);

module.exports = User;