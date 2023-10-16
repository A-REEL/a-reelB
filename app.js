function sendTextMsg() {
    const accountSid = 'shh';
    const authToken = 'shh';
    const msgBody = document.getElementById('announce').value;
    const toNum =  document.getElementById('number').value;

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