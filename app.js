class User {
    initialize(username, phoneNumber) {
        this.username = username;
        this.phoneNumber = phoneNumber;
    }

    getPhoneNumber() {
        return this.phoneNumber;
    }
}


function reverse(str) {
    return str.split('').reverse().join('');
}

function sendTextMsg(user) {
        const accountSid =  "AC4b07fc38d18a961aab8bdf8379dd1607";
        const revAUTH_TOKEN = "84cc737205331515ce8874cb1f01d978"; 
        const authToken = reverse(revAUTH_TOKEN);
        const msgBody = document.getElementById('announce').value;
        //const username = document.getElementById('username').value; // get entered username
        //const toNum =  findPhoneNumberByUsername(username); // retrieve user's phone number
        const toNum =  user.getPhoneNumber(); 
        
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

function sendSMSClick() {
    const user1 = new User();
    user1.initialize("aliya.tang","+13608238458")
    sendTextMsg(user1);
}

