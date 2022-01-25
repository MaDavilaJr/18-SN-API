const User = require('../models/User');
const Thought = require('../models/Thought');
// Update user to thought?? Some of it is abritrary 
module.exports = {
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createThought(req, res) {
    Thought.create(req.body)
      .then((dbUserData) => 
      {return User.findByIdAndUpdate(
          {_id: req.params.userId},
          {$push: {thoughts: dbUserData._id}},
          {new: true}
      )})
      .then((dbUserData) => {
          if(!dbUserData) {
              return res.status(404).json({message: 'Thought created but no user with this id'})
          }

          res.json({message: 'Thought successfully made!'})
      })
      .catch((err) => res.status(500).json(err));
  },
  deleteThought(req, res) {
      Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
      !thought
        ? res.status(404).json({ message: "No thought with that ID"})
        : User.findOneAndUpdate({ thoughts: req.params.thoughtId}, {$pull: {thoughts: req.params.thoughtId}})
    )
    .then(() => res.json({ message: 'Thought and users deleted!' }))
    .catch((err) => res.status(500).json(err));
  },
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
};
