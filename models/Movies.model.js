const { Schema, model, SchemaType } = require('mongoose');

const movieSchema = new Schema(
  {
    title: String,
    genre: String,
    plot: String,
    cast: [{
        type: Schema.Types.ObjectId,
        ref: 'Celebrity'
    }]
  },
{
    timestamps: true
  }
);

module.exports = model('Movies', movieSchema);