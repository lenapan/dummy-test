const MongoClient = require('mongodb').MongoClient;

const url =
  'mongodb+srv://queen:UsiCqD9shHAuIqWE@cluster0.pi6ou.mongodb.net/addTitles?retryWrites=true&w=majority';

const addTitles= async (req, res, next) => {

  const newTitle = {
    titles: req.body.titles
  }
  const client = new MongoClient(url); 
  try {
    await client.connect();
    const db = client.db();
    const result = db.collection('titles').insertOne(newTitle);
  } catch (error) {
    return res.json({message: 'Could not store data.'});
  };
  res.json(newTitle);
};

const retrieveTitles = async (req, res, next) => {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  let titles; // if this variable name doesn't match a collection in the database, it doesn't seem to work

  try {
    await client.connect();
    const db = client.db();
    titles = await db.collection('titles').find().toArray();
  } catch (error) {
    return res.json({message: 'Could not retrieve comments.'});
  };
  client.close();

  res.json(titles);
};
  
exports.addTitles = addTitles;
exports.retrieveTitles = retrieveTitles;