const models = require("../models");

const add = (req, res) => {
  const booking = req.body;

  // TODO validations (length, format...)

  models.booking
    .insert(booking)
    .then(([result]) => {
      res.status(201).json(result.insertId);
      // res.location(`/Booking/${result.insertId}`).sendStatus(201);
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
const read = (req, res) => {
  models.booking
    .bookingSummary(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  add,
  browse,
  read,
};
