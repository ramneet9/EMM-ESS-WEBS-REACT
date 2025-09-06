<?php
// GoDaddy optimized contact form - No backend required
$receiving_email_address = 'sales@emmessenterprises.com';

// Disable error display for production (but keep logging)
error_reporting(E_ALL);
ini_set('display_errors', 0); // Don't show errors to users
ini_set('log_errors', 1); // But log them

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
    
    // Prepare email content
    $email_subject = $subject ? "[Contact] $subject" : "[Contact] New message from $name";
    $email_body = "New contact form submission:\n\n";
    $email_body .= "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Subject: $subject\n";
    $email_body .= "Date: " . date('Y-m-d H:i:s') . "\n\n";
    $email_body .= "Message:\n$message\n\n";
    $email_body .= "---\n";
    $email_body .= "Sent from: " . $_SERVER['HTTP_HOST'] . "\n";
    $email_body .= "IP Address: " . ($_SERVER['REMOTE_ADDR'] ?? 'Unknown');
    
    // GoDaddy optimized headers
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "From: info@emmessenterprises.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Return-Path: info@emmessenterprises.com\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
    $headers .= "X-Priority: 3\r\n";
    
    // Log the attempt
    $log_entry = date('Y-m-d H:i:s') . " - Attempting to send email to: $receiving_email_address from: $email\n";
    error_log($log_entry, 3, 'email_debug.log');
    
    // Try to send email using GoDaddy's mail() function
    $mail_sent = @mail($receiving_email_address, $email_subject, $email_body, $headers);
    
    if ($mail_sent) {
        // Log success
        $success_log = date('Y-m-d H:i:s') . " - Email sent successfully to: $receiving_email_address\n";
        error_log($success_log, 3, 'email_debug.log');
        
        echo json_encode(['status' => 'success', 'message' => 'Your message has been sent successfully!']);
    } else {
        // Log error with more details
        $error_log = date('Y-m-d H:i:s') . " - Email failed to send to: $receiving_email_address. Error: " . error_get_last()['message'] . "\n";
        error_log($error_log, 3, 'email_debug.log');
        
        echo json_encode(['status' => 'error', 'message' => 'Sorry, there was an error sending your message. Please try again later.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method.']);
}
?>
