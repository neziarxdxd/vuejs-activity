<?php
$username = $_POST['username'];
$message = $_POST['message'];
$date = date('Y-m-d H:i:s');
include("condb.php");
echo $username;
echo $message;
echo $date;

$sql = "INSERT INTO tbl tbl_messages VALUES ('$username', '$message', '$date')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>