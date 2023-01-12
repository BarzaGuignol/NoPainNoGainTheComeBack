DROP DATABASE IF EXISTS aws;

CREATE DATABASE aws;

USE aws;

DROP TABLE IF EXISTS vehicle;

CREATE Table
    vehicle (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        model VARCHAR(500) NOT NULL,
        kilometer INT NOT NULL,
        picture VARCHAR(1000) NOT NULL,
        type VARCHAR(500) NOT NULL,
        vehicle_year INT NOT NULL,
        vehicle_status INT NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = latin1;

INSERT INTO
    vehicle (
        model,
        kilometer,
        picture,
        type,
        vehicle_year,
        vehicle_status
    )
VALUES (
        "Red Fire",
        114560,
        "https://images1.fanpop.com/images/image_uploads/Double-Dash-Karts-mario-kart-852141_500_375.jpg",
        "Break",
        "2003",
        1
    ), (
        "Piranha Pipes",
        245167,
        "https://images1.fanpop.com/images/image_uploads/Double-Dash-Karts-mario-kart-852162_252_221.jpg",
        "Sedan",
        "2003",
        1
    ), (
        "Goo Goo Mobile",
        58132,
        "https://images1.fanpop.com/images/image_uploads/Double-Dash-Karts-mario-kart-852148_500_442.jpg",
        "Sedan",
        "2003",
        1
    ), (
        "Heart Coach",
        77899,
        "https://images1.fanpop.com/images/image_uploads/Double-Dash-Karts-mario-kart-852143_500_439.jpg",
        "Pick-up",
        "2003",
        1
    ), (
        "King Bowser",
        128562,
        "https://images1.fanpop.com/images/image_uploads/Double-Dash-Karts-mario-kart-852151_500_375.jpg",
        "Van",
        "2003",
        1
    ), (
        "Turbo Yoshi",
        25450,
        "https://images1.fanpop.com/images/image_uploads/Double-Dash-Karts-mario-kart-852146_500_375.jpg",
        "SUV",
        "2003",
        1
    ), (
        "Wario Mobile",
        84560,
        "https://images1.fanpop.com/images/image_uploads/Double-Dash-Karts-mario-kart-852160_500_375.jpg",
        "SUV",
        "2003",
        1
    ), (
        "Koopa Dasheur",
        8597,
        "https://images1.fanpop.com/images/image_uploads/Double-Dash-Karts-mario-kart-852152_500_375.jpg",
        "Limousine",
        "2003",
        1
    ), (
        "Bloom Coach",
        22611,
        "https://images1.fanpop.com/images/image_uploads/Double-Dash-Karts-mario-kart-852145_280_244.jpg",
        "Sedan",
        "2003",
        1
    ), (
        "Bill Boum",
        228002,
        "https://images1.fanpop.com/images/image_uploads/Double-Dash-Karts-mario-kart-852159_241_234.jpg",
        "Truck",
        "2003",
        1
    );

DROP TABLE IF EXISTS users;

CREATE Table
    users (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        email VARCHAR(500) NOT NULL,
        password varchar(500) NOT NULL,
        lastname VARCHAR (500) NOT NULL,
        firstname VARCHAR(500) NOT NULL,
        user_type INT
    ) ENGINE = InnoDB DEFAULT CHARSET = latin1;

INSERT INTO
    users (
        firstname,
        lastname,
        password,
        email,
        user_type
    )
VALUES (
        "Alexandre",
        "Rouxel",
        "Azerty123",
        "alexandrerouxel@mail.com",
        1
    ), (
        "Amina",
        "Hakimi",
        "Azerty123",
        "aminahakimi@mail.com",
        0
    ), (
        "Charlie",
        "Piancatelli",
        "Azerty123",
        "charliepiancatelli@mail.com",
        2
    );

DROP TABLE IF EXISTS booking;

CREATE TABLE booking (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  id_users INT,
  id_vehicle INT,
  departure_date DATE,
  arrival_date DATE,
  Foreign Key (id_users) REFERENCES users(id),
  Foreign Key (id_vehicle) REFERENCES vehicle(id)
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO booking (
  id_users,
  id_vehicle,
  departure_date,
  arrival_date
)
VALUES (
  1,
  1,
  "2023-01-01",
  "2023-01-10"
);