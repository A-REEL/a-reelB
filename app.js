function sendTextMsg() {
    const accountSid = 'AC4b07fc38d18a961aab8bdf8379dd1607';
    const authToken = 'edfcb65491c30a80d3cbe76dfe246e86';
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