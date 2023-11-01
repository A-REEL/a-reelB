const signupForm = document.getElementById("signup-form");
        const signinForm = document.getElementById("signin-form");
        const userList = document.getElementById("user-list");
        const userListContainer = document.getElementById("user-list-container");
        const searchInput = document.getElementById("search-user");
        // Define user data with usernames and phone numbers
        let userData = [
            { username: "user1", phoneNumber: "+1234567890" },
            { username: "user2", phoneNumber: "+9876543210" },
            // Add more user data...
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
        // Initial user list display
        updateUserDataList();
