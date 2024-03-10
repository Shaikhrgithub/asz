<?php
//get data from form  

$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$phone = $_POST['phone'];
$email= $_POST['email'];
$message= $_POST['message'];
$to = "yusufshaikh4548@mail.com";
$subject = "Mail From ALNusrat";
$txt ="firstName = ". $firstname . "\r\n  LastName = ". $lastname  .  "\r\n  Mobile Number = " . $phone . "\r\n  Email = " . $email . "\r\n Message =" . $message;
$headers = "From: noreply@ALNusrat.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>