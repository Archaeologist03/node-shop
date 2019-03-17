const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://ilija:bandera123@cluster0-lhdxp.mongodb.net/test?retryWrites=true',
    { useNewUrlParser: true },
  )
    .then(client => {
      console.log('connected');
      callback(client);
    })
    .catch(err => console.log(err));
};

module.exports = mongoConnect;
