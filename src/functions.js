import emailjs from "emailjs-com";

export function sendEmail(toEmail, fromName, message) {
  const serviceId = process.env.REACT_APP_YOUR_SERVICE_ID;
  const templateId = process.env.REACT_APP_YOUR_TEMPLATE_ID;
  const userId = process.env.REACT_APP_YOUR_USER_ID; //public ID

  // EmailJS parameters
  const templateParams = {
    to_email: toEmail,
    from_name: fromName,
    message: message,
  };

  // Send the email
  emailjs
    .send(serviceId, templateId, templateParams, userId)
    .then((response) => {
      console.log("Email sent successfully!", response.status, response.text);
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });
}

export function calculateAmount(num){
let value

  switch(num) {
    case "0.10": value = 'less than $10.000';break;
    case "0.25": value = 'between $10.000 and $50.000';break;
    case "0.45": value = 'between $50.000 and $200.000';break;
    case "0.70": value = 'between $200.000 and $1.000.000';break;
    case "1.00": value = 'between $1.000.000 and $5.000.000';break;
    case "0.80": value = 'between $5.000.000 and $20.000.000';break;
    case "0.50": value = 'between $20.000.000 and $100.000.000';break;
    case "0.20": value = 'over than $100.000.000';break;
    default: value = 'Invalid value';break;
  }
  return value
}
