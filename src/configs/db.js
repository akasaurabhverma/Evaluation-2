const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://akasaurabhverma:crA-EKfV78R-q.Y>@masai-evaluations.azpxf.mongodb.net/evalutaion?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


modules.export = () => client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});