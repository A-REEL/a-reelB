<html>
<head>
    <link rel="stylesheet" href="main.css" />
    <link rel="stylesheet" href="index.css" />
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="require.js"></script>
    <script src="app.js"></script>
</head>
<body>
    <h4>Send an SMS announcement below!</h4>
    <!-- enter msg -->
    <textarea id="announce" name="announce"></textarea>
    <br>
    <br>
    <!-- enter number -->
    <h4>Enter number to send announcement to (format +1234567890):</h4>
    <textarea id="number" name="number"></textarea>
    <br>
    <!-- send button -->
    <button class="btn" id="sendSMS" onclick="sendTextMsg()">Send SMS</button>
</body>
</html>