const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const directorSchema = new Schema({
 name: {type: String, required: true},
 surname: {type: String, required: true},
 birthDate: {type: Number },
 birthPlace: {type: String },
 deathDate: {type: Number },
 deathPlace: {type: String },
 biography: {type: String },
 gender: {type: String },
 awards: {type: String },
 movies: [{type: Schema.Types.ObjectId, ref: 'Movie'}],
 series: [{type: Schema.Types.ObjectId, ref: 'Series'}],
 anime: [{ type: Schema.Types.ObjectId, ref: 'Anime' }],
 nationality: {type:String },
 image: {type: String}
},{
 timestamps: true,
 minimize:true,
 autoIndex: true
});

directorSchema.virtual('fullName').get(function () {
 return this.name + ' ' + this.surname;
});

const Director = mongoose.model('Director', directorSchema, 'directors');

module.exports = Director;