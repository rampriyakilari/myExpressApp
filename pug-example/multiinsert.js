var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [
    { name: 'Hari', address: 'India'},
    { name: 'Peter', address: 'USA'},
    { name: 'kim', address: 'USA'},
    { name: 'Anna', address: 'New York'},
    { name: 'Michael', address: 'Singapore'},
    { name: 'Sandy', address: 'India'},
    { name: 'Sam', address: 'India'},
    { name: 'Richard', address: 'Russia'},
    { name: 'Susan', address: 'Russia'},
    { name: 'Vicky', address: 'India'},
    { name: 'Ben', address: 'New York'},
    { name: 'William', address: 'Japan'},
    { name: 'Chuck', address: 'Japan'},
    { name: 'Pinky', address: 'India'}
  ];
  dbo.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});