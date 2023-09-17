<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "smaouiyassinhbs@gmail.com"; // Remplacez par votre adresse Gmail
    $subject = "Formulaire de contact";
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);
}
?>
