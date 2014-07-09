<?php 

$con = mysqli_connect('florianlnail.mysql.db','florianlnail','bxGUrkTAvqBA','florianlnail');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"florianlnail");

/*connexion faite, maintenant on execute la requete passée en paramètre*/

  $titre = $_POST["titre"];
  $datedebut = $_POST["datedebut"];
  $datefin = $_POST["datefin"];
  $description = $_POST["description"];
  $priorite = $_POST["priorite"];
  $delai = $_POST["delai"];
  $categorie = $_POST["categorie"];
  $utilisateur = $_POST["utilisateur"];
  $saviez = $_POST["saviez"];
  $periodicite = $_POST["periodicite"];




$requete= "INSERT INTO alertes (titre_alerte,date_debut_alerte,date_fin_alerte,description_alerte,prorite_alerte,delai_alerte,id_categorie,id_utilisateur,id_saviez,id_periodicite)
 VALUES ('".$titre."','".$datedebut."','".$datefin."','".$description." ','".$priorite."',".$delai.",".$categorie.",".$utilisateur.",".$saviez.",".$periodicite.");";

echo ($requete);
  mysqli_query($con,$requete);
?>