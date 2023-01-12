const models = require("../models");

const browse = (req, res) => {
  models.vehicle
    .findAll()
    .then(([vehicle]) => {
      res.send(vehicle);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const browseDate = (req, res) => {
  models.vehicle
    .findDate(req.body.departure_date, req.body.arrival_date)
    .then(([vehicle]) => {
      res.send(vehicle);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.vehicle
    .find(req.params.id)
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

const edit = (req, res) => {
  const vehicle = req.body;

  // TODO validations (length, format...)

  vehicle.id = parseInt(req.params.id, 10);

  models.vehicle
    .update(vehicle)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const vehicle = req.body;

  // TODO validations (length, format...)

  models.vehicle
    .insert(vehicle)
    .then(([result]) => {
      res.location(`/vehicles/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.vehicle
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  browseDate,
  add,
  edit,
  read,
  destroy,
};
