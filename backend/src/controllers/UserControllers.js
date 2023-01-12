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

const login = (req, res) => {
  models.users
    .findOne(req.body)
    .then(([user]) => {
      res.send(user[0]);
      // if (user[0]) {
      //   if (await verifyHash(user[0].hashedpassword, req.body.password)) {
      //     const myUser = { ...user[0] };
      //     delete myUser.hashedpassword;
      //     const token = jwt.sign(myUser, process.env.JWT_AUTH_SECRET, {
      //       expiresIn: "24h",
      //     });

      //     res
      //       .status(201)
      //       .cookie("access_token", token, {
      //         httpOnly: true,
      //       })
      //       .json(myUser);
      //   } else {
      //     res.sendStatus(401);
      //   }
      // } else {
      //   res.sendStatus(401);
      // }
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
  login,
};
