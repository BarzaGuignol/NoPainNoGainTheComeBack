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
        "Volvo V60",
        114560,
        "https://cdn-s-www.ledauphine.com/images/7E78C5B1-52BB-49C6-AFC0-630BF74ACD39/NW_raw/le-nouveau-volvo-v60-propose-cinq-niveaux-de-finition-distinctifs-v60-momentum-inscription-inscription-luxe-et-r-design-sans-compter-la-gamme-business-chacun-d-eux-evolue-selon-quatre-definitions-ou-positionnements-expressivite-elegance-discretion-ou-sportivite-premier-signe-distinctif-les-jantes-dont-la-taille-evolue-de-16-a-20-pouces-sp-1541401369.jpg",
        "Break",
        "2018",
        1
    ), (
        "Peugeot 607",
        245167,
        "https://images.caradisiac.com/logos-ref/gamme/gamme--peugeot-607/S7-gamme--peugeot-607.jpg",
        "Sedan",
        "2009",
        1
    ), (
        "Kia Stinger",
        58132,
        "https://www.largus.fr/images/images/kia-stinger-2.jpg",
        "Sedan",
        "2021",
        1
    ), (
        "Ford Raptor",
        77899,
        "https://static.wixstatic.com/media/eb0c13_93c96fb125fd470fb6ff4db16262554a~mv2.jpg/v1/fill/w_640,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/eb0c13_93c96fb125fd470fb6ff4db16262554a~mv2.jpg",
        "Pick-up",
        "2018",
        1
    ), (
        "Renault Master",
        128562,
        "https://www.renaultgroup.com/wp-content/uploads/2014/04/master-1.jpg",
        "Van",
        "2014",
        1
    ), (
        "Peugeot 3008",
        25450,
        "https://www.largus.fr/images/images/peugeot-3008-2020-gt-rouge-vue-av_2.jpg",
        "SUV",
        "2020",
        1
    ), (
        "Volkswagen Touareg",
        84560,
        "https://carsguide-res.cloudinary.com/image/upload/f_auto%2Cfl_lossy%2Cq_auto%2Ct_default/v1/editorial/2019-Volkswagen-Touareg-SUV-blue-press-image-1001x565p.jpg",
        "SUV",
        "2019",
        1
    ), (
        "Mercedes Classe-S",
        8597,
        "https://cdn.motor1.com/images/mgl/ALNy6/s1/4x3/essai-mercedes-classe-s-restylee-2017.webp",
        "Limousine",
        "2017",
        1
    ), (
        "Peugeot 508",
        22611,
        "https://www.lys-automobiles.com/img/vehicules/1/238/starterre-peugeot-508-3813af0b0674c19543ab2480048ad163.jpg",
        "Sedan",
        "2022",
        1
    ), (
        "MAN TGX",
        228002,
        "https://www.truck1.fr/img/Tracteur_routier_MAN_TGX_440_Lowdeck-xxl-1761/1761_2298382828748.jpg",
        "Truck",
        "2012",
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
        0
    );

CREATE TABLE
    booking (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        id_users INT,
        id_vehicle INT,
        departure_date DATE,
        arrival_date DATE,
        Foreign Key (id_users) REFERENCES users(id),
        Foreign Key (id_vehicle) REFERENCES vehicle(id)
    ) ENGINE = InnoDB DEFAULT CHARSET = latin1;

INSERT INTO
    booking (
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

--     4,

--     "cguichard",

--     "Christopher",

--     "Guichard",

--     "$argon2id$v=19$m=65536,t=5,p=1$BCdEiXsQ67+VfP/x/RxEFQ$+Rov1GY2hUrZvULi9NfH1sfah5uz1dKXs4mhXcL33tA",

--     "christopherguichard44@gmail.com",

--     "user"

-- ), (

--     5,

--     "emartinez",

--     "Emmanuel",

--     "Martinez",

--     "$argon2id$v=19$m=65536,t=5,p=1$BCdEiXsQ67+VfP/x/RxEFQ$+Rov1GY2hUrZvULi9NfH1sfah5uz1dKXs4mhXcL33tA",

--     "emmanuelmartinez@mail.com",

--     "user"

-- ), (

--     6,

--     "glemoine",

--     "Gaëtan",

--     "Lemoine",

--     "$argon2id$v=19$m=65536,t=5,p=1$BCdEiXsQ67+VfP/x/RxEFQ$+Rov1GY2hUrZvULi9NfH1sfah5uz1dKXs4mhXcL33tA",

--     "gaetanlemoine@mail.com",

--     "user"

-- ), (

--     7,

--     "gwernert",

--     "Guillaume",

--     "Wernert",

--     "$argon2id$v=19$m=65536,t=5,p=1$BCdEiXsQ67+VfP/x/RxEFQ$+Rov1GY2hUrZvULi9NfH1sfah5uz1dKXs4mhXcL33tA",

--     "guillaumewernert@mail.com",

--     "administrator"

-- ), (

--     8,

--     "jvaxelaire",

--     "Jordan",

--     "Vaxelaire",

--     "$argon2id$v=19$m=65536,t=5,p=1$BCdEiXsQ67+VfP/x/RxEFQ$+Rov1GY2hUrZvULi9NfH1sfah5uz1dKXs4mhXcL33tA",

--     "jordanvaxelaire@mail.com",

--     "user"

-- ), (

--     9,

--     "kaouadia",

--     "Karim",

--     "Aoudia",

--     "$argon2id$v=19$m=65536,t=5,p=1$BCdEiXsQ67+VfP/x/RxEFQ$+Rov1GY2hUrZvULi9NfH1sfah5uz1dKXs4mhXcL33tA",

--     "karimaoudia@mail.com",

--     "user"

-- ), (

--     10,

--     "stormo",

--     "Sylvain",

--     "Tormo",

--     "$argon2id$v=19$m=65536,t=5,p=1$BCdEiXsQ67+VfP/x/RxEFQ$+Rov1GY2hUrZvULi9NfH1sfah5uz1dKXs4mhXcL33tA",

--     "sylvain.tormo11@gmail.com",

--     "user"

-- ), (

--     11,

--     "spetaccia",

--     "Sébastien",

--     "Petaccia",

--     "$argon2id$v=19$m=65536,t=5,p=1$BCdEiXsQ67+VfP/x/RxEFQ$+Rov1GY2hUrZvULi9NfH1sfah5uz1dKXs4mhXcL33tA",

--     "sebastienpetaccia@mail.com",

--     "user"

-- ), (

--     12,

--     "tralambotsiro",

--     "Tsiry",

--     "Ralambotsirofo",

--     "$argon2id$v=19$m=65536,t=5,p=1$BCdEiXsQ67+VfP/x/RxEFQ$+Rov1GY2hUrZvULi9NfH1sfah5uz1dKXs4mhXcL33tA",

--     "tsiryralambotsirofo@mail.com",

--     "user"

-- ), (

--     13,

--     "vpapadopoulos",

--     "Vassili",

--     "Papadopoulos",

--     "$argon2id$v=19$m=65536,t=5,p=1$BCdEiXsQ67+VfP/x/RxEFQ$+Rov1GY2hUrZvULi9NfH1sfah5uz1dKXs4mhXcL33tA",

--     "vassilipapadopoulos@mail.com",

--     "user"

-- ), (

--     14,

--     "yviot",

--     "Yanis",

--     "Viot",

--     "$argon2id$v=19$m=65536,t=5,p=1$BCdEiXsQ67+VfP/x/RxEFQ$+Rov1GY2hUrZvULi9NfH1sfah5uz1dKXs4mhXcL33tA",

--     "yayav.yaya@gmail.com",

--     "administrator"

-- ), (

--     15,

--     "jmarkarian",

--     "Joy",

--     "Markarian",

--     "$argon2id$v=19$m=65536,t=5,p=1$BCdEiXsQ67+VfP/x/RxEFQ$+Rov1GY2hUrZvULi9NfH1sfah5uz1dKXs4mhXcL33tA",

--     "jmarkarian@hotmail.fr",

--     "administrator"

-- ), (

--     16,

--     "jrichard",

--     "Julien",

--     "Richard",

--     "$argon2id$v=19$m=65536,t=5,p=1$BCdEiXsQ67+VfP/x/RxEFQ$+Rov1GY2hUrZvULi9NfH1sfah5uz1dKXs4mhXcL33tA",

--     "julienrichard@mail.com",

--     "user"

-- ), (

--     17,

--     "klavigne",

--     "Kevin",

--     "Lavigne",

--     "$argon2id$v=19$m=65536,t=5,p=1$BCdEiXsQ67+VfP/x/RxEFQ$+Rov1GY2hUrZvULi9NfH1sfah5uz1dKXs4mhXcL33tA",

--     "kevinlavigne@mail.com",

--     "user"

-- ), (

--     18,

--     "agorski",

--     "Anthony",

--     "Gorski",

--     "$argon2id$v=19$m=65536,t=5,p=1$BCdEiXsQ67+VfP/x/RxEFQ$+Rov1GY2hUrZvULi9NfH1sfah5uz1dKXs4mhXcL33tA",

--     "anthonygorski@mail.com",

--     "administrator"

-- ), (

--     19,

--     "jfmorin",

--     "Jean-François",

--     "Morin",

--     "$argon2id$v=19$m=65536,t=5,p=1$BCdEiXsQ67+VfP/x/RxEFQ$+Rov1GY2hUrZvULi9NfH1sfah5uz1dKXs4mhXcL33tA",

--     "jeanfrançoismorin@gmail.com",

--     "user"

-- ), (

--     20,

--     "bvandanjon",

--     "Benoît",

--     "Vandanjon",

--     "$argon2id$v=19$m=65536,t=5,p=1$BCdEiXsQ67+VfP/x/RxEFQ$+Rov1GY2hUrZvULi9NfH1sfah5uz1dKXs4mhXcL33tA",

--     "benoitvandanjon@mail.com",

--     "user"

-- ), (

--     21,

--     "pdegee",

--     "Pierre",

--     "Degée",

--     "$argon2id$v=19$m=65536,t=5,p=1$BCdEiXsQ67+VfP/x/RxEFQ$+Rov1GY2hUrZvULi9NfH1sfah5uz1dKXs4mhXcL33tA",

--     "pierredegée@mail.com",

--     "user"

-- ), (

--     22,

--     "rboe",

--     "Rachel",

--     "Boé",

--     "$argon2id$v=19$m=65536,t=5,p=1$BCdEiXsQ67+VfP/x/RxEFQ$+Rov1GY2hUrZvULi9NfH1sfah5uz1dKXs4mhXcL33tA",

--     "rachelboé@mail.com",

--     "user"

-- ), (

--     23,

--     "alenne",

--     "Adrien",

--     "Lenne",

--     "$argon2id$v=19$m=65536,t=5,p=1$BCdEiXsQ67+VfP/x/RxEFQ$+Rov1GY2hUrZvULi9NfH1sfah5uz1dKXs4mhXcL33tA",

--     "adrienlenne@mail.com",

--     "user"

-- ), (

--     24,

--     "iboyer",

--     "Iris",

--     "Boyer",

--     "$argon2id$v=19$m=65536,t=5,p=1$BCdEiXsQ67+VfP/x/RxEFQ$+Rov1GY2hUrZvULi9NfH1sfah5uz1dKXs4mhXcL33tA",

--     "irisboyer@mail.com",

--     "user"

-- ), (

--     25,

--     "edurand",

--     "Elia",

--     "Durand",

--     "$argon2id$v=19$m=65536,t=5,p=1$BCdEiXsQ67+VfP/x/RxEFQ$+Rov1GY2hUrZvULi9NfH1sfah5uz1dKXs4mhXcL33tA",

--     "eliadurand@mail.com",

--     "user"

-- ), (

--     26,

--     "mfontaine",

--     "Maxence",

--     "Fontaine",

--     "$argon2id$v=19$m=65536,t=5,p=1$BCdEiXsQ67+VfP/x/RxEFQ$+Rov1GY2hUrZvULi9NfH1sfah5uz1dKXs4mhXcL33tA",

--     "maxencefontaine@mail.com",

--     "user"

-- ), (

--     27,

--     "olefebvre",

--     "Océane",

--     "Lefebvre",

--     "$argon2id$v=19$m=65536,t=5,p=1$BCdEiXsQ67+VfP/x/RxEFQ$+Rov1GY2hUrZvULi9NfH1sfah5uz1dKXs4mhXcL33tA",

--     "océanelefebvre@mail.com",

--     "user"

-- ), (

--     28,

--     "abrebion",

--     "Antonin",

--     "Brebion",

--     "$argon2id$v=19$m=65536,t=5,p=1$BCdEiXsQ67+VfP/x/RxEFQ$+Rov1GY2hUrZvULi9NfH1sfah5uz1dKXs4mhXcL33tA",

--     "antoninbrebion@mail.com",

--     "user"

-- ), (

--     29,

--     "mbrunet",

--     "Marcel",

--     "Brunet",

--     "$argon2id$v=19$m=65536,t=5,p=1$BCdEiXsQ67+VfP/x/RxEFQ$+Rov1GY2hUrZvULi9NfH1sfah5uz1dKXs4mhXcL33tA",

--     "marcelbrunet@gmail.com",

--     "user"

-- ), (

--     30,

--     "jmercier",

--     "Jean",

--     "Mercier",

--     "$argon2id$v=19$m=65536,t=5,p=1$BCdEiXsQ67+VfP/x/RxEFQ$+Rov1GY2hUrZvULi9NfH1sfah5uz1dKXs4mhXcL33tA",

--     "jeanmercier@hotmail.fr",

--     "user"

-- );