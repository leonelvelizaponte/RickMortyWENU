let mongoose = require('mongoose')

let favSchema = new mongoose.Schema({
    id: Number, //	The id of the character.
    name: String,//	The name of the character.
    status: String,//	The status of the character ('Alive', 'Dead' or 'unknown').
    species: String,//	The species of the character.
    type: String,//	The type or subspecies of the character.
    gender: String, //	The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').
    origin: Object, //	Name and link to the character's origin location.
    location: Object, //	Name and link to the character's last known location endpoint.
    image: String,// (url)	Link to the character's image. All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
    episode: Array,// (urls)	List of episodes in which this character appeared.
    url: String,// (url)	Link to the character's own URL endpoint.
    created: String,
    fav: Boolean // si esta o no marcado como favorito
})

module.exports = mongoose.model('Fav', favSchema)