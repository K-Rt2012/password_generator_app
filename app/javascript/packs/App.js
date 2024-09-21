import React, { useState } from 'react';

const App = () => {
  const [password, setPassword] = useState('');

  const generatePassword = async () => {
    const response = await fetch('/generate_password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    setPassword(data.password);
  };

  return (
    <div>
      <h1>Password Generator App</h1>
      <button onClick={generatePassword}>Generate Password</button>
      {password && <p>Generated Password: {password}</p>}
    </div>
  );
};

export default App;

