<?php 


header('Content-Type: application/json');

if (stripos($_SERVER["CONTENT_TYPE"], "application/json") === 0) {
	$_POST = json_decode(file_get_contents("php://input"), true);
}

$regid = $_POST["regid"];

$lol = array('regid'=> $regid);

echo json_encode($lol);

?>