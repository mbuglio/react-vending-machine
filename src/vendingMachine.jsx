import React from 'react';
import { Link } from 'react-router-dom';

function VendingMachine({snacks}) {
  return (
    <div>
      <h1>Vending Machine</h1>
      <ul>
        {snacks.map(snack => (
          <li key={snack.id}>
            <Link to={`/snack/${snack.id}`}>{snack.id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VendingMachine;
