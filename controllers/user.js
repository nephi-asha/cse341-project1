const mongodb = require('../db/connect');
const { ObjectId } = require('mongodb');

const getAll = async (req, res) => {
  // #swagger.description = 'Gets all users'
  const result = await mongodb
    .getDb()
    .db('project1')
    .collection('contact')
    .find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res) => {
  // #swagger.description = 'Gets a single user by id'
  const contactId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db('project1')
    .collection('contact')
    .find({ _id: contactId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createContact = async (req, res) => {
  // #swagger.description = 'Creates new user'
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const response = await mongodb
    .getDb()
    .db('project1')
    .collection('contact')
    .insertOne(user);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the user.');
  }
};

const updateContact = async (req, res) => {
  // #swagger.description = 'Updates a single user'
  const userId = new ObjectId(req.params.id);
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName, 
    email: req.body.email,     
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday 
  };
  const response = await mongodb
    .getDb()
    .db('project1')
    .collection('contact')
    .updateOne({ _id: userId}, {$set: user });
    // .updateOne({ _id: userId }, { $set: req.body });
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the user.');
  }
};

const deleteContact = async (req, res) => {
  // #swagger.description = 'Deletes a single user by Id'
  const contactId = new ObjectId(req.params.id);
  const response = await mongodb
    .getDb()
    .db('project1')
    .collection('contact')
    .deleteOne({ _id: contactId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the user.');
  }
};
module.exports = { getAll, getSingle, createContact, updateContact, deleteContact};