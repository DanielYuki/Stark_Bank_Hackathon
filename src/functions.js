import emailjs from "emailjs-com";
const { jsPDF } = require("jspdf");

//automatically sends a mail
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

// generate a contract pdf
export function generateContract(client) {
  const name = client.name;
  const cnpj = client.CNPJCPF;

  // Create PDF using jsPDF
  const pdf = new jsPDF();

  pdf.setFontSize(18);
  pdf.text("Contrato de Financiamento Stark Bank", 105, 20, {
    align: "center",
  });

  //n para de rodar D:
  pdf.addImage("starkLogo.png", "JPEG", 8, 6, 192, 192);

  pdf.setFontSize(12);
  pdf.setFont("times");

  const text = `O presente contrato define as condições gerais aplicáveis ao Empréstimo, concedido pela Stark Bank, inscrita no CNPJ pelo número 20.018.183/0001-80 doravante denominada Mutuante, e ${name}, inscrita no CNPJ pelo número ${cnpj}, doravante denominada Mutuária, de acordo com a Lei Complementar nº 167 de 25/04/2018.`;

  const splitText = pdf.splitTextToSize(text, 180); // Split text into lines with a width of 180 units

  let y = 40; // Starting y-coordinate
  splitText.forEach((line) => {
    pdf.text(line, 15, y, { align: "justify" });
    y += 6; // Increase y-coordinate for the next line
  });
  pdf.setFont("times", "bold");
  pdf.text("CLÁUSULA PRIMEIRA: DEFINIÇÕES", 15, y + 6, { align: "left" });

  // Save PDF
  pdf.save("test1.pdf");
}
