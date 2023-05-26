import React, { useState } from "react";
import "./Forms.css";
import { v4 as uuidv4 } from "uuid";
// import { sendEmail } from "../functions";
// import { generateContract } from "../functions";

export default function Forms({ clients, setClients }) {
  const [formData, setFormData] = useState({
    name: "",
    employees: "",
    email: "",
    number: "",
    age: "",
    segment: "",
    ammount: "",
    term: "",
    CNPJCPF: "",
    streetline1: "",
    streetline2: "",
    district: "",
    city: "",
    CEP: "",
    UF: "",
    goal: "",
    nota: 0,
    id: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, employees, email, number, age, segment, ammount, term, CNPJCPF, streetline1, streetline2, district, city, CEP, UF, goal } =
      formData;

    const nota =
      (parseFloat(age) +
        parseFloat(segment) +
        parseFloat(ammount) +
        parseFloat(term)) *
      1.25;

    const jsonData = JSON.stringify({
      name,
      employees,
      email,
      number,
      age,
      segment,
      ammount,
      term,
      CNPJCPF,
      streetline1,
      streetline2,
      district,
      city,
      CEP,
      UF,
      goal,
      nota,
      id: uuidv4(),
    });

    // GENERATE PDF CONTRACT FUNCTION
    // generateContract(formData);

    try {
      fetch("http://localhost:8000/addClients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonData,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.text();
        })
        .then((data) => {
          // REMEMBER TO UNCOMMENT THIS TO USE EMAIL
          // sendEmail(email, name, goal)
          // console.log("email sent to " + email)
          console.log(data);
        });
    } catch (error) {
      // Handle the error here
      console.error("An error occurred:", error);
    }

  };

  return (
    <>
      <h1>Loan proposal</h1>

      <form className="box" id="formularioEmprestimo" onSubmit={handleSubmit}>
        <div className="boxTechnicalAndContact">
          <div className="technical">
            <h2>technical information</h2>
            <label htmlFor="EMPLOYEES">Number of employees:</label>
            <br />
            <input
              className="selectBox"
              type="text"
              id="EMPLOYEES"
              name="employees"
              value={formData.employees}
              onChange={handleChange}
              placeholder="-----"
              pattern="^\d+$"
              title="Please enter a valid number."
              required
            />
            <br /> <br />
            <label htmlFor="AGE">Age of the company:</label>
            <br />
            <select
              className="selectBox"
              name="age"
              id="AGE"
              value={formData.age}
              onChange={handleChange}
              required
            >
              <option value="">-----</option>
              <option value="0.15">less than a year</option>
              <option value="0.25">Between 1 and 2 years</option>
              <option value="0.40">Between 2 and 4 years</option>
              <option value="0.50">Between 4 and 8 years</option>
              <option value="0.75">Between 8 and 16 years</option>
              <option value="1.00">Over 16 years old</option>
            </select>
            <br />
            <br />
            <label htmlFor="SEGMENT">The company segment:</label>
            <br />
            <select
              className="selectBox"
              name="segment"
              id="SEGMENT"
              value={formData.segment}
              onChange={handleChange}
              required
            >
              <option value="">-----</option>
              <option value="0.90">Strategic management</option>
              <option value="0.91">Operational management</option>
              <option value="1.00">Financial management</option>
              <option value="0.51">Human resource management</option>
              <option value="0.30">Marketing and sales</option>
              <option value="0.80">Information technology management</option>
              <option value="0.70">Retail</option>
              <option value="0.49">Supply chain management</option>
              <option value="0.52">Quality management</option>
              <option value="0.60">Research and development</option>
              <option value="0.71">Innovation management</option>
              <option value="0.31">Public relations and communication</option>
              <option value="0.48">Sustainability management</option>
              <option value="0.69">Strategic planning</option>
              <option value="0.81">Market analysis</option>
              <option value="0.72">Business consulting</option>
              <option value="0.90">Risk management</option>
              <option value="0.79">Project management</option>
              <option value="0.40">Government relations</option>
              <option value="0.68">Corporate social responsibility</option>
            </select>
            <br /><br />

            <label htmlFor="AMMOUNT">Required amount:</label>
            <br />
            <select
              className="selectBox"
              name="ammount"
              id="AMMOUNT"
              value={formData.ammount}
              onChange={handleChange}
              required
            >
              <option value="">-----</option>
              <option value="0.10">Less than $10.000</option>
              <option value="0.25">Between $10.000 and $50.000</option>
              <option value="0.45">Between $50.000 and $200.000</option>
              <option value="0.70">Between $200.000 and $1.000.000</option>
              <option value="1.00">Between $1.000.000 and $5.000.000</option>
              <option value="0.80">Between $5.000.000 and $20.000.000</option>
              <option value="0.50">Between $20.000.000 and $100.000.000</option>
              <option value="0.20">Over than $100.000.000</option>
            </select>
            <br />
            <br />
            <label htmlFor="TERM">Start of payment:</label>
            <br />
            <select
              className="selectBox"
              name="term"
              id="TERM"
              value={formData.term}
              onChange={handleChange}
              required
            >
              <option value="">-----</option>
              <option value="1.00">immediate</option>
              <option value="0.90">in a bimester</option>
              <option value="0.50">in a semester</option>
              <option value="0.30">in a year</option>
            </select>
            <br /><br />

            <label htmlFor="CNPJCPF">CNPJ/CPF:</label>
            <br />
            <input
              className="selectBox"
              type="text"
              id="CNPJCPF"
              name="CNPJCPF"
              value={formData.CNPJCPF}
              onChange={handleChange}
              placeholder="-----"
              pattern="^\d+$"
              title="Please enter a valid CNPJ/CPF."
              required
            />
            <br /> <br />

            <label htmlFor="streetline1">streetline1:</label>
            <br />
            <input
              className="selectBox"
              type="text"
              id="streetline1"
              name="streetline1"
              value={formData.streetline1}
              onChange={handleChange}
              placeholder="-----"
              required
            />
            <br /><br />

            <label htmlFor="streetline2">streetline2:</label>
            <br />
            <input
              className="selectBox"
              type="text"
              id="streetline2"
              name="streetline2"
              value={formData.streetline2}
              onChange={handleChange}
              placeholder="-----"
              required
            />
            <br /><br />

            <label htmlFor="district">District:</label>
            <br />
            <input
              className="selectBox"
              type="text"
              id="district"
              name="district"
              value={formData.district}
              onChange={handleChange}
              placeholder="-----"
              required
            />
            <br /><br />

            <label htmlFor="city">city:</label>
            <br />
            <input
              className="selectBox"
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="-----"
              required
            />
            <br /><br />

            <label htmlFor="CEP">CEP:</label>
            <br />
            <input
              className="selectBox"
              type="text"
              id="CEP"
              name="CEP"
              value={formData.CEP}
              onChange={handleChange}
              placeholder="-----"
              pattern="^\d+$"
              title="Please enter a valid number."
              required
            /> <br /><br />

            <label htmlFor="UF">UF:</label>
            <br />
            <select
              className="selectBox"
              name="UF"
              id="UF"
              value={formData.UF}
              onChange={handleChange}
              required
            >
              <option value="">-----</option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>

            </select>
            <br /><br />

          </div>

          <div className="contact">
            <h2>Contact information</h2>

            <label htmlFor="NAME">Company name:</label>
            <br />
            <input
              className="selectBox"
              type="text"
              id="NAME"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="-----"
              required
            />
            <br />
            <br />

            <label htmlFor="EMAIL">Email:</label>
            <br />
            <input
              className="selectBox"
              type="text"
              id="EMAIL"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="validemail@gmail.com"
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              title="Please enter a valid email."
              required
            />
            <br />
            <br />

            <label htmlFor="NUMBER">Phone Number:</label>
            <br />
            <input
              className="selectBox"
              type="text"
              id="Number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="with country code"
              pattern="^\d+$"
              title="Please enter a valid number."
              required
            />
            <br /><br />

            <label htmlFor="GOAL"><h2>Goals</h2></label>
            <br />
            <textarea
              className="goalBox"
              id="GOAL"
              name="goal"
              rows="29"
              cols="27"
              value={formData.goal}
              onChange={handleChange}
              placeholder="Make a discription of yours goals and methods"
              required
            ></textarea>
            <br />
            <br />

          </div>

        </div>

        <div>


        </div>

        <input className="selectBox" type="submit" value="Submit" />
      </form>
    </>
  );
}
