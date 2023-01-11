const models = require("../models");

const add = (req, res) => {
  const booking = req.body;

  // TODO validations (length, format...)

  models.booking
    .insert(booking)
    .then(([result]) => {
      res.location(`/Booking/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const browse = (req, res) => {
  models.booking
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
