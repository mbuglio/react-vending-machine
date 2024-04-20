import React from 'react';
import { Link, useParams } from 'react-router-dom';

function Snack({ snacks }) {
  const { id } = useParams();
  const snack = snacks.find(item => item.id === id);

  return (
    <div>
      <h2>Snack Details</h2>
      <img src={snack.image} alt={snack.id} style={{ width: '50%', height: 'auto' }} // Apply styling to resize the image
 /> 
      <p>{snack.message}</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
}

export default Snack;
