<html>
<head>
    <title>Sign Up and Sign In</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .container {
            max-width: 400px;
            margin: 0 auto;
            text-align: center;
            padding: 20px;
        }
        input[type="text"], input[type="password"], input[type="tel"] {
            width: 100%;
            padding: 10px;
            margin: 5px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        button {
            background-color: #007BFF;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Sign Up</h2>
        <form id="signup-form">
            <input type="text" id="signup-username" placeholder="Username" required><br>
            <input type="password" id="signup-password" placeholder="Password" required><br>
            <input type="tel" id="signup-phone" placeholder="Phone Number" required><br>
            <button type="submit">Sign Up</button>
        </form>
    </div>
    <div class="container">
        <h2>Sign In</h2>
        <form id="signin-form">
            <input type="text" id="signin-username" placeholder="Username" required><br>
            <input type="password" id="signin-password" placeholder="Password" required><br>
            <button type="submit">Sign In</button>
        </form>
    </div>
    <div class="container" id="user-list-container">
        <h2>Users</h2>
        <ul id="user-list"></ul>
    </div>
    <div class="container">
        <h2>Send Text Message</h2>
        <form id="send-msg-form">
            <input type="text" id="username" placeholder="Username" required><br>
            <input type="text" id="announce" placeholder="Message" required><br>
            <button type="button" onclick="sendTextMsg()">Send Message</button>
        </form>
    </div>
    <script>
    </script>
</body>
</html>
