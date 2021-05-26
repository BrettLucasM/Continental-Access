<?php
$mysqli = new mysqli("localh","root", "Uprising:1","login");

// Check connection
if ($mysqli -> connect_errno) {
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
}
php?>