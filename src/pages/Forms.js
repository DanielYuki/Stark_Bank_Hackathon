import React, { useState } from "react";
import "./Forms.css";
import { v4 as uuidv4 } from "uuid";

export default function Forms({ clients, setClients }) {
  const [formData, setFormData] = useState({
    name: "",
    employees: "",
    email: "",
    number: "",
    age: "",
    segment: "",
    amount: "",
    term: "",
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

    const { name, employees, email, number, age, segment, amount, term, goal } =
      formData;

    const nota =
      (parseFloat(age) +
        parseFloat(segment) +
        parseFloat(amount) +
        parseFloat(term)) *
      1.25;

    const jsonData = JSON.stringify({
      name,
      employees,
      email,
      number,
      age,
      segment,
      amount,
      term,
      goal,
      nota,
      id: uuidv4(),
    });

    fetch("http://localhost:8000/addClients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        console.log(data);
      });

    // console.log(jsonData);
    console.log(clients);

    // setClients([...clients, formData]);
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
            <br />
            <br />
            <label htmlFor="AMOUNT">Required amount:</label>
            <br />
            <select
              className="selectBox"
              name="amount"
              id="AMOUNT"
              value={formData.amount}
              onChange={handleChange}
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
            >
              <option value="">-----</option>
              <option value="1.00">immediate</option>
              <option value="0.90">in a bimester</option>
              <option value="0.50">in a semester</option>
              <option value="0.30">in a year</option>
            </select>
            <br />
            <br />
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
            <br />
            <br />
          </div>
        </div>

        <div>
          <label htmlFor="GOAL">Goals:</label>
          <br />
          <textarea
            className="goalBox"
            id="GOAL"
            name="goal"
            rows="7"
            cols="80"
            value={formData.goal}
            onChange={handleChange}
            placeholder="Make a discription of yours goals and methods"
          ></textarea>
          <br />
          <br />
        </div>

        <input className="selectBox" type="submit" value="Submit" />
      </form>
    </>
  );
}
