const mongodb = require('../db/connect');
const { ObjectId } = require('mongodb');

const getData = async (req, res, next) => {
  const result = await mongodb
    .getDb()
    .db("project1")
    .collection('user')
    .find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingleData = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db("project1")
    .collection('user')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

module.exports = { getData, getSingleData };