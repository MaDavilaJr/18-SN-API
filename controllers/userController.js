const User = require('../models/User');
const Thought = require('../models/Thought');
const { model } = require('mongoose');

module.exports = {
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
    .populate('thoughts')
    .populate('friends')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  deleteUser(req, res) {
      User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
      !user
        ? res.status(404).json({ message: "No user with that ID"})
        : Thought.deleteMany({ _id: { $in: user.thoughts }})
    )
    .then(() => res.json({ message: 'Thought and users deleted!' }))
    .catch((err) => res.status(500).json(err));
  },
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  addNewFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $push: { friends: params.friendId }},
      { new: true, runValidators: true }
    )
    .then(dbUserData => {
      if(!dbUserData) {
        res.status(404).json({ message: 'No user found with this ID!'});
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => res.json(err));
  },
  removeFriend(req, res) {
    User.findOneAndUpdate(
      {_id: params.userId },
      {$pull: { friends: params.friendId }},
      { new: true }
    )
    .then(dbUserData => res.json(dbUserData))
    .catch(err => res.json(err));
  }
};
module.exports = userController;