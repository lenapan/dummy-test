const MongoClient = require('mongodb').MongoClient;

const url =
  'mongodb+srv://queen:UsiCqD9shHAuIqWE@cluster0.pi6ou.mongodb.net/addUsers?retryWrites=true&w=majority';

const addName= async (req, res, next) => {

  const newOne = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email:  req.body.email
  }
  const client = new MongoClient(url); 
  try {
    await client.connect();
    const db = client.db();
    const result = db.collection('name').insertOne(newOne);
  } catch (error) {
    return res.json({message: 'Could not store data.'});
  };
//from external database, Mongo Cloud Atlas: add_comment = database name | 'Comments' = collection or child directory under 'add_comment'

  res.json(newOne);
};

const getName = async (req, res, next) => {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  let name; // if this variable name doesn't match a collection in the database, it doesn't seem to work

  try {
    await client.connect();
    const db = client.db();
    name = await db.collection('name').find().toArray();
    // for (var i = 0; i < Comments.length; i++){ 
    //   console.log(`${Comments[i].user} says "${Comments[i].comment}"`);
    // }
  } catch (error) {
    return res.json({message: 'Could not retrieve comments.'});
  };
  client.close();

  res.json(name);
};
  
exports.addName = addName;
exports.getName = getName;