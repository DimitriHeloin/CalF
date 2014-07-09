 



CREATE TABLE saviez_vous (id_saviez INTEGER PRIMARY KEY, description_saviez TEXT);
INSERT INTO saviez_vous (description_saviez) VALUES ('Saviez vous que ceci est un test?');
INSERT INTO saviez_vous (description_saviez) VALUES ('Et ceci un autre test?');
INSERT INTO saviez_vous (description_saviez) VALUES ('Récupérons la requette!');


CREATE TABLE utilisateur (id_utilisateur INTEGER PRIMARY KEY, nom_utilisateur TEXT, prenom_utilisateur Text, date_naissance Text,email Text, mot_de_passe Text);

INSERT INTO utilisateur (nom_utilisateur,prenom_utilisateur,date_naissance,email,mot_de_passe) VALUES ('Laubier','Florian','1991-05-30','florian.laubier@ingesup.com','ingesup');
INSERT INTO utilisateur (nom_utilisateur,prenom_utilisateur,date_naissance,email,mot_de_passe) VALUES('HeLoin','Quatorze','1990-05-14','dimitri.heloin@y-nov.com','ingesup');






CREATE TABLE categorie (id_categorie INTEGER PRIMARY KEY,nom_categorie TEXT,niveau INTEGER);

INSERT INTO categorie(nom_categorie,niveau) VALUES ('revenus',0);
INSERT INTO categorie(nom_categorie,niveau) VALUES ('depense',0);
INSERT INTO categorie(nom_categorie,niveau) VALUES ('actif',0);
INSERT INTO categorie(nom_categorie,niveau) VALUES ('passif',0);
INSERT INTO categorie(nom_categorie,niveau) VALUES ('immobilier',1);


CREATE TABLE critere (id_critere INTEGER PRIMARY KEY, nom_critere TEXT);
INSERT INTO critere (nom_critere) VALUES('ISF');
INSERT INTO critere (nom_critere) VALUES('handicap');


CREATE TABLE alertes (id_alerte INTEGER PRIMARY KEY,titre_alerte TEXT,date_debut_alerte Text,date_fin_alerte Text,description_alerte Text, prorite_alerte Text,delai_alerte INTEGER,id_categorie INTEGER,id_utilisateur INTEGER,id_saviez INTEGER,id_periodicite INTEGER);

INSERT INTO alertes (titre_alerte,date_debut_alerte,date_fin_alerte,description_alerte,prorite_alerte,delai_alerte,id_categorie,id_utilisateur,id_saviez,id_periodicite) VALUES ('impot','06-12-2014','06-13-2014','payer ','moyenne',14,1,1,0,1);
INSERT INTO alertes (titre_alerte,date_debut_alerte,date_fin_alerte,description_alerte,prorite_alerte,delai_alerte,id_categorie,id_utilisateur,id_saviez,id_periodicite) VALUES ('facture tel','06-16-2014','06-18-2014','sfr  bien','basse',14,1,1,0,1);
INSERT INTO alertes (titre_alerte,date_debut_alerte,date_fin_alerte,description_alerte,prorite_alerte,delai_alerte,id_categorie,id_utilisateur,id_saviez,id_periodicite) VALUES ('argent de poche gosse','06-30-2014','06-31-2014','ça coute cher ces betes la','moyenne',14,1,1,0,1);



CREATE TABLE periodicite (id_periodicite INTEGER PRIMARY KEY,recurrence TEXT,choix_mois INTEGER,choix_jour INTEGER,x_mois INTEGER,x_jour INTEGER,x_semaine INTEGER,choix_jour_semaine INTEGER);
INSERT INTO periodicite (recurrence,choix_mois,choix_jour,x_mois,x_jour,x_semaine,choix_jour_semaine) VALUES ('mensuelle',5,1,0,0,0,0);


CREATE TABLE alertes_temp (id_alerte_temp INTEGER PRIMARY KEY,titre_alerte_temp TEXT,date_debut_alerte_temp Text,date_fin_alerte_temp Text,description_alerte_temp Text, prorite_alerte_temp Text,delai_alerte_temp INTEGER,id_categorie INTEGER,id_utilisateur INTEGER,id_saviez INTEGER,id_periodicite INTEGER);

CREATE TABLE reglages (regid TEXT, nom TEXT, prenom TEXT, date_naissance TEXT, email TEXT, reglage_fait TEXT );
INSERT INTO reglages (regid, nom, prenom, date_naissance,email,reglage_fait) VALUES ('','','','','','non');