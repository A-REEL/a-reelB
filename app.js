import userData from './login.js';

function findPhoneNumberByUsername(username) {
    // find user object with the matching username
    const user = userData.find((user) => user.username === username);
    if (user) {
        return user.phoneNumber;
    }
    return null; // return null if username not found
}

function sendTextMsg() {
        const accountSid = config.ACC_SID;
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
/*
function sendTextMsg() {
    const accountSid = config.ACC_SID;
    const authToken = config.AUTH_TOKEN;
    //const accountSid = 'AC4b07fc38d18a961aab8bdf8379dd1607';
    //const authToken = 'cb23c7fb2d619ac7d19fffa4ac96d608';
    const msgBody = document.getElementById('announce').value;
    const toNum =  document.getElementById('username').value;

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
}
*/
