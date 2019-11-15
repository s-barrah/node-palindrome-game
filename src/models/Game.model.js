import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let GameSchema = new Schema({
  name: { type: String, required: true },
  word: { type: String, required: true },
  points: { type: Number, required: true },
});


// Export the model
export default mongoose.model('Game', GameSchema);
