<!DOCTYPE html>
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

    <script>
        const signupForm = document.getElementById("signup-form");
        const signinForm = document.getElementById("signin-form");

        signupForm.addEventListener("submit", async function(event) {
            event.preventDefault();
            const username = document.getElementById("signup-username").value;
            const password = document.getElementById("signup-password").value;
            const phoneNumber = document.getElementById("signup-phone").value;

            try {
                const response = await fetch('/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, password, phoneNumber })
                });

                // Handle the server's response here

            } catch (error) {
                console.error("An error occurred:", error);
            }
        });

        signinForm.addEventListener("submit", async function(event) {
            event.preventDefault();
            const username = document.getElementById("signin-username").value;
            const password = document.getElementById("signin-password").value;

            try {
                const response = await fetch('/signin', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, password })
                });

                // Handle the server's response here

            } catch (error) {
                console.error("An error occurred:", error);
            }
        });
    </script>
</body>
</html>
