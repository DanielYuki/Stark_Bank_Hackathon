// import React, { useState } from "react";
// import emailjs from "emailjs-com";

// export default function ContactUs() {
//   const serviceId = process.env.REACT_APP_YOUR_SERVICE_ID;
//   const templateId = process.env.REACT_APP_YOUR_TEMPLATE_ID;
//   const userId = process.env.REACT_APP_YOUR_USER_ID; //public ID

//   const [toEmail, setToEmail] = useState("");
//   const [fromName, setFromName] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // EmailJS parameters
//     const templateParams = {
//       to_email: toEmail,
//       from_name: fromName,
//       message: message,
//     };

//     // Send the email
//     emailjs
//       .send(
//         serviceId,
//         templateId,
//         templateParams,
//         userId
//       )
//       .then((response) => {
//         console.log("Email sent successfully!", response.status, response.text);
//       })
//       .catch((error) => {
//         console.error("Error sending email:", error);
//       });

//     // Clear the form fields
//     setToEmail("");
//     setFromName("");
//     setMessage("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         To:
//         <input
//           type="email"
//           value={toEmail}
//           onChange={(e) => setToEmail(e.target.value)}
//         />
//       </label>
//       <label>
//         From:
//         <input
//           type="text"
//           value={fromName}
//           onChange={(e) => setFromName(e.target.value)}
//         />
//       </label>
//       <label>
//         Message:
//         <textarea
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />
//       </label>
//       <button type="submit">Send Email</button>
//     </form>
//   );
// }
