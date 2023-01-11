const models = require("../models");

const add = (req, res) => {
  const users = req.body;

  // TODO validations (length, format...)

  models.users
    .insert(users)
    .then(([result]) => {
      res.location(`/Users/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const browse = (req, res) => {
  models.users
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  add,
  browse,
};
