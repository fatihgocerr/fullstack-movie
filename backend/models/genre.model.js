const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const genreSchema = new Schema({
    name: { type: String, required: true, unique: true, trim: true, minlength: 3 },
    description: { type: String, required: true, trim: true, minlength: 3 },
    image: { type: String},
    movies: [{ type: Schema.Types.ObjectId, ref: 'Movie' }],
    series: [{ type: Schema.Types.ObjectId, ref: 'Series' }],
    anime: [{ type: Schema.Types.ObjectId, ref: 'Anime' }],
    tags: [{ type:String}]
},{
    timestamps: true,
    minimize:true,
    autoIndex: true
});

const Genre = mongoose.model('Genre', genreSchema, 'genres');

module.exports = Genre;