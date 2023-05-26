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
