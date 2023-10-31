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
            <input type="password" id "signup-password" placeholder="Password" required><br>
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
    <script>
        const signupForm = document.getElementById("signup-form");
        const signinForm = document.getElementById("signin-form");
        const userList = document.getElementById("user-list");
        const userListContainer = document.getElementById("user-list-container");

        // define user data w/ usernames and numbers
        const userData = [
            { username: "user1", phoneNumber: "+1234567890" },
            { username: "user2", phoneNumber: "+9876543210" },
            // add more user data...
        ];

        function findPhoneNumberByUsername(username) {
            // find user object with the matching username
            const user = userData.find((user) => user.username === username);
            if (user) {
                return user.phoneNumber;
            }
            return null; // return null if username not found
        }

        signupForm.addEventListener("submit", async function(event) {
            event.preventDefault();
            const username = document.getElementById("signup-username").value;
            const password = document.getElementById("signup-password").value;
            const phoneNumber = document.getElementById("signup-phone").value;
            // Example: Add user data to the list
            const userItem = document.createElement("li");
            userItem.textContent = `Username: ${username}, Password: ${password}, Phone: ${phoneNumber}`;
            userList.appendChild(userItem);

            // You can add code here to send data to the server for storage.
        });

        signinForm.addEventListener("submit", async function(event) {
            event.preventDefault();
            const username = document.getElementById("signin-username").value;
            const password = document.getElementById("signin-password").value;

            // You can add code here to handle the sign-in process, e.g., send data to a server for authentication.
        });
    </script>
</body>
</html>
