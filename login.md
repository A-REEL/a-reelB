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
    <p id="signup-message"></p>
  </div>
  <div class="container">
    <h2>Sign In</h2>
    <form id="signin-form">
      <input type="text" id="signin-username" placeholder="Username" required><br>
      <input type="password" id="signin-password" placeholder="Password" required><br>
      <button type="submit">Sign In</button>
    </form>
    <p id="signin-message"></p>
  </div>
  <div class="container" id="user-list-container">
    <h2>Users</h2>
    <input type="text" id="search-user" placeholder="Search by Username">
    <button onclick="searchUsers()">Search</button>
    <ul id="user-list"></ul>
  </div>
  <div class="container">
    <h2>Send Text Message</h2>
    <input type="text" id="username" placeholder="Recipient's Username">
    <textarea id="announce" placeholder="Message"></textarea>
    <button onclick="sendTextMsg()">Send Message</button>
  </div>
  <script>
        const signupForm = document.getElementById("signup-form");
        const signinForm = document.getElementById("signin-form");
        const userList = document.getElementById("user-list");
        const userListContainer = document.getElementById("user-list-container");
        const searchInput = document.getElementById("search-user");
        // Define user data with usernames and phone numbers
        let userData = [
            { username: "user1", phoneNumber: "+1234567890" },
            { username: "user2", phoneNumber: "+9876543210" },
<<<<<<< HEAD
            // add more user data...
            //
=======
            // Add more user data...
>>>>>>> 9600ef629e2f4d256c393974fa207811fae36485
        ];
        signupForm.addEventListener("submit", async function(event) {
            event.preventDefault();
            const username = document.getElementById("signup-username").value;
            const password = document.getElementById("signup-password").value;
            const phoneNumber = document.getElementById("signup-phone").value;
            // Validate input and check if the username is already taken
            if (!isUsernameAvailable(username)) {
                displaySignupMessage("Username is already taken. Please choose another one.");
                return;
            }
            // Example: Add user data to the list
            userData.push({ username, phoneNumber });
            // Clear the form fields
            document.getElementById("signup-username").value = "";
            document.getElementById("signup-password").value = "";
            document.getElementById("signup-phone").value = "";
            updateUserDataList();
            displaySignupMessage("Sign-up successful!");
        });
        signinForm.addEventListener("submit", async function(event) {
            event.preventDefault();
            const username = document.getElementById("signin-username").value;
            const password = document.getElementById("signin-password").value;
            // Implement user authentication logic here.
            if (isUserAuthenticated(username, password)) {
                displaySigninMessage("Sign-in successful!");
            } else {
                displaySigninMessage("Invalid username or password. Please try again.");
            }
        });
        // Function to check if a username is available
        function isUsernameAvailable(username) {
            return !userData.some(user => user.username === username);
        }
        // Function to update the user list
        function updateUserDataList(userListData = userData) {
            userList.innerHTML = '';
            userListData.forEach(user => {
                const userItem = document.createElement("li");
                userItem.textContent = `Username: ${user.username}, Phone: ${user.phoneNumber}`;
                userList.appendChild(userItem);
            });
        }
        // Function to check if the user is authenticated (simplified)
        function isUserAuthenticated(username, password) {
            return userData.some(user => user.username === username);
        }
        // Function to search for users by username
        function searchUsers() {
            const searchQuery = searchInput.value.toLowerCase();
            const filteredUsers = userData.filter(user => user.username.toLowerCase().includes(searchQuery));
            updateUserDataList(filteredUsers);
        }
        // Function to display sign-up messages
        function displaySignupMessage(message) {
            const signupMessage = document.getElementById("signup-message");
            signupMessage.textContent = message;
        }
        // Function to display sign-in messages
        function displaySigninMessage(message) {
            const signinMessage = document.getElementById("signin-message");
            signinMessage.textContent = message;
        }
        // Function to find phone number by username
        function findPhoneNumberByUsername(username) {
            // Find user object with the matching username
            const user = userData.find(user => user.username === username);
            if (user) {
                return user.phoneNumber;
            }
            return null; // return null if username not found
        }
        // Function to reverse a string
        function reverse(str) {
            return str.split('').reverse().join('');
        }
        // Function to send a text message
        function sendTextMsg() {
<<<<<<< HEAD
            const accountSid = 'your_account_sid'; // Replace with your Twilio Account SID3
            const authToken = 'your_auth_token'; // Replace with your Twilio Auth Token
=======
            const accountSid = "AC4b07fc38d18a961aab8bdf8379dd1607";
            const revAUTH_TOKEN = "84cc737205331515ce8874cb1f01d978";
            const authToken = reverse(revAUTH_TOKEN);
>>>>>>> 9600ef629e2f4d256c393974fa207811fae36485
            const msgBody = document.getElementById('announce').value;
            const username = document.getElementById('username').value; // get entered username
            const toNum = findPhoneNumberByUsername(username); // retrieve user's phone number
            if (toNum) {
                const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;
                const formData = new FormData();
                formData.append('Body', msgBody);
                formData.append('To', toNum);
                formData.append('From', '+18447565575');
                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Basic ' + btoa(accountSid + ':' + authToken)
                    },
                    body: formData
                })
                .then(response => console.log(response))
                .catch(error => console.error('Error:', error));
            } else {
                console.log("Username not found or phone number not available.");
            }
        }
        const usersDiv = document.getElementById('users');
        const userList = document.createElement('ul');
        userData.forEach(user => {
          const userItem = document.createElement('li');
          userItem.textContent = `Username: ${user.username}, Phone: ${user.phoneNumber}`;
          userList.appendChild(userItem);
        });
        usersDiv.appendChild(userList);
<<<<<<< HEAD
        function displayMsg() {
            // You can implement code to display messages here if needed.
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
=======
        // Initial user list display
        updateUserDataList();
>>>>>>> 9600ef629e2f4d256c393974fa207811fae36485
    </script>
</body>
</html>
