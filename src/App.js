import React, { useState } from "react";
import Web3 from "web3";
import ContractABI from "./ContractABI.json";
import "./App.css";

function App() {

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState(0);
  const [ticketCount, setTicketCount] = useState(0);
  const web3 = new Web3(window.ethereum);
  const RemixContract = new web3.eth.Contract(
    ContractABI,
    "0x4257e27359232Ec9cb76b0A1Bb0Dc08E39AF6aAC"
  );

  const creatEvent= async (e) => {
    e.preventDefault();
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];
      const gas = await RemixContract.methods.creatEvent(name, price, date, ticketCount).estimateGas();
      const result = await RemixContract.methods
        .creatEvent(name, price, date, ticketCount)
        .send({ from: account, gas });
      console.log("event created successfully",result);
    } catch (error) {
      console.error("Error creating event :", error);
    }
  };
  
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Event Organizer App</h1>
        <form onSubmit={creatEvent}>
          <label>
            Event Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <br />
          <label>
            Price:
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
          </label>
          <br />
          <label>
            Date:
            <input type="number" value={date} onChange={(e) => setDate(e.target.value)} />
          </label>
          <br />
          <label>
            Ticket Count:
            <input type="number" value={ticketCount} onChange={(e) => setTicketCount(e.target.value)} />
          </label>
          <br />
          <input type="submit" value="Create Event" />
        </form>
      </header>
    </div>
  );
}

export default App;