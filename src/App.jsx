import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VendingMachine from './vendingMachine';
import Snack from './snack';

export function App(){
  const snacks = [
    { id: 'chips', message: 'Enjoy your crunchy chips!', image:'https://images.unsplash.com/photo-1613919113640-25732ec5e61f?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'candy', message: 'Indulge in some sweet candy!', image: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FuZHl8ZW58MHx8MHx8fDA%3D' },
    { id: 'soda', message: 'Quench your thirst with a refreshing soda!', image:'https://images.unsplash.com/photo-1629186235045-80d4147d90dc?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
  ];

    return (
    <Router>
      <Routes>
        <Route exact path="/" element={<VendingMachine snacks={snacks} />} />
        <Route path="/snack/:id" element={<Snack snacks={snacks} />} />
      </Routes>
    </Router>   
        
    );
}

export default App;
