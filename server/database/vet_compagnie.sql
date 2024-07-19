CREATE DATABASE vet_compagnie;
USE vet_compagnie;

create table veterinary_clinic (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    address VARCHAR(150),
    siret INT NOT NULL
);

CREATE TABLE animal (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(50) NOT NULL,
    specie VARCHAR(50) NOT NULL,
    race VARCHAR(50) NOT NULL,
    age INT NOT NULL,
    vaccine BOOL NOT NULL,
    stérilized BOOL NOT NULL,
    reason_for_hospitalisation VARCHAR(200) NOT NULL,
    date_of_hospitalization_entry INT NOT NULL,
    date_of_hospitalization_exit INT NOT NULL,
    id_veterinary_clinic INT NOT NULL,
    FOREIGN KEY (id_veterinary_clinic) REFERENCES veterinary_clinic (id),
    id_animal_owner INT NOT NULL,
    FOREIGN KEY (id_animal_owner) REFERENCES animal_owner (id)
);

CREATE TABLE animal_owner (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(150),
    telephone_number INT NOT NULL
);
