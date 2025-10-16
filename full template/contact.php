<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name    = htmlspecialchars(trim($_POST['name']));
  $email   = htmlspecialchars(trim($_POST['email']));
  $message = htmlspecialchars(trim($_POST['message']));

  $to = "your-email@example.com"; // Replace with your email
  $subject = "New message from portfolio site";
  $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
  $headers = "From: $email";

  if (mail($to, $subject, $body, $headers)) {
    echo "Message sent successfully.";
  } else {
    echo "Something went wrong. Please try again.";
  }
}
?>
