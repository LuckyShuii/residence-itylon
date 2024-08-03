-- Création de la base de données
CREATE TABLE IF NOT EXISTS contact_form (
    id INTEGER PRIMARY KEY,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(50),
    message TEXT
);

CREATE TABLE IF NOT EXISTS residence (
    id INTEGER PRIMARY KEY,
    headerTitle VARCHAR(255),
    title VARCHAR(255),
    description TEXT,
    pictures TEXT,
    postalAddress TEXT,
    email VARCHAR(255),
    phone VARCHAR(50),
    socials TEXT
);

CREATE TABLE IF NOT EXISTS period (
    id INTEGER PRIMARY KEY,
    name VARCHAR(255),
    startDate DATE,
    endDate DATE
);

CREATE TABLE IF NOT EXISTS activity (
    id INTEGER PRIMARY KEY,
    headerTitle VARCHAR(255),
    headerDescription VARCHAR(255),
    title VARCHAR(255),
    description VARCHAR(255),
    externalLink TEXT,
    pictures TEXT
);

CREATE TABLE IF NOT EXISTS house (
    id INTEGER PRIMARY KEY,
    title VARCHAR(255),
    descriptionTitle VARCHAR(255),
    previewPicture TEXT,
    pictures TEXT,
    capacity STRING,
    wifi BOOLEAN,
    barbecue BOOLEAN,
    ac BOOLEAN,
    parking BOOLEAN,
    terrace BOOLEAN,
    bed STRING,
    kitchen BOOLEAN,
    bathroom INTEGER,
    room INTEGER
);

CREATE TABLE IF NOT EXISTS price (
    id INTEGER PRIMARY KEY,
    lowSeason INTEGER,
    mediumSeason INTEGER,
    highSeason INTEGER,
    veryHighSeason INTEGER,
    cleaningFee INTEGER,
    houseId INTEGER,
    FOREIGN KEY (houseId) REFERENCES house(id)
);

-- Insertion de données de test dans la table contactForm
INSERT INTO contact_form (firstName, lastName, email, phone, message) VALUES
('Alice', 'Smith', 'alice.smith@example.com', '123456789', 'Test message 2'),
('Bob', 'Johnson', 'bob.johnson@example.com', '987654321', 'Test message 3'),
('Eva', 'Garcia', 'eva.garcia@example.com', '555555555', 'Test message 4');

INSERT INTO price (id, lowSeason, mediumSeason, highSeason, veryHighSeason, cleaningFee, houseId) VALUES
(1, 500, 610, 1000, 1050, 40, 1), -- romarin
(2, 500, 610, 1000, 1050, 40, 2), -- eucaliptus
(3, 500, 610, 1000, 1050, 40, 3), -- laurier
(4, 500, 610, 1000, 1050, 40, 4), -- olivier
(5, 500, 610, 1000, 1050, 40, 5), -- rosier
(6, 500, 610, 1000, 1050, 40, 6), -- ciste
(7, 500, 610, 1000, 1050, 40, 7), -- myrte
(8, 500, 610, 1000, 1050, 40, 8), -- lentisque
(9, 600, 710, 1100, 1150, 50, 9), -- kiwi
(10, 600, 710, 1100, 1150, 50, 10), -- cerisier
(11, 650, 760, 1150, 1200, 50, 11), -- arbousier
(12, 700, 900, 1250, 1350, 50, 12), -- datura
(13, 750, 950, 1350, 1400, 60, 13), -- asphodele
(14, 900, 1300, 1500, 1600, 60, 14), -- amandier
(15, 950, 1400, 1600, 1700, 60, 15), -- figuier
(16, 450, 550, 850, 950, 30, 16); -- citronnier

INSERT INTO residence (id, headerTitle, title, description, postalAddress, email, phone, socials) VALUES
(1, 'Residence Itylon', "Séjourner à Itylon, c'est être un peu chez soi en vacances", "Ici, rien de tape à l'oeil et de clinquant, nichées au milieu des fleurs et du maquis, sur un terrain arboré qui jouxte la superbe crique de Menasina, à l'entrée de Cargèse. Jean et Isadora, sa fille, jouent la carte de la décontraction : disponible et serein, ils ont su installer à Itylon une ambiance familiale et bon enfant. On se prend à fureter dans les recoins du jardin avant de prendre le petit chemin qui conduit à la plage. Un luxe simple, mais d'autant plus précieux.", 'Residence Itylon 20130 Cargèse', 'residence.itylon@gmail.com', '06.07.73.12.25', 'https://www.facebook.com/residenceitylon, https://www.instagram.com/residence_itylon/');

INSERT INTO house (id, title, descriptionTitle, previewPicture, pictures, capacity, wifi, barbecue, ac, parking, terrace, bed, kitchen, bathroom, room) VALUES
(1, "romarin", "Le Romarin est une maison de type 1, peut accueillir de 2 à 4 personnes.", "", "", "2 a 4", 1, 1, 1, 1, 1, "1 + canapé-lit", 1, 1, 1),
(2, "eucaliptus", "L'Eucalyptus est une maison de type 1, elle est idéale pour 2 à 4 personnes.", "", "", "2 a 4", 1, 1, 1, 1, 1, "1 + canapé-lit", 1, 1, 1),
(3, "laurier", "Le Laurier, une maison de type 1, accueille 2 à 4 personnes.", "", "", "2 a 4", 1, 1, 1, 1, 1, "1 + canapé-lit", 1, 1, 1),
(4, "olivier", "L'Olivier, une maison de type 1, est parfaite pour 2 à 4 personnes.", "", "", "2 a 4", 1, 1, 1, 1, 1, "1 + canapé-lit", 1, 1, 1),
(5, "rosier", "Le Rosier, une maison de type 1, accueille confortablement 2 à 4 personnes.", "", "", "2 a 4", 1, 1, 1, 1, 1, "1 + canapé-lit", 1, 1, 1),
(6, "ciste", "Le Ciste est une maison de type 1, peut accueillir de 2 à 4 personnes.", "", "", "2 a 4", 1, 1, 1, 1, 1, "1 + canapé-lit", 1, 1, 1),
(7, "myrte", "Le Myrte est une maison de type 1, peut accueillir de 2 à 4 personnes.", "", "", "2 a 4", 1, 1, 1, 1, 1, "1 + canapé-lit", 1, 1, 1),
(8, "lentisque", "Le Lentisque est une maison de type 1 a deux pas de la piscine, peut accueillir de 2 à 4 personnes.", "", "", "2 a 4", 1, 1, 1, 1, 1, "1 + canapé-lit", 1, 1, 1),
(9, "kiwi", "Le Kiwi est une charmante maison composée de 2 chambres, pouvant accueillir jusqu'à 4 personnes.", "", "", "4", 1, 1, 1, 1, 1, "3", 1, 1, 2),
(10, "cerisier", "Le Cerisier est une charmante maison composée de 2 chambres, pouvant accueillir jusqu'à 4 personnes.", "", "", "4", 1, 1, 1, 1, 1, "3", 1, 1, 2),
(11, "arbousier", "L'Arbousier est une maison pouvant accueillir entre 4 à 6 personnes.", "", "", "4 a 6", 1, 1, 1, 1, 1, "2 + canapé-lit", 1, 1, 2),
(12, "datura", "Cette maison spacieuse peut accueillir 5 personnes.", "", "", "5", 1, 1, 1, 1, 1, "3", 1, 1, 2),
(13, "asphodele", "L'Asphodèle est une maison confortable composée de 3 chambres.", "", "", "6", 1, 1, 1, 1, 1, "4", 1, 1, 3),
(14, "amandier", "L’Amandier est une maison confortable composée de 3 chambres.", "", "", "6", 1, 1, 1, 1, 1, "3", 1, 2, 3),
(15, "figuier", "Cette grande maison est composée de 3 chambres.", "", "", "8", 1, 1, 1, 1, 1, "5", 1, 2, 3),
(16, "citronnier", "Il s’agit de notre plus petite maison. Parfaite pour un couple.", "", "", "2", 1, 1, 1, 1, 1, "1", 1, 1, 1);

INSERT INTO period (id, name, startDate, endDate) VALUES
(1, "lowSeason", "2024-04-01", "2024-05-31"),
(2, "mediumSeason", "2024-06-01", "2024-06-30"),
(3, "highSeason", "2024-07-01", "2024-07-26"),
(4, "veryHighSeason", "2024-07-27", "2024-08-24"),
(5, "mediumSeason", "2024-08-25", "2024-09-30"),
(6, "lowSeason", "2024-10-01", "2024-10-31");

INSERT INTO activity (id, headerTitle, headerDescription, title, description, externalLink, pictures) VALUES
(1, "La plage de Menasina", "À seulement quelques minutes à pied de votre maison, la plage de Menasina s’étend sur environ 200 mètres. Elle nous offre une magnifique vue jusqu’à la marine de Cargèse", "La plage de Menasina", "Moins fréquentée que d'autres plages de la région, elle offre une tranquillité et une atmosphère paisible. L'endroit idéal pour se détendre, se baigner et profiter du soleil tout en admirant la vue imprenable sur la mer Méditerranée et les montagnes environnantes", "https://maps.app.goo.gl/tvUu4vUJAspCvBPs5", ""),
(2, "Promenades en mer", "Avec U Filanciu : Un moment insolite entre mer et montagnes pour découvrir la réserve de Scandola et les calanques de Piana lors d’une balade en bateau.", "Promenades en mer", "Les Calanques de Piana, le Capo Rosso, la réserve naturelle de Scandola et le célèbre village de Girolata seront au programme de cette balade inoubliable, accompagnée de récits et d’anecdotes, en compagnie de notre équipe entièrement dévouée, pour vous guider et vous faire découvrir ces lieux uniques au monde…", "https://www.ufilanciu.fr/", ""),
(3, "Les randonnées", "En famille ou pour les marcheurs confirmés, en montagne ou sur la côte, il y en a pour tous les goûts.", "Les randonnées", "Explorez les trésors naturels de la Corse-du-Sud avec nos randonnées autour de Piana. De la majestueuse Tour de Turghiu au sommet du Capu d'Orto, découvrez des vues à couper le souffle, des sentiers pittoresques et des aventures inoubliables au cœur de la beauté sauvage de la Corse. Préparez-vous à vous immerger dans des paysages spectaculaires et à créer des souvenirs durables sur ces sentiers de randonnée exceptionnels", "https://www.visorando.com/randonnee-cargese.html", ""),
(4, "Balade à cheval", "Le Ranch de Cargese vous invite à découvrir les richesses naturelles et historiques de la région. Au départ de la magnifique plage de Chiuni, les balades sont de véritables invitations à l’émerveillement.", "Balade à cheval", "Le temps de la période estivale, le Centre de Cargèse vous invite à découvrir les richesses naturelles et historiques de la région. Au départ de la magnifique plage de Chiuni, nos balades sont de véritables invitations à l’émerveillement.", "https://www.ranchcorse.com/les-balades-de-cargese/", "");


-- DROP TABLE IF EXISTS contact_form;
-- DROP TABLE IF EXISTS residence;
-- DROP TABLE IF EXISTS period;
-- DROP TABLE IF EXISTS activity;
-- DROP TABLE IF EXISTS house;
-- DROP TABLE IF EXISTS price;

UPDATE house
SET previewPicture = UPPER(SUBSTR(title, 1, 1)) || SUBSTR(title, 2);

UPDATE activity SET pictures = "src/assets/photos/activities/cheval.jpg," WHERE id = 4;
UPDATE activity SET pictures = "src/assets/photos/activities/rando.jpg," WHERE id = 3;
UPDATE activity SET pictures = "src/assets/photos/activities/bateau.webp," WHERE id = 2;
UPDATE activity SET pictures = "src/assets/photos/activities/plage.jpg,src/assets/photos/activities/rando/rando-1.jpg,src/assets/photos/activities/rando/rando-2.jpg,src/assets/photos/activities/rando/rando-3.jpg,src/assets/photos/activities/rando/rando-4.webp," WHERE id = 3;