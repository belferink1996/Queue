import mongoose from 'mongoose';

const instance = new mongoose.Schema(
  {
    host: { type: mongoose.Schema.Types.ObjectId, ref: 'Person' },
    guests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Person' }],
    queue: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quest' }],
  },
  {
    timestamps: true,
    // this creates and maintains:
    // {
    //   createdAt: Date,
    //   updatedAt: Date,
    // }
  },
);

// NOTE! use a singular model name, mongoose automatically creates a collection like so:
// model: 'User' === collection: 'users'
const modelName = 'Room';

export default mongoose.model(modelName, instance);
