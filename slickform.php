<?php

if(isset($_REQUEST["isvalid"])){
    // Email validation
    $youremail = "bro188411@gmail.com";
    if (!filter_var($youremail, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email configuration.");
    }

    // Input validation and sanitization
    $first = filter_var($_POST['first'], FILTER_SANITIZE_STRING);
    $last = filter_var($_POST['last'], FILTER_SANITIZE_STRING);
    $lol = filter_var($_POST['lol'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $phone = filter_var($_POST['phone'], FILTER_SANITIZE_NUMBER_INT);
    $from = filter_var($_POST['from'], FILTER_SANITIZE_STRING);
    $team = filter_var($_POST['team'], FILTER_SANITIZE_STRING);
    $leader = filter_var($_POST['leader'], FILTER_SANITIZE_STRING);
    $lane = filter_var($_POST['lane'], FILTER_SANITIZE_STRING);

    // Basic input validation
    if (empty($first) || empty($last) || empty($lol) || empty($email) || empty($phone) || empty($from) || empty($team) || empty($leader) || empty($lane)) {
        die("All fields are required.");
    }

    // Subject for the email
    $mailsubject = "New contact from your site";

    // Email message
    $message =
        "$first $last has contacted you from your site.\n
        ...............................................\n
        Inscription :\n
        ...............................................\n
        Contact details:\n
        LOL Name : $lol\n
        Phone Number: $phone\n
        Country : $from\n
        Team Name : $team\n
        Leader Team Name : $leader\n
        Lane : $lane\n
        Email Address: $email";

    $headers = 'From: ' . $email . "\r\n";

    // Sending the email
    if (mail($youremail, $mailsubject, $message, $headers)) {
        echo $message;
    } else {
        echo "An error occurred while sending the email.";
    }
} else {
    echo "Invalid request.";
}
?>
