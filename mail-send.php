<?php $name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "aayush.srivastav925@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");
mail($recipient, $subject, $formcontent, $mailheader) or die("Did not send!");
echo "Thank You!";
?>
