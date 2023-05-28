import emailjs from "emailjs-com";
const { jsPDF } = require("jspdf");

//automatically sends a mail
export function sendEmail(toEmail, fromName, comment, amount) {
  const serviceId = process.env.REACT_APP_YOUR_SERVICE_ID;
  const templateId = process.env.REACT_APP_YOUR_TEMPLATE_ID;
  const userId = process.env.REACT_APP_YOUR_USER_ID; //public ID

  // EmailJS parameters
  const templateParams = {
    to_email: toEmail,
    from_name: fromName,
    comment: comment,
    amount: amount,
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

export function calculateAmount(num) {
  let value;
  switch (num) {
    case "0.10":
      value = "less than $10.000";
      break;
    case "0.25":
      value = "between $10.000 and $50.000";
      break;
    case "0.45":
      value = "between $50.000 and $200.000";
      break;
    case "0.70":
      value = "between $200.000 and $1.000.000";
      break;
    case "1.00":
      value = "between $1.000.000 and $5.000.000";
      break;
    case "0.80":
      value = "between $5.000.000 and $20.000.000";
      break;
    case "0.50":
      value = "between $20.000.000 and $100.000.000";
      break;
    case "0.20":
      value = "over than $100.000.000";
      break;
    default:
      value = "Invalid value";
      break;
  }
  return value;
}

export function ageOfCompany(num) {
  let value;
  switch (num) {
    case "0.15":
      value = "less than a year";
      break;
    case "0.25":
      value = "Between 1 and 2 years";
      break;
    case "0.40":
      value = "Between 2 and 4 years";
      break;
    case "0.50":
      value = "Between 4 and 8 years";
      break;
    case "0.75":
      value = "Between 8 and 16 years";
      break;
    case "1.00":
      value = "Over 16 years old";
      break;
    default:
      value = "Invalid value";
      break;
  }
  return value;
}

export function companySegment(num) {
  let value;
  switch (num) {
    case "0.90":
      value = "Strategic management";
      break;
    case "0.91":
      value = "Operational management";
      break;
    case "1.00":
      value = "Financial management";
      break;
    case "0.51":
      value = "Human resource management";
      break;
    case "0.30":
      value = "Marketing and sales";
      break;
    case "0.80":
      value = "Information technology management";
      break;
    case "0.70":
      value = "Retail";
      break;
    case "0.49":
      value = "Supply chain management";
      break;
    case "0.52":
      value = "Quality management";
      break;
    case "0.60":
      value = "Research and development";
      break;
    case "0.71":
      value = "Innovation management";
      break;
    case "0.31":
      value = "Public relations and communication";
      break;
    case "0.48":
      value = "Sustainability management";
      break;
    case "0.69":
      value = "Strategic planning";
      break;
    case "0.81":
      value = "Market analysis";
      break;
    case "0.72":
      value = "Business consulting";
      break;
    case "0.92":
      value = "Risk management";
      break;
    case "0.79":
      value = "Project management";
      break;
    case "0.40":
      value = "Government relations";
      break;
    case "0.68":
      value = "Corporate social responsibility";
      break;
    default:
      value = "Invalid value";
      break;
  }
  return value;
}

