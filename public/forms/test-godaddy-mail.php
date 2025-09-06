<?php
// Test GoDaddy mail functionality
$receiving_email_address = 'sales@emmessenterprises.com';

echo "<h2>GoDaddy Mail Test</h2>";

// Test 1: Check if mail function exists
echo "<h3>Test 1: Mail Function Check</h3>";
if (function_exists('mail')) {
    echo "✅ mail() function is available<br>";
} else {
    echo "❌ mail() function is NOT available<br>";
}

// Test 2: Check PHP version
echo "<h3>Test 2: PHP Version</h3>";
echo "PHP Version: " . phpversion() . "<br>";

// Test 3: Check server info
echo "<h3>Test 3: Server Information</h3>";
echo "Server: " . $_SERVER['SERVER_SOFTWARE'] . "<br>";
echo "Host: " . $_SERVER['HTTP_HOST'] . "<br>";

// Test 4: Try to send a test email
echo "<h3>Test 4: Send Test Email</h3>";
$test_subject = "Test Email from " . $_SERVER['HTTP_HOST'];
$test_message = "This is a test email to verify GoDaddy mail functionality.\n\n";
$test_message .= "Sent at: " . date('Y-m-d H:i:s') . "\n";
$test_message .= "From: " . $_SERVER['HTTP_HOST'] . "\n";

$test_headers = "From: info@emmessenterprises.com\r\n";
$test_headers .= "Reply-To: info@emmessenterprises.com\r\n";
$test_headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$result = @mail($receiving_email_address, $test_subject, $test_message, $test_headers);

if ($result) {
    echo "✅ Test email sent successfully to $receiving_email_address<br>";
    echo "Check your email inbox (and spam folder) for the test message.<br>";
} else {
    echo "❌ Test email failed to send<br>";
    $error = error_get_last();
    if ($error) {
        echo "Error: " . $error['message'] . "<br>";
    }
}

// Test 5: Check if we can write to log file
echo "<h3>Test 5: Log File Test</h3>";
$log_test = date('Y-m-d H:i:s') . " - Log file test\n";
if (error_log($log_test, 3, 'email_debug.log')) {
    echo "✅ Can write to email_debug.log<br>";
} else {
    echo "❌ Cannot write to email_debug.log<br>";
}

echo "<br><strong>Test completed!</strong>";
?>
