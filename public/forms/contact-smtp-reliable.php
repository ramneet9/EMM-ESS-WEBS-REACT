<?php
// Contact form using GoDaddy SMTP relay (more reliable)
require_once 'PHPMailer/PHPMailer.php';
require_once 'PHPMailer/SMTP.php';
require_once 'PHPMailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$receiving_email_address = 'info@emmessenterprises.in';

if ($_POST) {
    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $subject = trim($_POST['subject'] ?? '');
    $message = trim($_POST['message'] ?? '');
    
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
        // GoDaddy SMTP relay settings (more reliable)
        $mail->isSMTP();
        $mail->Host = 'relay-hosting.secureserver.net';
        $mail->SMTPAuth = false;
        $mail->Port = 25;
        $mail->SMTPSecure = false;
        $mail->SMTPAutoTLS = false;
        $mail->SMTPKeepAlive = true;
        
        // Set timeout
        $mail->Timeout = 30;
        $mail->SMTPDebug = 0; // Set to 2 for debugging
        
        // Recipients
        $mail->setFrom('noreply@emmessenterprises.in', 'EMMESS Enterprises');
        $mail->addAddress($receiving_email_address);
        $mail->addReplyTo($email, $name);
        
        // Content
        $mail->isHTML(false);
        $mail->Subject = $subject ? "[Contact] $subject" : "[Contact] New message from $name";
        
        $email_body = "New contact form submission:\n\n";
        $email_body .= "Name: $name\n";
        $email_body .= "Email: $email\n";
        $email_body .= "Subject: $subject\n";
        $email_body .= "Date: " . date('Y-m-d H:i:s') . "\n\n";
        $email_body .= "Message:\n$message\n\n";
        $email_body .= "---\n";
        $email_body .= "Sent from: " . $_SERVER['HTTP_HOST'] . "\n";
        $email_body .= "IP Address: " . ($_SERVER['REMOTE_ADDR'] ?? 'Unknown');
        
        $mail->Body = $email_body;
        
        // Additional headers for better deliverability
        $mail->addCustomHeader('X-Mailer', 'EMMESS Contact Form');
        $mail->addCustomHeader('X-Priority', '3');
        
        $mail->send();
        
        // Log success
        $success_log = date('Y-m-d H:i:s') . " - SMTP Email sent successfully to: $receiving_email_address\n";
        error_log($success_log, 3, 'email_debug.log');
        
        echo json_encode(['status' => 'success', 'message' => 'Your message has been sent successfully!']);
        
    } catch (Exception $e) {
        // Log error
        $error_log = date('Y-m-d H:i:s') . " - SMTP Email failed: " . $e->getMessage() . "\n";
        error_log($error_log, 3, 'email_debug.log');
        
        echo json_encode(['status' => 'error', 'message' => 'Sorry, there was an error sending your message. Please try again later.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method.']);
}
?>
