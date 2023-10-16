<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="main.css" />
    <link rel="stylesheet" href="index.css" />
    <link rel="stylesheet" href="form.css" />
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

</head>
<body>
    <h4 for="time">Copy paste your meeting notes below!</h4>
    <br>
    <textarea id="notes" name="notes"></textarea>
    <br><br>
    <!-- Meeting summary container -->
    <div id="meetingSummary"></div>
    <!-- Summarize Meeting button -->
    <button class="btn" id="summarizeMeeting">Summarize Meeting</button>
</body>
<script>
$(document).ready(function () {
    $("#summarizeMeeting").click(function () {

        // Get user input from the textarea
        const userInput = $("#notes").val();

        // Make an HTTP request asynchronously to prevent blocking the main thread
        async function generateResponse() {
            try {
                // Instance of OpenAI class
                const openai = new OpenAI({
                    apiKey: "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",
                });

                // Function will pause and wait for the API call to complete before moving to the next step
                const response = await openai.chat.completions.create({
                    model: "gpt-3.5-turbo",
                    messages: [
                        {
                            // Instructions for the model
                            "role": "system",
                            "content": "You will be provided with meeting notes, and your task is to summarize the meeting as follows:\n\n- Overall summary of discussion\n- Action items (what needs to be done and who is doing it)\n- If applicable, a list of topics that need to be discussed more fully in the next meeting."
                        },
                        {
                            // User message
                            "role": "user",
                            "content": userInput
                        }
                    ],
                    // Parameters for the model
                    temperature: 0,
                    max_tokens: 1024,
                    top_p: 1,
                    frequency_penalty: 0,
                    presence_penalty: 0,
                });

                // Extract and display the generated summary
                const summary = response.choices[0].message.content;
                $("#meetingSummary").text(summary);
            } catch (error) {
                console.error("Error generating summary:", error);
            }
        }

        // Call the async function
        generateResponse();
    });
});
</script>
</html>
