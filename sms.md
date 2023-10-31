<html>
<head>
    <link rel="stylesheet" href="main.css" />
    <link rel="stylesheet" href="index.css" />
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="config.js"></script>
    <script src="app.js"></script>
    <script src="login.md"></script>
</head>
<body>
<div class="containerSMS">
    <h4>Send an SMS announcement below!</h4>
    <!-- enter msg -->
    <textarea id="announce" name="announce"></textarea>
    <br>
    <br>
    <!-- enter number -->
    <h4>Enter username to send announcement to:</h4>
    <textarea id="username" name="username"></textarea>
    <br>
    <!-- send button -->
    <button class="btn" id="sendSMS" onclick="sendTextMsg()">Send SMS</button>
</div>
</body>
</html>
