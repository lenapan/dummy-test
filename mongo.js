const MongoClient = require('mongodb').MongoClient;

const url =
  'mongodb+srv://queen:UsiCqD9shHAuIqWE@cluster0.pi6ou.mongodb.net/add_comment?retryWrites=true&w=majority';

const ADD= async (req, res, next) => {

  const newComment = {
    user: req.body.user,
    comment: req.body.comment
  }
  const client = new MongoClient(url); 
  try {
    await client.connect();
    const db = client.db();
    const result = db.collection('Comments').insertOne(newComment);
  } catch (error) {
    return res.json({message: 'Could not store data.'});
  };
//from external database, Mongo Cloud Atlas: add_comment = database name | 'Comments' = collection or child directory under 'add_comment'

  res.json(newComment);
};

const getComments = async (req, res, next) => {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  let Comments; // if this variable name doesn't match a collection in the database, it doesn't seem to work

  try {
    await client.connect();
    const db = client.db();
    Comments = await db.collection('Comments').find().toArray();
    // for (var i = 0; i < Comments.length; i++){ 
    //   console.log(`${Comments[i].user} says "${Comments[i].comment}"`);
    // }
  } catch (error) {
    return res.json({message: 'Could not retrieve comments.'});
  };
  client.close();

  res.json(Comments);
};
  
exports.ADD = ADD;
exports.getComments = getComments;