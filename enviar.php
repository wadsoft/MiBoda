<?php
$name = $_POST['nombre'];
//$mail = $_POST['mail'];
//$phone = $_POST['phone'];
$message = $_POST['mensaje'];

$header = 'De: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Este mensaje fue enviado por: " . $name . " confirmando asistencia a la boda. \r\n";
//$message .= "Su e-mail es: " . $mail . " \r\n";
//$message .= "Teléfono de contacto: " . $phone . " \r\n";
$message .= " \r\n";
$message .= "Mensaje: " . $_POST['mensaje'] . " \r\n";
$message .= " \r\n";

$message .= "Enviado el: " . date('d/m/Y', time());

$para = 'k.burgos.l@hotmail.com,gigotrons21@hotmail.com';
$asunto = 'Confirmación de Asistencia';

mail($para, $asunto, utf8_decode($message), $header);

header("Location:index.html");
?>