<?php 

$con = mysqli_connect('florianlnail.mysql.db','florianlnail','bxGUrkTAvqBA','florianlnail');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"florianlnail");

/*connexion faite, maintenant on execute la requete passée en paramètre*/

  $nom = $_POST["nom"];
  $prenom = $_POST["prenom"];
  $regid = $_POST["regid"];
  $date_naissance = $_POST["date_naissance"];
  $email = $_POST["email"];



$requete= "INSERT INTO Utilisateur (nom_utilisateur,prenom_utilisateur,regid,date_naissance,email) 
  VALUES ('".$nom."','".$prenom."','".$regid."','".$date_naissance." ','".$email."');";

echo ($requete);
  mysqli_query($con,$requete);
?>