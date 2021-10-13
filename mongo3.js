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

  res.json(newOne);
};

const getName = async (req, res, next) => {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  let name;

  try {
    await client.connect();
    const db = client.db();
    name = await db.collection('name').find().toArray();
  } catch (error) {
    return res.json({message: 'Could not retrieve comments.'});
  };
  client.close();

  res.json(name);
};
  
exports.addName = addName;
exports.getName = getName;