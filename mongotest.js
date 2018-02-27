const MongoClient = require(`mongodb`).MongoClient;
const url = 'mongodb://127.0.0.1:27017/netify';

MongoClient.connect(url, function(error, db){
    db.collection(`movies`).find().toArray(function(error, movies){
        if(error){
            console.error(error);
            return;
        }
        console.log(movies);
    });
});

//For testing to make sure successful connect to db