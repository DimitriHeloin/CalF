<?php

$con = mysqli_connect('florianlnail.mysql.db','florianlnail','bxGUrkTAvqBA','florianlnail');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"florianlnail");
$sql="SELECT * FROM Evenement";
$result = mysqli_query($con,$sql);


while($row = mysqli_fetch_array($result)) {
  echo $row['id_event'];
  echo "/";
 
}

mysqli_close($con);
?>