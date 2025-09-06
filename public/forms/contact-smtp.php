<?php
// Contact form for GoDaddy hosting with SMTP relay (alternative version)
require_once 'PHPMailer/PHPMailer.php';
require_once 'PHPMailer/SMTP.php';
require_once 'PHPMailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$receiving_email_address = 'info@emmessenterprises.in';

if ($_POST) {
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $subject = $_POST['subject'] ?? '';
    $message = $_POST['message'] ?? '';
    
    // Basic validation
    if (empty($name) || empty($email) || empty($message)) {
        echo json_encode(['status' => 'error', 'message' => 'Please fill in all required fields.']);
        exit;
    }
    
    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['status' => 'error', 'message' => 'Please enter a valid email address.']);
        exit;
    }
    
    $mail = new PHPMailer(true);
    
    try {
        // GoDaddy SMTP relay settings
        $mail->isSMTP();
        $mail->Host = 'localhost';
        $mail->SMTPAuth = false;
        $mail->Port = 25;
        $mail->SMTPSecure = false;
        
        // Recipients
        $mail->setFrom('noreply@emmessenterprises.in', 'EMMESS Enterprises');
        $mail->addAddress($receiving_email_address);
        $mail->addReplyTo($email, $name);
        
        // Content
        $mail->isHTML(false);
        $mail->Subject = $subject ? "[Contact] $subject" : "[Contact] New message from $name";
        $mail->Body = "Name: $name\n";
        $mail->Body .= "Email: $email\n";
        $mail->Body .= "Subject: $subject\n\n";
        $mail->Body .= "Message:\n$message";
        
        $mail->send();
        echo json_encode(['status' => 'success', 'message' => 'Your message has been sent successfully!']);
        
    } catch (Exception $e) {
        echo json_encode(['status' => 'error', 'message' => 'Sorry, there was an error sending your message. Please try again later.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method.']);
}
?>
