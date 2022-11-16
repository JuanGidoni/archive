<?php
// guardamos el recurso de conexión que devuelve la función...
$cnx = mysqli_connect("localhost", "root","","laislamedia") or die("No se pudo conectar");

// codificamos las respuesta que produzca en formato utf8
mysqli_set_charset($cnx, "utf8");
?>