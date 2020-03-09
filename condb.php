<?php

$host = 'localhost';
$username = 'root';
$password = '';
$db_name = 'database_message';

$conn = mysqli_connect($host,$username,$password,$db_name) or die("cannot connect");
mysqli_select_db($conn,"$db_name") or die("cannot select");

?>