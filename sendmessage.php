<?php
$username = $_POST['username'];
$message = $_POST['message'];
$date = date('Y-m-d H:i:s');
include("condb.php");
echo $username;
echo $message;
echo $date;

?>