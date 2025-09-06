<?php
// Simple test email script
$receiving_email_address = 'sales@emmessenterprises.com';
$from_email = 'info@emmessenterprises.com';

// Test email content
$email_subject = "Test Email from Website";
$email_body = "This is a test email to verify that the PHP mailer is working correctly.\n\n";
$email_body .= "Sent at: " . date('Y-m-d H:i:s') . "\n";
$email_body .= "From: " . $_SERVER['HTTP_HOST'] . "\n";

// Enhanced headers for GoDaddy
$headers = array();
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-Type: text/plain; charset=UTF-8";
$headers[] = "From: EMMESS Enterprises <$from_email>";
$headers[] = "Return-Path: $from_email";
$headers[] = "X-Mailer: PHP/" . phpversion();

$header_string = implode("\r\n", $headers);

// Try to send email
$mail_sent = mail($receiving_email_address, $email_subject, $email_body, $header_string);

if ($mail_sent) {
    echo "SUCCESS: Test email sent successfully to $receiving_email_address";
} else {
    echo "ERROR: Failed to send test email";
}
?>
