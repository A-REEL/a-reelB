<html>
<head>
    <link rel="stylesheet" href="main.css" />
    <link rel="stylesheet" href="index.css" />
    <link rel="stylesheet" href="form.css" />
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        #user-input {
            width: 200px;
        }
        #chat-container {
            text-align: center; 
        }
         #send-button {
            display: block;
            margin: 20px auto 0;
        }
    </style>
</head>
<body>
    <div id="chat-container">
        <div id="chat-history"></div>
        <textarea id="user-input" placeholder="Copy paste your meeting notes..."></textarea>
        <button id="send-button">Submit</button>
    </div>
</body>
</html>

<script>
    document.addEventListener('DOMContentLoaded', (event) => {
        document.getElementById('send-button').addEventListener('click', sendMessage);
        
        function removeSpecialCharsAtStart(str) {
           return str.replace(/^[^a-zA-Z]+/, '');
        }

        function formatResponse(responseText) {
        // Add a newline before the key phrase "%%Action Items%%"
            return responseText.replace(/----/g, '\n----');
        }
        
        async function sendMessage() {
            const userInput = document.getElementById('user-input').value;
            const chatHistory = document.getElementById('chat-history');

            // Display user's message
            chatHistory.innerHTML += `<div>User: ${userInput}</div>`;

            const controller = new AbortController();
            const signal = controller.signal;

            // Set a timeout to abort the fetch request
            const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 seconds

            try {
                const response = await fetch('https://meetingchat.vercel.app/api/generate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ meetingchat: userInput }),
                    signal: signal,
                    mode: 'cors' // Add this line to enable CORS
                });

                const data = await response.json();

                // Display Chatbot's response
                const formattedResponse = formatResponse(removeSpecialCharsAtStart(data.result));
                chatHistory.innerHTML += `<div>Bot: ${formattedResponse}</div>`;
                //const responseText = await response.text();
                //console.log(responseText);

            } catch (error) {
                if (error.name === 'AbortError') {
                    chatHistory.innerHTML += `<div>Error: Request timed out</div>`;
                } else {
                    chatHistory.innerHTML += `<div>Error: ${error.message}</div>`;
                }
            } finally {S
                clearTimeout(timeoutId);
            }
            
            // SQL POSTING

            try {
                const post = await fetch('/api/meetings/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                     },
                    body: JSON.stringify(userInput),
                    });

                const sqldata = await post.json();

                const responseText = await post.text();
                console.log(responseText);

            } catch (error) {
                console.log("mf")
            }
    });

</script>

