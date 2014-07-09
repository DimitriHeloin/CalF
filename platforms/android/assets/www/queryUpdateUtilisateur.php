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



$requete= "UPDATE  Utilisateur set nom_utilisateur='".$nom."',prenom_utilisateur='".$prenom."',date_naissance='".$date_naissance."',email='".$email."' WHERE regid='".$regid."' ;";

echo ($requete);
  mysqli_query($con,$requete);
?>