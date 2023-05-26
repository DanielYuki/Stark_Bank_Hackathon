import React, { useState } from "react";

export default function Forms() {
  const [formData, setFormData] = useState({
    name: "",
    employees: "",
    email: "",
    age: "",
    segment: "",
    amount: "",
    term: "",
    goal: "",
    nota: 0,
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

    const { name, employees, email, age, segment, amount, term, goal } =
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
      age,
      segment,
      amount,
      term,
      goal,
      nota,
    });

    console.log(jsonData);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateEmployees = (employees) => {
    const employeesRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return employeesRegex.test(employees);
  };

  return (
    <>
      <h1>Forms</h1>

      <form id="formularioEmprestimo" onSubmit={handleSubmit}>

        <label htmlFor="NAME">Name:</label>
        <br />
        <input
          type="text"
          id="NAME"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="EMAIL">Email:</label>
        <br />
        <input
          type="text"
          id="EMAIL"
          name="email"
          value={formData.email}
          onChange={handleChange}
          pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
          title="Please enter a valid email."
          required
        />
        <br />

        <label htmlFor="EMPLOYEES">Number of employees:</label>
        <br />
        <input
          type="text"
          id="EMPLOYEES"
          name="employees"
          value={formData.employees}
          onChange={handleChange}
          pattern="^\d+$"
          title="Please enter a valid number."
          required
        />
        <br />

        <label htmlFor="AGE">Age of the company:</label>
        <br />
        <select
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

        <label htmlFor="SEGMENT">The company segment:</label>
        <br />
        <select
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

        <label htmlFor="AMOUNT">Required amount:</label>
        <br />
        <select
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

        <label htmlFor="TERM">Start of payment:</label>
        <br />
        <select
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

        <label htmlFor="GOAL">Goals:</label>
        <br />
        <textarea
          id="GOAL"
          name="goal"
          rows="7"
          cols="75"
          value={formData.goal}
          onChange={handleChange}
        ></textarea>
        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
