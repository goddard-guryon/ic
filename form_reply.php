<?php
if(!isset($_POST['submit']))
{
    //cannot access this page directly
    echo "You cannot access this page!";
}
$name = $_POST['name'];
$email = $_POST['email'];
$message = "Dear $name, \n\n Thank you for registering for the International Conference on Frontiers in Biochemistry and Biotechnology: Strategies to Combat Human Diseases to be held on February 12-12, 2020! We will send you another email upon confirmation of your registration payment. \n\n If you have any queries regarding the conference or participation, please contact us at biointernational2020@gmail.com or via the mobile numbers provided on the website.\n\nBest Regards,\nConference Executive Team";

if(empty($name)||empty($email))
{
    echo "Name and email are mandatory!";
    exit;
}
$from = "biointernational2020@gmail.com";
$subject = "Registration Confirmation";
$header = "From: $from \r\n";
mail($email, $subject, $message, $header);
?>