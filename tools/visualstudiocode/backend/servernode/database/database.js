var env = require('../config.js');
let mongoose = require('mongoose');


const server = env.mongourl;
const database = env.mongoname;

class Database {
  constructor() {
    this._connect()
  }
  
_connect() {
     mongoose.connect(`mongodb://${server}/${database}`,{
         useNewUrlParser: true,
         useUnifiedTopology: true
     } )
       .then(() => {
         console.log('Conexion a MONGO realizada con exito')
       })
       .catch(err => {
         console.error('Conexion a MONGO con error')
       })
  }
}


module.exports = new Database()