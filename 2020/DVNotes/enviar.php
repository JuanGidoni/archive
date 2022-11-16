<?php
if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['text'];

$to = "juan.gidoni@gmail.com";
$subject = "Nueva Consulta App DVNotes";
$txt = "Recibiste una nueva consulta de ".$name." sobre la App DV Notes.<br>Su email de contacto es ".$email." y te dejo el siguiente mensaje:<br>".$message;
$headers = "From:".$email . "\r\n" .
"CC: juan.gidoni@davinci.edu.ar";

mail($to,$subject,$txt,$headers);
}