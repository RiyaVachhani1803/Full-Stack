import { useState } from 'react'
import { genTicket, sum } from './helper'
import Ticket from './Ticket'

export default function Lottery({n, winningSum}) {
    let [ticket, setTicket] = useState(genTicket(3));
    let isWinning = sum(ticket) === winningSum;

    function buyTicket() {
        setTicket(genTicket(3));
    }

  return (
    <div>
      <h1>Lottery Game!</h1>
      <Ticket ticket={ticket} /> <br />
      <button onClick={buyTicket}>Buy new Ticket</button>
      <h3>{isWinning && "Congratulations, You won!"}</h3>
    </div>
  );
}