const accountSid = process.env.ACC_SID;
const authToken = process.env.AUTH_TOKEN;

const userData = [
    { username: "aliya.tang", phoneNumber: "+13608238458" },
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

function sendTextMsg() {
        const accountSid =  config.ACC_SID;
        const authToken = config.AUTH_TOKEN;
        const msgBody = document.getElementById('announce').value;
        const username = document.getElementById('username').value; // get entered username
        const toNum =  findPhoneNumberByUsername(username); // retrieve user's phone number
        //const toNum =  document.getElementById('username').value; 
        
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