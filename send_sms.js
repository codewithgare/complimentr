const sendSMS = () => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require("twilio")(accountSid, authToken);

  client.messages
    .create({
      body:
        document.getElementById("youName").value +
        "says " +
        document.getElementById("theCompliment").value,
      from: "+15075790746",
      to: document.getElementById("toPhoneNumber").value,
    })
    .then((message) => console.log(message.sid));
};
