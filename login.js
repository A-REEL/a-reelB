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
